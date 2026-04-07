import React from 'react';
import { SEO } from '../components/seo/SEO';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4" dir="rtl">
      <SEO 
        title="תנאי שימוש" 
        description="תנאי השימוש באתר פסיכומטרי פיינדר. קראו את התנאים לפני השימוש בשירות."
      />
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-8">תנאי שימוש</h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>השימוש באתר ובשירותיו כפוף לתנאים הבאים.</p>
          <h2 className="text-xl font-bold text-gray-900">שימוש בשירות</h2>
          <p>המידע המוצג באתר הוא להשוואה בלבד ואינו מהווה ייעוץ מקצועי.</p>
          <h2 className="text-xl font-bold text-gray-900">אחריות</h2>
          <p>אנחנו עושים את מירב המאמצים לספק מידע מדויק, אך איננו אחראים לשינויים במחירי הקורסים או בתוכנם.</p>
        </div>
      </div>
    </div>
  );
};
