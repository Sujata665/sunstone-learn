import { createContext, useContext, useState, ReactNode } from 'react';

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  content: string;
  uploadedAt: Date;
}

interface GeneratedContent {
  notes: string[];
  flashcards: { front: string; back: string }[];
  quiz: { question: string; options: string[]; correct: number }[];
}

interface UploadContextType {
  files: UploadedFile[];
  generatedContent: GeneratedContent | null;
  uploadFile: (file: File) => Promise<void>;
  generateContent: () => Promise<void>;
  clearFiles: () => void;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export function UploadProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const uploadFile = async (file: File) => {
    const content = await file.text();
    const uploadedFile: UploadedFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      content,
      uploadedAt: new Date(),
    };
    setFiles(prev => [...prev, uploadedFile]);
  };

  const generateContent = async () => {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockNotes = [
      'Key concept: Understanding core fundamentals',
      'Important: Practice makes perfect',
      'Remember: Review material regularly',
    ];

    const mockFlashcards = [
      { front: 'What is the main topic?', back: 'The uploaded material covers...' },
      { front: 'Key takeaway?', back: 'Focus on understanding basics first' },
    ];

    const mockQuiz = [
      {
        question: 'What is the primary focus of this material?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correct: 0,
      },
    ];

    setGeneratedContent({
      notes: mockNotes,
      flashcards: mockFlashcards,
      quiz: mockQuiz,
    });
  };

  const clearFiles = () => {
    setFiles([]);
    setGeneratedContent(null);
  };

  return (
    <UploadContext.Provider value={{ files, generatedContent, uploadFile, generateContent, clearFiles }}>
      {children}
    </UploadContext.Provider>
  );
}

export function useUpload() {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
}
