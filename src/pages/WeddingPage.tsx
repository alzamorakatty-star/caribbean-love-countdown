import { useState } from 'react';
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import { Heart, Calendar, MapPin, Music, Waves } from 'lucide-react';
import caribbeanHero from '@/assets/caribbean-hero.jpg';

const WeddingPage = () => {
  const [showRSVP, setShowRSVP] = useState(false);

  const scrollToRSVP = () => {
    setShowRSVP(true);
    setTimeout(() => {
      document.getElementById('rsvp-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-turquoise-light via-coral-light to-caribbean-yellow-light">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl animate-tropical-sway"></div>
        <div className="absolute top-1/4 -right-10 w-60 h-60 bg-turquoise/20 rounded-full blur-3xl animate-tropical-sway" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-lime/20 rounded-full blur-3xl animate-tropical-sway" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${caribbeanHero})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-turquoise/20 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <Waves className="w-16 h-16 text-turquoise mx-auto mb-4 animate-carnival-bounce" />
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wide">
              Save Our Date
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="text-coral w-8 h-8 animate-carnival-bounce" style={{ animationDelay: '0.5s' }} />
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                Christian Heins & Katty Alzamora
              </h2>
              <Heart className="text-coral w-8 h-8 animate-carnival-bounce" style={{ animationDelay: '1s' }} />
            </div>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
              <Calendar className="w-6 h-6 text-turquoise" />
              <span className="font-medium">February 7, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-scale-in">
            <Music className="w-12 h-12 text-coral mx-auto mb-6 animate-carnival-bounce" />
            <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic mb-6">
              "In this life, we've decided to build a present full of shared dreams, where every moment becomes a celebration of our identity and love."
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are Caribbean, and that's why we wanted to create a moment that transports us to the essence of our land: intense flavors, vibrant aromas, bright colors, festive sounds, and the magic born from the water and earth around us.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            Our Caribbean Celebration Begins In...
          </h3>
          <CountdownTimer />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Tropical Celebration!
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Your presence would make our special day even more magical. Let us know if you can join us for this Caribbean adventure!
            </p>
            <Button
              onClick={scrollToRSVP}
              size="lg"
              className="bg-coral hover:bg-coral-dark text-white font-bold py-4 px-8 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-festive-glow"
            >
              <Heart className="mr-2 w-5 h-5" />
              Confirm Your Attendance
            </Button>
          </div>
        </div>
      </section>

      {/* RSVP Form Section */}
      {showRSVP && (
        <section id="rsvp-section" className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <RSVPForm />
          </div>
        </section>
      )}

      {/* Excitement Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-coral/10 via-turquoise/10 to-lime/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 animate-scale-in">
            <MapPin className="w-12 h-12 text-turquoise mx-auto mb-6 animate-carnival-bounce" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Get Ready for the Caribbean Magic!
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're so excited to share this moment with you. You'll soon receive your official invitation with more details. Get ready to celebrate with vibrant colors, tropical rhythms, and unforgettable Caribbean joy!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Heart className="w-5 h-5 text-coral animate-carnival-bounce" />
          <span>Christian & Katty • February 7, 2026</span>
          <Heart className="w-5 h-5 text-coral animate-carnival-bounce" />
        </div>
      </footer>
    </div>
  );
};

export default WeddingPage;