import React from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { courseService } from '../services/courseService';
import { CourseCard } from '../components/courses/CourseCard';
import { CourseFilters } from '../components/courses/CourseFilters';
import { SEO } from '../components/seo/SEO';
import { motion } from 'motion/react';
import { CourseFilters as FilterType } from '../types/course';
import { Disclaimer } from '../components/common/Disclaimer';

export const Compare: React.FC = () => {
  const [filters, setFilters] = React.useState<FilterType>({
    format: '',
    maxPrice: 10000,
  });
  const [filteredCourses, setFilteredCourses] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await courseService.filterCourses(filters);
        setFilteredCourses(results);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
        setError('לא ניתן היה לטעון נתונים חיים מהשרת. אנא ודאו שחיבור האינטרנט תקין ונסו שוב.');
        // Fallback to empty array if fetch fails
        setFilteredCourses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <SEO 
        title="השוואת קורסים" 
        description="השוואת קורסי פסיכומטרי בישראל. סננו לפי מחיר, מיקום ופורמט למידה."
      />

      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">השוואת קורסי פסיכומטרי</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              מצאו את הקורס המושלם עבורכם בעזרת מערכת הסינון המתקדמת שלנו.
            </p>
          </div>
          <Link 
            to="/calculator" 
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md flex items-center gap-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            מחשבון התאמה אישי
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <CourseFilters filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Course Grid */}
          <main className="flex-grow">
            {error && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-6 flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                {error}
              </div>
            )}
            
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                נמצאו <span className="font-bold text-gray-900">{filteredCourses.length}</span> קורסים מתאימים
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <SlidersHorizontal className="w-4 h-4" />
                <span>מיון לפי: פופולריות</span>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 h-64 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="mt-auto h-10 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">לא נמצאו קורסים</h3>
                <p className="text-gray-500">נסו לשנות את המסננים כדי לראות תוצאות נוספות.</p>
              </div>
            )}
          </main>
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};
