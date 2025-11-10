import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Course, mockCourses } from '@/data/mockCourses';

interface CourseContextType {
  courses: Course[];
  enrolledCourses: Course[];
  enrollCourse: (courseId: string) => void;
  updateProgress: (courseId: string, progress: number) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedEnrollments = localStorage.getItem('eduflow_enrollments');
    if (storedEnrollments) {
      const enrollmentIds = JSON.parse(storedEnrollments);
      const enrolled = courses.map(course => 
        enrollmentIds.includes(course.id) 
          ? { ...course, enrolled: true }
          : course
      );
      setCourses(enrolled);
      setEnrolledCourses(enrolled.filter(c => c.enrolled));
    }
  }, []);

  const enrollCourse = (courseId: string) => {
    const updated = courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true, progress: 0 } : course
    );
    setCourses(updated);
    setEnrolledCourses(updated.filter(c => c.enrolled));
    
    const enrollmentIds = updated.filter(c => c.enrolled).map(c => c.id);
    localStorage.setItem('eduflow_enrollments', JSON.stringify(enrollmentIds));
  };

  const updateProgress = (courseId: string, progress: number) => {
    const updated = courses.map(course =>
      course.id === courseId ? { ...course, progress } : course
    );
    setCourses(updated);
    setEnrolledCourses(updated.filter(c => c.enrolled));
    
    localStorage.setItem(`eduflow_progress_${courseId}`, progress.toString());
  };

  return (
    <CourseContext.Provider value={{ courses, enrolledCourses, enrollCourse, updateProgress }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
}
