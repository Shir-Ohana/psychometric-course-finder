import React from 'react';
import { SEO } from '../components/seo/SEO';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4" dir="rtl">
      <SEO 
        title="מדיניות פרטיות" 
        description="מדיניות הפרטיות של פסיכומטרי פיינדר - איך אנחנו שומרים על המידע שלכם."
      />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-8">מדיניות פרטיות</h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>אנחנו מעריכים את הפרטיות שלך. דף זה מפרט את סוגי המידע שאנו אוספים וכיצד אנו משתמשים בו.</p>
          <h2 className="text-xl font-bold text-gray-900">איסוף מידע</h2>
          <p>אנו אוספים מידע שאתה מספק לנו ישירות בעת שימוש במחשבון ההתאמה או ביצירת קשר.</p>
          <h2 className="text-xl font-bold text-gray-900">שימוש במידע</h2>
          <p>המידע משמש לשיפור השירות שלנו ולמתן המלצות מותאמות אישית.</p>
        </div>
      </div>
    </div>
  );
};
