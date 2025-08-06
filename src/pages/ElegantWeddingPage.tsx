import { useState } from 'react';
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import { Calendar, MapPin, Languages } from 'lucide-react';
import watercolorFlower from '@/assets/watercolor-flower.png';
import watercolorAccents from '@/assets/watercolor-accents.png';
import caribbeanHero from '@/assets/caribbean-hero.jpg';

const WeddingPage = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  const translations = {
    en: {
      saturday: "Saturday",
      location: "BARRANQUILLA", 
      quote: "In this life, we've decided to build a present full of shared dreams, where every moment becomes a celebration of our identity and love.",
      countdown: "Until Our Special Day",
      confirm: "Confirm Attendance",
      excitement: "We're so excited to share this moment with you. You'll soon receive your official invitation with more details. Get ready to celebrate!",
      footer: "Katty & Christian • February 7, 2026"
    },
    es: {
      saturday: "Sábado",
      location: "BARRANQUILLA",
      quote: "En esta vida, hemos decidido construir un presente lleno de sueños compartidos, donde cada momento se convierte en una celebración de nuestra identidad y amor.",
      countdown: "Hasta Nuestro Día Especial",
      confirm: "Confirmar Asistencia", 
      excitement: "¡Estamos muy emocionados de compartir este momento contigo! Pronto recibirás tu invitación oficial con más detalles. ¡Prepárate para celebrar!",
      footer: "Katty & Christian • 7 de Febrero, 2026"
    }
  };

  const t = isSpanish ? translations.es : translations.en;

  const scrollToRSVP = () => {
    setShowRSVP(true);
    setTimeout(() => {
      document.getElementById('rsvp-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden"
         style={{ 
           backgroundImage: `url(${caribbeanHero})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-0"></div>
      
      {/* Watercolor accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        <div 
          className="absolute top-20 -right-20 w-96 h-96 opacity-30 animate-gentle-sway"
          style={{ 
            backgroundImage: `url(${watercolorFlower})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div 
          className="absolute bottom-20 -left-20 w-80 h-80 opacity-20 animate-elegant-float"
          style={{ 
            backgroundImage: `url(${watercolorAccents})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '3s'
          }}
        ></div>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsSpanish(!isSpanish)}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-muted/30"
        >
          <Languages className="w-4 h-4 mr-2" />
          {isSpanish ? 'EN' : 'ES'}
        </Button>
      </div>

      {/* Main Content - Constrained to 50% width */}
      <div className="relative z-10 w-full max-w-[50%] mx-auto">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Vertical Save the Date */}
            <div className="mb-12 animate-fade-in-up">
              <div className="flex items-center justify-center mb-8">
                <div className="writing-mode-vertical text-right mr-8 hidden md:block">
                  <h1 className="text-4xl font-playfair font-bold text-text-primary tracking-[0.3em] rotate-180" 
                      style={{ writingMode: 'vertical-rl' }}>
                    SAVE
                  </h1>
                </div>
                
                <div className="text-center">
                  <h1 className="text-6xl md:text-8xl font-playfair font-bold text-text-primary mb-4 md:hidden">
                    SAVE
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-dancing text-coral-watercolor mb-4">
                    the
                  </h2>
                  <h1 className="text-6xl md:text-8xl font-playfair font-bold text-text-primary">
                    DATE
                  </h1>
                </div>
                
                <div className="writing-mode-vertical text-left ml-8 hidden md:block">
                  <h1 className="text-4xl font-playfair font-bold text-text-primary tracking-[0.3em] rotate-180"
                      style={{ writingMode: 'vertical-rl' }}>
                    DATE
                  </h1>
                </div>
              </div>
              
              {/* Couple Names */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-text-primary tracking-wider">
                  KATTY & CHRISTIAN
                </h2>
              </div>
            </div>

            {/* Event Details */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-elegant border border-muted/30 max-w-2xl mx-auto">
                <div className="space-y-6 text-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold text-text-primary mb-2">
                      {t.saturday}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-text-secondary">
                      <Calendar className="w-5 h-5 text-coral-watercolor" />
                      <span className="font-playfair">February 7, 2026</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-muted pt-6">
                    <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-text-secondary">
                      <MapPin className="w-5 h-5 text-sage-green" />
                      <span className="font-playfair tracking-wide">{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Love Quote Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <blockquote className="text-lg md:text-xl leading-relaxed text-text-primary font-playfair italic mb-8 max-w-3xl mx-auto">
                "{t.quote}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-semibold text-text-primary mb-8 animate-fade-in-up">
              {t.countdown}
            </h3>
            <CountdownTimer />
          </div>
        </section>

        {/* RSVP CTA Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Button
                onClick={scrollToRSVP}
                variant="elegant"
                size="lg"
                className="text-lg px-8 py-4 font-playfair"
              >
                {t.confirm}
              </Button>
            </div>
          </div>
        </section>

        {/* RSVP Form Section */}
        {showRSVP && (
          <section id="rsvp-section" className="py-20 px-6 md:px-12 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <RSVPForm />
            </div>
          </section>
        )}

        {/* Excitement Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-warm-yellow-light/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-warm-yellow/20 animate-fade-in-up">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed font-playfair">
                {t.excitement}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="text-text-secondary font-playfair">
            <span>{t.footer}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WeddingPage;