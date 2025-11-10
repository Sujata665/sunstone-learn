import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCourses } from '@/contexts/CourseContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export default function Courses() {
  const { courses, enrollCourse } = useCourses();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.institution.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEnroll = (courseId: string, title: string) => {
    enrollCourse(courseId);
    toast.success(`Enrolled in ${title}!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Courses</h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover-scale flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={course.level === 'Beginner' ? 'secondary' : 'default'}>
                    {course.level}
                  </Badge>
                  {course.enrolled && (
                    <Badge variant="outline" className="bg-primary/10">Enrolled</Badge>
                  )}
                </div>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription>{course.institution}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {course.modules} modules
                  </div>
                </div>
                <div className="mt-auto space-y-2">
                  {course.enrolled ? (
                    <Link to={`/course/${course.id}`} className="block">
                      <Button variant="secondary" className="w-full">
                        Continue Learning
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      onClick={() => handleEnroll(course.id, course.title)}
                      className="w-full gradient-sunset"
                    >
                      Enroll Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
