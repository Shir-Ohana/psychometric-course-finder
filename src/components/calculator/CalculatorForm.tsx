import React from 'react';
import { FORMATS, LEVELS } from '../../constants/courses';
import { CalculatorData } from '../../types/course';

interface CalculatorFormProps {
  formData: CalculatorData;
  setFormData: (data: CalculatorData) => void;
  step: number;
  setStep: (step: number) => void;
  onCalculate: () => void;
  isCalculating?: boolean;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ 
  formData, 
  setFormData, 
  step, 
  setStep, 
  onCalculate,
  isCalculating = false
}) => {
  if (step === 1) {
    return (
      <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-8">ספרו לנו קצת עליכם</h2>
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">מה הפורמט המועדף עליכם?</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FORMATS.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setFormData({ ...formData, format: format.value })}
                  className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                    formData.format === format.value
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  {format.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">מה רמת היעד שלכם?</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LEVELS.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setFormData({ ...formData, targetLevel: level.value })}
                  className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                    formData.targetLevel === level.value
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setStep(2)}
              disabled={!formData.format || !formData.targetLevel}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              המשך לשלב הבא
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm">
      <h2 className="text-2xl font-bold mb-8">תקציב</h2>
      <div className="space-y-10">
        <div>
          <div className="flex justify-between mb-4">
            <label className="text-sm font-bold text-gray-700">תקציב מקסימלי</label>
            <span className="text-lg font-bold text-blue-600">₪{formData.budget.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="2000"
            max="10000"
            step="500"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={() => setStep(1)}
            className="text-gray-500 font-bold hover:text-gray-700 transition-all"
          >
            חזרה
          </button>
          <button
            onClick={onCalculate}
            disabled={isCalculating}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center gap-2"
          >
            {isCalculating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                מחשב...
              </>
            ) : (
              'מצא לי קורס!'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
