export type CourseArea = 'Center' | 'North' | 'South' | 'Jerusalem' | 'Online';
export type CourseFormat = 'In-person' | 'Online' | 'Hybrid';

export interface Course {
  id: string;
  providerName: string;
  courseName: string;
  deliveryFormat: string;
  meetingsInfo: string;
  durationInfo: string;
  priceIls: number;
  priceNote: string;
  targetLevel: string;
  publicInfoSummary: string;
  officialUrl: string;
  lastVerified: string;
}

export interface CourseFilters {
  format: string;
  maxPrice: number;
}

export interface CalculatorData {
  budget: number;
  targetLevel: string;
  format: string;
}

export interface ScoredCourse extends Course {
  fitScore: number;
  explanation: string;
}
