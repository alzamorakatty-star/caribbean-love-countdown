import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-02-07T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'bg-coral' },
    { label: 'Hours', value: timeLeft.hours, color: 'bg-turquoise' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'bg-caribbean-yellow' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'bg-lime' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label}
          className={`
            ${unit.color} text-white rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[120px]
            transform transition-all duration-300 hover:scale-105 
            shadow-lg hover:shadow-xl animate-scale-in
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold font-mono">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base font-medium mt-1 opacity-90">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;