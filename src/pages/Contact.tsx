import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <SEO 
        title="צור קשר" 
        description="צרו איתנו קשר לכל שאלה או הצעה. אנחנו כאן כדי לעזור לכם למצוא את קורס הפסיכומטרי המתאים לכם."
      />

      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">נשמח לשמוע מכם</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            יש לכם שאלה? הצעה לשיפור? או שסתם בא לכם להגיד שלום? אנחנו כאן.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-6">פרטי התקשרות</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">אימייל</div>
                    <div className="text-gray-600">contact@psychofinder.co.il</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">טלפון</div>
                    <div className="text-gray-600">03-1234567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">כתובת</div>
                    <div className="text-gray-600">תל אביב, ישראל</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ההודעה נשלחה בהצלחה!</h2>
                  <p className="text-gray-600 mb-8">נחזור אליכם בהקדם האפשרי.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link 
                      to="/compare" 
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
                    >
                      חזרה להשוואת קורסים
                    </Link>
                    <Link 
                      to="/" 
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all"
                    >
                      חזרה לדף הבית
                    </Link>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline text-sm"
                  >
                    שלח הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">שם מלא</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="ישראל ישראלי"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">אימייל</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="israel@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">נושא</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="איך נוכל לעזור?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">הודעה</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="כתבו כאן את הודעתכם..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    שלח הודעה
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
