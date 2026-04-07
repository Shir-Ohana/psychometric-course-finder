import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-800 text-sm mb-8" dir="rtl">
      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
      <p className="leading-relaxed">
        המידע באתר מבוסס על מקורות ציבוריים והערכות כלליות לצורכי השוואה בלבד. לפני הרשמה מומלץ לאמת את הפרטים מול הגוף המלמד.
      </p>
    </div>
  );
};
