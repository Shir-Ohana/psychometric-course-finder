import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/seo/SEO';
import { Disclaimer } from '../components/common/Disclaimer';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="דף הבית" 
        description="השוואת קורסי פסיכומטרי בישראל. מצא את הקורס המתאים לך ביותר לפי מחיר, מיקום ואיכות."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              הדרך שלך ל-700 מתחילה כאן
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed"
            >
              השוואת קורסי פסיכומטרי אובייקטיבית שתעזור לך למצוא את המסלול המושלם עבורך.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/compare" 
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                השוו קורסים עכשיו
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link 
                to="/calculator" 
                className="bg-blue-600 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
              >
                מחשבון התאמה אישי
                <Zap className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">למה להשתמש בפסיכומטרי פיינדר?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">מידע אובייקטיבי</h3>
              <p className="text-gray-600 leading-relaxed">
                אנחנו לא קשורים לאף מכון. המידע שלנו מבוסס על נתונים יבשים וחוות דעת של תלמידים.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">התאמה אישית</h3>
              <p className="text-gray-600 leading-relaxed">
                המחשבון שלנו לוקח בחשבון את התקציב, המיקום והיכולות שלכם כדי למצוא את הקורס האידיאלי.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">חיסכון בזמן וכסף</h3>
              <p className="text-gray-600 leading-relaxed">
                במקום להתקשר לכל המכונים, תוכלו לראות את כל המחירים והמסלולים במקום אחד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">מכוני פסיכומטרי</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">מסלולי לימוד</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">תלמידים בשנה</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">דירוג משתמשים</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים למצוא את הקורס שלכם?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                אל תתפשרו על העתיד שלכם. השתמשו במחשבון ההתאמה שלנו וקבלו המלצות תוך פחות מדקה.
              </p>
              <Link 
                to="/calculator" 
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                התחילו עכשיו
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Disclaimer />
      </div>
    </div>
  );
};
