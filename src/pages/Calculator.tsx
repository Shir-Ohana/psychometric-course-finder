import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';
import { courseService } from '../services/courseService';
import { CalculatorForm } from '../components/calculator/CalculatorForm';
import { CalculatorResults } from '../components/calculator/CalculatorResults';
import { SEO } from '../components/seo/SEO';
import { AnimatePresence, motion } from 'motion/react';
import { CalculatorData, ScoredCourse } from '../types/course';
import { Disclaimer } from '../components/common/Disclaimer';

export const Calculator: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<CalculatorData>({
    budget: 6000,
    targetLevel: 'כל הרמות',
    format: '',
  });
  const [results, setResults] = React.useState<ScoredCourse[]>([]);
  const [isCalculating, setIsCalculating] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const calculateFit = async () => {
    setIsCalculating(true);
    setError(null);
    try {
      const top3 = await courseService.calculateFit(formData);
      setResults(top3);
      setStep(3);
    } catch (err) {
      console.error('Calculation failed:', err);
      setError('לא ניתן היה לחשב התאמה כרגע. אנא ודאו שחיבור האינטרנט תקין ונסו שוב.');
      setResults([]);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <SEO 
        title="מחשבון התאמה" 
        description="השתמשו במחשבון ההתאמה שלנו כדי למצוא את 3 קורסי הפסיכומטרי שהכי מתאימים לצרכים שלכם."
      />

      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start mb-8">
            <Link to="/compare" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              <ArrowRight className="w-4 h-4" />
              חזרה להשוואת קורסים
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
              <CalcIcon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">מחשבון התאמת קורס</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ענו על מספר שאלות קצרות וקבלו את 3 הקורסים שהכי מתאימים לכם.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {error && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-6 flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            {error}
          </div>
        )}
        
        <AnimatePresence mode="wait">
          {step < 3 ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <CalculatorForm 
                formData={formData}
                setFormData={setFormData}
                step={step}
                setStep={setStep}
                onCalculate={calculateFit}
                isCalculating={isCalculating}
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CalculatorResults 
                results={results}
                onReset={() => {
                  setStep(1);
                  setFormData({ budget: 6000, targetLevel: 'כל הרמות', format: '' });
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};
