import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCourses } from '@/contexts/CourseContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, Target, Upload } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();
  const { enrolledCourses } = useCourses();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const totalProgress = enrolledCourses.length > 0
    ? enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            Continue your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(totalProgress)}%</div>
              <Progress value={totalProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {enrolledCourses.filter(c => c.progress >= 100).length}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
            {enrolledCourses.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    You haven't enrolled in any courses yet
                  </p>
                  <Link to="/courses">
                    <Button className="gradient-sunset">Browse Courses</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover-scale">
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                        <Link to={`/course/${course.id}`}>
                          <Button className="w-full mt-4" variant="secondary">
                            Continue Learning
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">AI Learning Tools</h2>
            <Link to="/upload">
              <Card className="hover-scale cursor-pointer border-primary/50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Upload & Transform</h3>
                      <p className="text-muted-foreground">
                        Upload study materials and let AI create notes, flashcards, and quizzes
                      </p>
                    </div>
                    <Button className="gradient-sunset">
                      Start Creating
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
