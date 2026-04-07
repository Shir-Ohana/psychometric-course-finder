import React from 'react';
import { Star, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Course } from '../../types/course';
import { cn } from '../../lib/utils';

interface CourseCardProps {
  course: Course;
  fitScore?: number;
  explanation?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, fitScore, explanation }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{course.providerName}</h3>
            <p className="text-sm text-blue-600 font-medium">{course.courseName}</p>
          </div>
          {fitScore !== undefined && (
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
              התאמה: {fitScore}%
            </div>
          )}
        </div>

        {explanation && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-800 font-medium">
            {explanation}
          </div>
        )}

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{course.deliveryFormat}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{course.meetingsInfo} | {course.durationInfo}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-gray-400" />
            <span>רמה: {course.targetLevel}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {course.publicInfoSummary}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-gray-300" />
          <span>עודכן לאחרונה: {course.lastVerified}</span>
        </div>
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div>
          <div className="text-xl font-bold text-gray-900">
            ₪{course.priceIls.toLocaleString()}
          </div>
          {course.priceNote && (
            <div className="text-[10px] text-gray-500 mt-0.5">
              {course.priceNote}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
