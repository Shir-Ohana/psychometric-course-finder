import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { Target, Users, ShieldCheck, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO 
        title="אודות" 
        description="למדו עוד על פסיכומטרי פיינדר - המשימה שלנו היא לעזור לכם למצוא את קורס הפסיכומטרי הטוב ביותר עבורכם."
      />

      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">הסיפור שלנו</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            פסיכומטרי פיינדר הוקמה במטרה להנגיש את המידע על קורסי הפסיכומטרי בישראל בצורה שקופה, אובייקטיבית ופשוטה.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">המשימה שלנו</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              אנחנו מאמינים שלכל תלמיד מגיע למצוא את מסגרת הלימודים שתאפשר לו למצות את הפוטנציאל שלו. עולם הפסיכומטרי יכול להיות מבלבל, עם עשרות מכונים ומאות מסלולים.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              התפקיד שלנו הוא לעשות סדר בבלגן, להשוות מחירים, איכויות ושיטות לימוד, ולתת לכם את הכלים לקבל החלטה מושכלת.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">אמינות</h4>
                  <p className="text-sm text-gray-500">מידע מאומת ומעודכן</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">דיוק</h4>
                  <p className="text-sm text-gray-500">התאמה אישית לכל תלמיד</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-blue-50 rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/study/800/800" 
                alt="Students studying" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">אובייקטיביות</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 bg-blue-50 rounded-3xl p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">מקור המידע והאמינות שלנו</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            פסיכומטרי פיינדר פועל כפלטפורמה עצמאית לחלוטין. המידע המוצג באתר נאסף ממקורות ציבוריים, אתרי המכונים, ודיווחים של תלמידים.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            אנחנו מעדכנים את הנתונים באופן שוטף כדי להבטיח דיוק מרבי, אך חשוב לזכור כי המחירים והמסלולים עשויים להשתנות על ידי המכונים עצמם. המטרה שלנו היא לתת לכם תמונה רחבה והשוואתית שתעזור לכם להתחיל את התהליך בביטחון.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/compare" 
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              השוו קורסים עכשיו
            </Link>
            <Link 
              to="/calculator" 
              className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-sm"
            >
              מחשבון התאמה אישי
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
