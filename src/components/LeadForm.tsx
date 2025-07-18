import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    automation: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your automation needs.",
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto text-center elegant-shadow">
        <CardContent className="pt-8">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground">
            Your automation request has been submitted. We'll be in touch soon!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto elegant-shadow">
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          Request My Automation
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Get a free consultation and custom automation proposal
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <Input
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          
          <div>
            <Textarea
              name="automation"
              placeholder="What would you like to automate? (e.g., lead follow-up, client onboarding, email marketing)"
              value={formData.automation}
              onChange={handleInputChange}
              required
              className="form-input min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full glow-effect group">
            Request My Automation
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 smooth-transition" />
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;