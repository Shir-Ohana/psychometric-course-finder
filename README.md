# פסיכומטרי פיינדר (Psychometry Finder)

מערכת השוואת קורסי פסיכומטרי חכמה המאפשרת למצוא את הקורס המתאים ביותר עבורך על בסיס נתונים אובייקטיביים.

## תכונות עיקריות

- **השוואת קורסים**: סינון ומיון קורסים לפי מחיר, פורמט (אונליין/פרונטלי), רמת יעד ועוד.
- **מחשבון התאמה**: כלי אינטראקטיבי שעוזר לבחור את הקורס המתאים ביותר על פי העדפות אישיות.
- **מידע מעודכן**: נתונים הנמשכים ישירות מגיליון נתונים מרכזי (Google Sheets).
- **ממשק משתמש מודרני**: עיצוב נקי, רספונסיבי ותומך עברית (RTL).

## טכנולוגיות

- **Frontend**: React 19, Vite, Tailwind CSS, Lucide React, Motion.
- **Backend**: Express.js (Node.js).
- **Data Source**: Google Sheets CSV API.
- **Security**: Helmet, Express Rate Limit.

## התקנה והרצה

1. שכפל את המאגר:
   ```bash
   git clone <repository-url>
   ```
2. התקן תלויות:
   ```bash
   npm install
   ```
3. הגדר משתני סביבה:
   העתק את `.env.example` ל-`.env` ומלא את הערכים הנדרשים (כמו `COURSES_CSV_URL`).
4. הרץ את השרת במצב פיתוח:
   ```bash
   npm run dev
   ```
5. בנה את הפרויקט לייצור:
   ```bash
   npm run build
   npm start
   ```

## פריסה (Deployment)

הפרויקט מוגדר לפריסה קלה ב-**Vercel** או **Cloud Run**:
- **Vercel**: השתמש בקובץ `vercel.json` ובתיקיית `api/` עבור Serverless Functions.
- **Cloud Run**: השתמש ב-`server.ts` כנקודת כניסה ראשית.

לפרטים נוספים על פריסה ב-Vercel, עיינו בקובץ `README_VERCEL.md`.

## רישיון

כל הזכויות שמורות לפסיכומטרי פיינדר © 2026.
