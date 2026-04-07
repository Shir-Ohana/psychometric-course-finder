import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-500 py-12 border-t border-slate-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand Logo Simple */}
          <div className="flex items-center gap-2 text-slate-900 opacity-80">
            <div className="w-6 h-6 bg-slate-400 rounded flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="text-lg font-bold tracking-tight">פסיכומטרי פיינדר</span>
          </div>

          {/* Disclaimer */}
          <p className="text-sm max-w-md leading-relaxed">
            המידע באתר מבוסס על מקורות ציבוריים והערכות בלבד.
          </p>

          {/* Simple Contact */}
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-slate-400" />
            <a href="mailto:info@psychofinder.co.il" className="hover:text-blue-600 transition-colors">info@psychofinder.co.il</a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-slate-200 w-full text-[11px]">
            <p>© {currentYear} פסיכומטרי פיינדר. כל הזכויות שמורות.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
