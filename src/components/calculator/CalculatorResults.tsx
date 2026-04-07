import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { ScoredCourse } from '../../types/course';
import { CourseCard } from '../courses/CourseCard';

interface CalculatorResultsProps {
  results: ScoredCourse[];
  onReset: () => void;
}

export const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results, onReset }) => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-600 rounded-3xl p-8 text-white text-center shadow-xl">
        <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
        <h2 className="text-2xl font-bold mb-2">התוצאות שלך מוכנות!</h2>
        <p className="text-blue-100">מצאנו 3 קורסים שמתאימים בדיוק למה שחיפשת.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {results.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <CourseCard 
              course={course} 
              fitScore={course.fitScore} 
              explanation={course.explanation} 
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-8">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          חישוב מחדש
        </button>
      </div>
    </div>
  );
};
