import { Star } from 'lucide-react';
import { testimonials } from '@/lib/quizData';

interface InterstitialScreenProps {
  index: number;
  answers: Record<number, string | string[]>;
  onContinue: () => void;
  totalQuestions: number;
  currentStep: number;
}

function getSkinTypeLabel(id: string) {
  const map: Record<string, string> = {
    oily: 'oleosa', combination: 'mista', dry: 'seca', sensitive: 'sensível',
  };
  return map[id] || 'mista';
}

function getSeverityLabel(id: string) {
  const map: Record<string, string> = {
    mild: 'leve', moderate: 'moderada', severe: 'intensa', cystic: 'muito intensa',
  };
  return map[id] || 'moderada';
}

// ─── SCREEN 1: Stats + Perfil (after Q5) ─────────────────────────
function StatsScreen({ answers, onContinue }: { answers: Record<number, string | string[]>; onContinue: () => void }) {
  const skinType = getSkinTypeLabel(answers[4] as string);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: '#F7F5F2' }}>
      <div className="max-w-lg w-full animate-fadeInSlideUp">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" />
        </div>

        {/* Personalized insight */}
        <div className="text-center mb-6">
          <span className="text-5xl mb-4 block">📊</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Ótimo! Já identificamos seu perfil de pele
          </h2>
          <p className="text-gray-600 text-sm">
            Sua pele <strong className="text-orange-600">{skinType}</strong> precisa do Segredo Coreano específico.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-extrabold text-orange-500">93%</p>
            <p className="text-xs text-gray-500 mt-1">das pessoas com pele {skinType} eliminaram espinhas com nosso método</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <p className="text-3xl font-extrabold text-orange-500">2.847</p>
            <p className="text-xs text-gray-500 mt-1">pessoas já fizeram esse teste este mês</p>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <img
            src="/images/clear-skin-hero.png"
            alt="Pele limpa e saudável"
            className="w-full object-cover"
            style={{ maxHeight: '300px' }}
          />
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 text-center mb-6">
          <p className="text-sm text-gray-700">
            ✅ Pessoas com perfil similar ao seu tiveram <strong className="text-green-700">resultados em até 7 dias</strong>
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
        >
          CONTINUAR DIAGNÓSTICO
        </button>
      </div>
    </div>
  );
}

// ─── SCREEN 2: Testimonial + Insight (after Q10) ─────────────────
function TestimonialScreen({ answers, onContinue }: { answers: Record<number, string | string[]>; onContinue: () => void }) {
  const testimonial = testimonials[0];
  const routine = answers[8] as string;
  const sunscreen = answers[9] as string;
  const diet = answers[10] as string;

  // Build personalized insight
  const issues: string[] = [];
  if (routine === 'none' || routine === 'basic') issues.push('rotina de cuidados incompleta');
  if (sunscreen === 'never' || sunscreen === 'sometimes') issues.push('falta de proteção solar');
  if (diet === 'unhealthy' || diet === 'very-unhealthy') issues.push('alimentação inflamatória');

  const insightText = issues.length > 0
    ? `Identificamos ${issues.length} fator${issues.length > 1 ? 'es' : ''} que pode${issues.length > 1 ? 'm' : ''} estar DESTRUINDO sua pele: ${issues.join(', ')}.`
    : 'Seus hábitos estão bons, mas o Segredo Coreano vai TURBINAR seus resultados.';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: '#F7F5F2' }}>
      <div className="max-w-lg w-full animate-fadeInSlideUp">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" />
        </div>

        {/* Personalized insight banner */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 mb-6 text-center">
          <span className="text-3xl mb-2 block">⚡</span>
          <h3 className="font-bold text-gray-900 mb-2">Com base nas suas respostas:</h3>
          <p className="text-sm text-gray-700">{insightText}</p>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Mas calma, seu caso tem solução!
          </h2>
          <p className="text-orange-500 font-semibold text-sm mt-2">Olha esse exemplo real:</p>
        </div>

        {/* Testimonial card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          <img
            src={testimonial.image}
            alt={`Transformação de ${testimonial.name}`}
            className="w-full object-cover"
            style={{ maxHeight: '350px' }}
          />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.occupation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
        >
          CONTINUAR TESTE GRATUITO
        </button>

        <p className="text-center text-xs text-gray-500 mt-3">
          Na próxima etapa vamos entender o impacto na sua vida
        </p>
      </div>
    </div>
  );
}

// ─── SCREEN 3: Hope + Progress (after Q14) ───────────────────────
function HopeScreen({ answers, onContinue, totalQuestions, currentStep }: {
  answers: Record<number, string | string[]>;
  onContinue: () => void;
  totalQuestions: number;
  currentStep: number;
}) {
  const testimonial = testimonials[1];
  const remaining = totalQuestions - currentStep - 1;
  const selfEsteem = answers[13] as string;

  const empathyText = (selfEsteem === 'severe' || selfEsteem === 'significant')
    ? 'Sabemos que a espinhas pode ser devastadora para a autoestima. Mas você não está sozinha!'
    : 'Entendemos como as espinhas podem incomodar. A boa notícia é que tem solução!';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: '#F7F5F2' }}>
      <div className="max-w-lg w-full animate-fadeInSlideUp">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
        </div>

        <div className="text-center mb-6">
          <span className="text-5xl mb-4 block">💚</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Você não está sozinha nisso!
          </h2>
          <p className="text-gray-600 text-sm">{empathyText}</p>
        </div>

        {/* Social proof */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 text-center">
          <p className="text-4xl font-extrabold text-green-600 mb-1">78%</p>
          <p className="text-sm text-gray-600">
            das pessoas que fizeram esse teste se sentiam da mesma forma que você
          </p>
          <div className="mt-3 h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '78%' }} />
          </div>
        </div>

        {/* Different testimonial */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          <img
            src={testimonial.image}
            alt={`Transformação de ${testimonial.name}`}
            className="w-full object-cover"
            style={{ maxHeight: '300px' }}
          />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.occupation}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
          </div>
        </div>

        {/* Remaining questions badge */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 text-center mb-6">
          <p className="text-sm text-gray-700">
            🎯 Faltam apenas <strong className="text-orange-600">{remaining} perguntas</strong> para completar seu diagnóstico gratuito!
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
        >
          FINALIZAR MEU DIAGNÓSTICO
        </button>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function InterstitialScreen({ index, answers, onContinue, totalQuestions, currentStep }: InterstitialScreenProps) {
  switch (index) {
    case 0:
      return <StatsScreen answers={answers} onContinue={onContinue} />;
    case 1:
      return <TestimonialScreen answers={answers} onContinue={onContinue} />;
    case 2:
      return <HopeScreen answers={answers} onContinue={onContinue} totalQuestions={totalQuestions} currentStep={currentStep} />;
    default:
      return <StatsScreen answers={answers} onContinue={onContinue} />;
  }
}
