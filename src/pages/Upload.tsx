import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUpload } from '@/contexts/UploadContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload as UploadIcon, Sparkles, FileText, Zap } from 'lucide-react';
import { toast } from 'sonner';

export default function Upload() {
  const { user } = useAuth();
  const { files, generatedContent, uploadFile, generateContent, clearFiles } = useUpload();
  const [isGenerating, setIsGenerating] = useState(false);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      await uploadFile(file);
      toast.success('File uploaded successfully!');
    } catch (error) {
      toast.error('Failed to upload file');
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      await generateContent();
      toast.success('Content generated successfully!');
    } catch (error) {
      toast.error('Failed to generate content');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">AI Learning Tools</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-bright/10 flex items-center justify-center mb-3">
                  <UploadIcon className="h-6 w-6 text-cyan-bright" />
                </div>
                <h3 className="font-semibold mb-2">Upload</h3>
                <p className="text-sm text-muted-foreground">
                  Add your study materials
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Transform</h3>
                <p className="text-sm text-muted-foreground">
                  AI creates learning tools
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Study with generated content
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Study Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".txt,.pdf,.doc,.docx"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <UploadIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">Click to upload files</p>
                  <p className="text-sm text-muted-foreground">
                    Supports documents, images, and more
                  </p>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Uploaded Files:</h4>
                  {files.map((file) => (
                    <div key={file.id} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                  ))}
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full gradient-sunset mt-4"
                  >
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Generate Learning Content
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {generatedContent && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {generatedContent.notes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Flashcards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {generatedContent.flashcards.map((card, idx) => (
                      <div key={idx} className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Q: {card.front}</p>
                        <p className="text-sm text-muted-foreground">A: {card.back}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" onClick={clearFiles} className="w-full">
                Clear All & Start Over
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
