import React from 'react';
import { Filter } from 'lucide-react';
import { FORMATS } from '../../constants/courses';
import { CourseFilters as FilterType } from '../../types/course';

interface CourseFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({ filters, onFilterChange }) => {
  const resetFilters = () => {
    onFilterChange({ format: '', maxPrice: 10000 });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold">מסננים</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">פורמט למידה</label>
          <select
            value={filters.format}
            onChange={(e) => onFilterChange({ ...filters, format: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="">כל הפורמטים</option>
            {FORMATS.map((format) => (
              <option key={format.value} value={format.value}>{format.label}</option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">מחיר מקסימלי</label>
            <span className="text-sm font-bold text-blue-600">₪{filters.maxPrice.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="2000"
            max="10000"
            step="500"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <button
          onClick={resetFilters}
          className="w-full py-2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors"
        >
          איפוס מסננים
        </button>
      </div>
    </div>
  );
};
