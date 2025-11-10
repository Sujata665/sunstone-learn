export interface Course {
  id: string;
  title: string;
  institution: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  description: string;
  modules: number;
  enrolled: boolean;
  progress: number;
  image: string;
  certificate: boolean;
  selfPaced: boolean;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Machine Learning Fundamentals',
    institution: 'IIIT Raichur x Google',
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Data Science',
    description: 'Learn the foundations of machine learning with hands-on projects and real-world applications.',
    modules: 24,
    enrolled: false,
    progress: 0,
    image: '/placeholder.svg',
    certificate: true,
    selfPaced: true,
  },
  {
    id: '2',
    title: 'Full Stack Web Development',
    institution: 'Stanford University',
    duration: '12 weeks',
    level: 'Intermediate',
    category: 'Computer Science',
    description: 'Build complete web applications using React, Node.js, and modern development practices.',
    modules: 36,
    enrolled: false,
    progress: 0,
    image: '/placeholder.svg',
    certificate: true,
    selfPaced: true,
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    institution: 'MIT',
    duration: '10 weeks',
    level: 'Advanced',
    category: 'Computer Science',
    description: 'Master essential algorithms and data structures for technical interviews and real-world problem solving.',
    modules: 30,
    enrolled: false,
    progress: 0,
    image: '/placeholder.svg',
    certificate: true,
    selfPaced: true,
  },
  {
    id: '4',
    title: 'UX Design Principles',
    institution: 'Google',
    duration: '6 weeks',
    level: 'Beginner',
    category: 'Design',
    description: 'Create user-centered designs with principles from Google\'s design team.',
    modules: 18,
    enrolled: false,
    progress: 0,
    image: '/placeholder.svg',
    certificate: true,
    selfPaced: true,
  },
  {
    id: '5',
    title: 'AI & Neural Networks',
    institution: 'DeepLearning.AI',
    duration: '8 weeks',
    level: 'Advanced',
    category: 'Artificial Intelligence',
    description: 'Deep dive into neural networks, deep learning, and modern AI architectures.',
    modules: 28,
    enrolled: false,
    progress: 0,
    image: '/placeholder.svg',
    certificate: true,
    selfPaced: true,
  },
];
