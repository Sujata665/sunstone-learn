import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  githubToken?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loginWithGithub: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('eduflow_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - check localStorage for existing users
    const users = JSON.parse(localStorage.getItem('eduflow_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('eduflow_user', JSON.stringify(userWithoutPassword));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem('eduflow_users') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password,
      name,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=8b5cf6&color=fff`,
    };

    users.push(newUser);
    localStorage.setItem('eduflow_users', JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('eduflow_user', JSON.stringify(userWithoutPassword));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduflow_user');
  };

  const loginWithGithub = async (token: string) => {
    // Mock GitHub login
    const githubUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'GitHub User',
      email: 'github@example.com',
      avatar: 'https://ui-avatars.com/api/?name=GitHub+User&background=8b5cf6&color=fff',
      githubToken: token,
    };
    setUser(githubUser);
    localStorage.setItem('eduflow_user', JSON.stringify(githubUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loginWithGithub }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
