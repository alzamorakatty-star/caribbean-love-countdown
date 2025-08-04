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
        title: "¡Gracias! Thank you!",
        description: `We're so excited to ${formData.attendance === 'yes' ? 'celebrate with you' : 'have received your response'}!`,
      });
      
      // Reset form
      setFormData({ name: '', email: '', attendance: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-none shadow-xl">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <Heart className="text-coral w-6 h-6" />
          Confirm Your Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your beautiful name"
              className="border-2 border-muted focus:border-coral transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="border-2 border-muted focus:border-turquoise transition-colors"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              Will you join us for this magical celebration?
            </Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border-2 border-muted hover:border-lime transition-colors cursor-pointer">
                <RadioGroupItem value="yes" id="yes" className="text-lime" />
                <Label htmlFor="yes" className="cursor-pointer font-medium">
                  ¡Sí! / Yes!
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border-2 border-muted hover:border-coral transition-colors cursor-pointer">
                <RadioGroupItem value="no" id="no" className="text-coral" />
                <Label htmlFor="no" className="cursor-pointer font-medium">
                  Can't make it
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-coral hover:bg-coral-dark text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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