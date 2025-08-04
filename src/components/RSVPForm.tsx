import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send } from 'lucide-react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.attendance) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name, email, and attendance confirmation.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: `We're so excited to ${formData.attendance === 'yes' ? 'celebrate with you' : 'have received your response'}!`,
      });
      
      // Reset form
      setFormData({ name: '', email: '', attendance: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white border border-muted shadow-elegant">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-playfair font-semibold text-text-primary">
          Confirm Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-text-primary">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="border border-muted focus:border-coral-watercolor transition-colors font-playfair"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-text-primary">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="border border-muted focus:border-coral-watercolor transition-colors"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-text-primary">
              Will you join us?
            </Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-md border border-muted hover:border-sage-green transition-colors cursor-pointer">
                <RadioGroupItem value="yes" id="yes" className="text-sage-green" />
                <Label htmlFor="yes" className="cursor-pointer font-medium font-playfair">
                  Yes!
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-md border border-muted hover:border-coral-watercolor transition-colors cursor-pointer">
                <RadioGroupItem value="no" id="no" className="text-coral-watercolor" />
                <Label htmlFor="no" className="cursor-pointer font-medium font-playfair">
                  Can't make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="elegant"
            className="w-full py-3 text-base"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send RSVP
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;