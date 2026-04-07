import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security Headers - Relaxed for development to prevent blank preview
  if (process.env.NODE_ENV === 'production') {
    app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "img-src": ["'self'", "data:", "https://picsum.photos", "https://*.google.com"],
          "connect-src": ["'self'", "https://*.google.com", "https://docs.google.com"],
        },
      },
    }));
  } else {
    // In development, we use a very relaxed CSP or no helmet to ensure Vite works correctly
    app.use(helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }));
  }

  // Rate Limiting
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: 'Too many requests',
      message: 'יותר מדי בקשות מהכתובת הזו. אנא נסו שוב מאוחר יותר.'
    }
  });

  // Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API Routes
  app.get('/api/courses', apiLimiter, async (req, res) => {
    // Public CSV URL provided by the user as the primary data source
    const defaultCsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSgHapluksZMZ23P9BJ2q_lb84Hw1RwnfbbPPquwoBuZdOPDtcMHO7sJuIKzA_LmdtRP6SsPPpXXQAb/pub?output=csv';
    const csvUrl = process.env.COURSES_CSV_URL || defaultCsvUrl;

    try {
      const response = await fetch(csvUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.status}`);
      }

      const csvText = await response.text();
      
      // Robust CSV parser to handle quotes, newlines in quotes, and BOM
      const parseCSV = (text: string) => {
        const cleanText = text.replace(/^\ufeff/, ''); // Remove BOM
        const rows: string[][] = [];
        let currentField = '';
        let inQuotes = false;
        let currentRow: string[] = [];

        for (let i = 0; i < cleanText.length; i++) {
          const char = cleanText[i];
          const nextChar = cleanText[i + 1];

          if (char === '"') {
            if (inQuotes && nextChar === '"') {
              currentField += '"';
              i++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === ',' && !inQuotes) {
            currentRow.push(currentField.trim());
            currentField = '';
          } else if ((char === '\r' || char === '\n') && !inQuotes) {
            if (currentField || currentRow.length > 0) {
              currentRow.push(currentField.trim());
              rows.push(currentRow);
              currentField = '';
              currentRow = [];
            }
            if (char === '\r' && nextChar === '\n') i++;
          } else {
            currentField += char;
          }
        }
        if (currentField || currentRow.length > 0) {
          currentRow.push(currentField.trim());
          rows.push(currentRow);
        }
        return rows;
      };

      const rows = parseCSV(csvText);

      if (rows.length < 2) {
        return res.json([]);
      }

      const headers = rows[0].map(h => h.toLowerCase().trim());
      const dataRows = rows.slice(1);

      // Map headers to indices case-insensitively
      const getIdx = (name: string) => headers.indexOf(name.toLowerCase());

      const courses = dataRows.map((row, index) => {
        const getValue = (name: string) => {
          const idx = getIdx(name);
          return (idx !== -1 && row[idx]) ? row[idx] : '';
        };

        // Robust price parsing (handle currency symbols, commas)
        const rawPrice = getValue('price_ils');
        const cleanPrice = rawPrice.replace(/[^\d]/g, '');
        const priceIls = parseInt(cleanPrice) || 0;

        return {
          id: `course-${index}`,
          providerName: getValue('provider_name'),
          courseName: getValue('course_name'),
          deliveryFormat: getValue('delivery_format'),
          meetingsInfo: getValue('meetings_info'),
          durationInfo: getValue('duration_info'),
          priceIls: priceIls,
          priceNote: getValue('price_note'),
          targetLevel: getValue('target_level'),
          publicInfoSummary: getValue('public_info_summary'),
          officialUrl: getValue('official_url'),
          lastVerified: getValue('last_verified'),
        };
      });

      res.json(courses);
    } catch (error) {
      console.error('Error fetching from Google Sheets CSV:', error);
      res.status(503).json({ 
        error: 'Failed to fetch course data',
        message: 'לא ניתן היה לטעון את נתוני הקורסים מהגיליון. אנא נסו שוב מאוחר יותר.'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
