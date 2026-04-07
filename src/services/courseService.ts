import { Course, CourseFilters, CalculatorData, ScoredCourse } from '../types/course';

/**
 * Service to handle course data operations.
 * Fetches data from the server-side API which parses the Google Sheets CSV.
 */
export const courseService = {
  /**
   * Fetches all available courses.
   */
  getAllCourses: async (): Promise<Course[]> => {
    try {
      const response = await fetch('/api/courses');
      
      if (!response.ok) {
        let errorMessage = 'Failed to fetch from API';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // If response is not JSON
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received from server');
      }
      return data;
    } catch (error) {
      console.error('API fetch failed:', error);
      throw error;
    }
  },

  /**
   * Filters courses based on user preferences.
   */
  filterCourses: async (filters: CourseFilters): Promise<Course[]> => {
    const courses = await courseService.getAllCourses();
    return courses.filter((course) => {
      return (
        (filters.format === '' || course.deliveryFormat.includes(filters.format)) &&
        course.priceIls <= filters.maxPrice
      );
    });
  },

  /**
   * Calculates the best course fit for a user.
   */
  calculateFit: async (data: CalculatorData): Promise<ScoredCourse[]> => {
    const courses = await courseService.getAllCourses();
    const scoredCourses = courses.map((course) => {
      let score = 100;
      const reasons: string[] = [];

      // Budget match
      if (course.priceIls > data.budget) {
        const diff = course.priceIls - data.budget;
        const penalty = Math.min(40, (diff / 1000) * 15);
        score -= penalty;
        reasons.push(`המחיר גבוה מהתקציב ב-₪${diff.toLocaleString()}`);
      } else {
        reasons.push('הקורס עומד בתקציב שלך');
      }

      // Format match
      if (data.format && !course.deliveryFormat.includes(data.format)) {
        score -= 30;
        reasons.push(`פורמט הלימוד (${course.deliveryFormat}) שונה מהעדפתך`);
      } else {
        reasons.push('פורמט הלימוד מתאים להעדפתך');
      }

      // Target level match
      if (data.targetLevel && !course.targetLevel.includes(data.targetLevel) && course.targetLevel !== 'כל הרמות') {
        score -= 20;
        reasons.push('רמת הקורס עשויה להיות שונה מהיעד שלך');
      } else {
        reasons.push('רמת הקורס מתאימה ליעד שלך');
      }

      // Ensure score is between 0 and 100
      score = Math.max(0, Math.min(100, score));

      // Create a short summary explanation
      const explanation = reasons.slice(0, 2).join(' ו');

      return { 
        ...course, 
        fitScore: Math.round(score),
        explanation: explanation + '.'
      };
    });

    return scoredCourses
      .sort((a, b) => b.fitScore - a.fitScore)
      .slice(0, 3);
  }
};
