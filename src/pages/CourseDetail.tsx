import { useParams, Navigate, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCourses } from '@/contexts/CourseContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, CheckCircle, Clock, BookOpen, Award } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CourseDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const { courses, enrolledCourses, enrollCourse, updateProgress } = useCourses();
  const [activeModule, setActiveModule] = useState(0);

  const course = courses.find(c => c.id === id);
  const isEnrolled = enrolledCourses.some(c => c.id === id);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleEnroll = () => {
    enrollCourse(course.id);
    toast.success(`Enrolled in ${course.title}!`);
  };

  const handleModuleComplete = (moduleIndex: number) => {
    const newProgress = Math.min(((moduleIndex + 1) / course.modules) * 100, 100);
    updateProgress(course.id, newProgress);
    toast.success('Module completed!');
    if (moduleIndex < course.modules - 1) {
      setActiveModule(moduleIndex + 1);
    }
  };

  const mockModules = Array.from({ length: course.modules }, (_, i) => ({
    id: i,
    title: `Module ${i + 1}: ${['Introduction', 'Core Concepts', 'Advanced Topics', 'Practical Applications', 'Final Project'][i % 5]}`,
    duration: `${2 + (i % 3)} hours`,
    completed: isEnrolled && (course.progress / 100) * course.modules > i,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        {/* Course Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary">
              Courses
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm">{course.title}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant={course.level === 'Beginner' ? 'secondary' : 'default'}>
                  {course.level}
                </Badge>
                {isEnrolled && (
                  <Badge variant="outline" className="bg-primary/10">
                    Enrolled
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{course.institution}</p>
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{course.modules} modules</span>
                </div>
                {isEnrolled && (
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{Math.round(course.progress)}% Complete</span>
                  </div>
                )}
              </div>

              {isEnrolled && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Your Progress</span>
                    <span className="text-muted-foreground">{Math.round(course.progress)}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  {!isEnrolled ? (
                    <Button onClick={handleEnroll} className="w-full gradient-sunset mb-4">
                      Enroll Now
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Button className="w-full gradient-sunset">
                        Continue Learning
                      </Button>
                      {course.progress >= 100 && (
                        <Button variant="outline" className="w-full">
                          <Award className="mr-2 h-4 w-4" />
                          Download Certificate
                        </Button>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h3 className="font-semibold mb-3">This course includes:</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <PlayCircle className="h-4 w-4 text-muted-foreground" />
                      <span>On-demand video lectures</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>Reading materials</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span>Graded assignments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Shareable certificate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        {isEnrolled && (
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="space-y-4">
              {mockModules.map((module) => (
                <Card key={module.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                          {module.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {module.duration} • {module.completed ? 'Completed' : 'Not started'}
                        </CardDescription>
                      </div>
                      {!module.completed && (
                        <Button
                          onClick={() => handleModuleComplete(module.id)}
                          variant="outline"
                          size="sm"
                        >
                          Start
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
