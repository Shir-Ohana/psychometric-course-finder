import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, Search, Calculator, Info, Mail } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20" dir="rtl">
      <SEO 
        title="404 - דף לא נמצא" 
        description="הדף שחיפשתם לא נמצא. חזרו לדף הבית כדי להמשיך בחיפוש קורס פסיכומטרי."
      />
      
      <div className="max-w-2xl w-full text-center">
        <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">אופס! הדף לא נמצא</h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          נראה שהדף שחיפשתם הלך לאיבוד במרתון פסיכומטרי. אל דאגה, אפשר תמיד לחזור להתחלה או לבקר באחד הדפים הפופולריים שלנו.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" />
            חזרה לדף הבית
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-8">
            <Link 
              to="/compare" 
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <Search className="w-6 h-6" />
              <span className="text-sm font-bold">השוואת קורסים</span>
            </Link>
            <Link 
              to="/calculator" 
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <Calculator className="w-6 h-6" />
              <span className="text-sm font-bold">מחשבון התאמה</span>
            </Link>
            <Link 
              to="/about" 
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <Info className="w-6 h-6" />
              <span className="text-sm font-bold">אודות</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm font-bold">צור קשר</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
