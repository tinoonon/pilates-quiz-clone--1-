import { Star } from 'lucide-react';
import { testimonials } from '@/lib/quizData';
import { useState, useEffect, useCallback } from 'react';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const t = testimonials[current];

  return (
    <div className="w-full">
      {/* Card container */}
      <div className="relative overflow-hidden">
        <div
          className={`bg-white rounded-2xl shadow-sm transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
        >
          {/* Avatar + Info */}
          <div className="flex items-center gap-3 p-5 pb-3">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
            />
            <div className="flex-1">
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">{t.name}, {t.age} anos</p>
              <p className="text-xs text-gray-500">{t.occupation}</p>
            </div>
            {/* Result badge */}
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
              ✅ {t.result}
            </span>
          </div>

          {/* Review text */}
          <div className="px-5 pb-4">
            <p className="text-sm text-gray-700 leading-relaxed italic">"{t.text}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
