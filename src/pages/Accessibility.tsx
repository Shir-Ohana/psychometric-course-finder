import React from 'react';
import { SEO } from '../components/seo/SEO';

export const Accessibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4" dir="rtl">
      <SEO 
        title="הצהרת נגישות" 
        description="הצהרת הנגישות של פסיכומטרי פיינדר - אנו פועלים להנגשת האתר לכולם."
      />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-8">הצהרת נגישות</h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>אנו פועלים להנגשת האתר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.</p>
          <h2 className="text-xl font-bold text-gray-900">אמצעי נגישות</h2>
          <p>האתר תומך בשימוש במקלדת, ניווט ברור, וטקסט חלופי לתמונות.</p>
          <h2 className="text-xl font-bold text-gray-900">פניות בנושא נגישות</h2>
          <p>אם נתקלת בבעיית נגישות, אנא צור קשר בכתובת info@psychofinder.co.il.</p>
        </div>
      </div>
    </div>
  );
};
