import { testimonials } from '@/lib/quizData';
import { useMemo } from 'react';
import TestimonialCarousel from './TestimonialCarousel';

interface QuizResultProps {
  answers: Record<number, string | string[]>;
  testimonials: typeof testimonials;
  onContinueToOffer: () => void;
}

export default function QuizResult({ answers, onContinueToOffer }: QuizResultProps) {
  const severity = useMemo(() => {
    const severityAnswer = answers[6] as string;
    const painAnswer = answers[7] as string;
    let score = 0;
    if (severityAnswer === 'mild') score += 1;
    else if (severityAnswer === 'moderate') score += 2;
    else if (severityAnswer === 'severe') score += 3;
    else if (severityAnswer === 'cystic') score += 4;
    if (painAnswer === 'mild-pain') score += 1;
    else if (painAnswer === 'moderate-pain') score += 2;
    else if (painAnswer === 'severe-pain') score += 3;
    return Math.min(Math.round((score / 7) * 100), 95);
  }, [answers]);

  const emotionalImpact = useMemo(() => {
    const shame = answers[12] as string;
    const esteem = answers[13] as string;
    const photos = answers[14] as string;
    let score = 0;
    const scoreMap: Record<string, number> = {
      'no': 0, 'sometimes': 1, 'yes': 2, 'very': 3,
      'slight': 1, 'significant': 2, 'severe': 3,
      'often': 2, 'always': 3,
    };
    score += scoreMap[shame] || 0;
    score += scoreMap[esteem] || 0;
    score += scoreMap[photos] || 0;
    return Math.min(Math.round((score / 9) * 100), 95);
  }, [answers]);

  const severityPosition = Math.max(15, Math.min(85, severity));

  const causeType = useMemo(() => {
    const diet = answers[10] as string;
    const stress = answers[11] as string;
    const routine = answers[8] as string;
    const sunscreen = answers[9] as string;
    if (diet === 'very-unhealthy' || diet === 'unhealthy') return 'ALIMENTAÇÃO DESTRUINDO SUA PELE';
    if (stress === 'definitely' || stress === 'yes') return 'ESTRESSE CAUSANDO INFLAMAÇÃO CRÔNICA';
    if (routine === 'none' || routine === 'basic') {
      if (sunscreen === 'never') return 'ROTINA INEXISTENTE AGRAVANDO O PROBLEMA';
      return 'ROTINA INCORRETA PIORANDO AS ESPINHAS';
    }
    return 'FALTA DO SEGREDO COREANO';
  }, [answers]);

  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: '100%' }} />
      </div>

      <div className="container max-w-lg py-8 px-4">
        {/* Alert Banner */}
        <div className="alert-banner mb-8 animate-fadeInSlideUp">
          <p className="text-2xl mb-1">⚠️</p>
          <h2 className="text-lg font-bold text-orange-800 uppercase">Causa Raiz Identificada</h2>
          <p className="text-xl font-extrabold text-gray-900 mt-1">SEU PROBLEMA É:</p>
          <p className="text-xl font-extrabold text-orange-600 mt-1">{causeType}</p>
        </div>

        {/* Current State */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 animate-fadeInSlideUp" style={{ animationDelay: '200ms' }}>
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Veja seu estado atual:</h3>

          <div className="mb-8">
            <p className="text-sm text-gray-700 mb-1">
              1- Sua pele está com nível de inflamação em <strong className="text-gray-900">{severity}%</strong>:
            </p>
            <p className="text-xs text-gray-500 mb-4"><strong>Resultado:</strong> Saúde da Pele</p>
            <div className="relative mb-2">
              <div className="severity-bar" />
              <div className="severity-indicator" style={{ left: `${severityPosition}%` }}>
                <div className="severity-label">Você está aqui</div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Saudável</span>
              <span className="font-semibold text-orange-600">{severity}%</span>
              <span>Inflamada</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-4">
              2- O impacto emocional está em <strong className="text-gray-900">aproximadamente {emotionalImpact}%</strong> do nível máximo.
            </p>
            <div className="relative h-40 flex items-end justify-center gap-1">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-400">
                <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
              </div>
              <div className="flex items-end gap-2 pl-8 w-full justify-center">
                {[
                  { label: 'Vergonha', value: Math.max(emotionalImpact - 10, 10), color: '#22C55E' },
                  { label: 'Social', value: Math.max(emotionalImpact, 15), color: '#84CC16' },
                  { label: 'Autoestima', value: Math.min(emotionalImpact + 10, 90), color: '#EAB308' },
                  { label: 'Confiança', value: Math.min(emotionalImpact + 15, 92), color: '#F97316' },
                  { label: 'Você', value: Math.min(emotionalImpact + 20, 95), color: '#EF4444' },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-1" style={{ flex: 1 }}>
                    <div className="w-full rounded-t-md" style={{ height: `${bar.value}%`, background: bar.color }} />
                    <span className="text-[9px] text-gray-500 text-center leading-tight">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 mt-2 pl-8">
              <span>Baixo impacto</span><span>Alto impacto</span>
            </div>
          </div>
        </div>

        {/* Solution Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-5 mb-6 text-center animate-fadeInSlideUp" style={{ animationDelay: '400ms' }}>
          <p className="text-sm text-gray-700">
            Mas isso TEM SOLUÇÃO! Você precisa{' '}
            <strong className="text-gray-900 underline decoration-orange-400 underline-offset-2">DESCOBRIR O SEGREDO COREANO INSPIRADO NOS PROTOCOLOS COREANOS DE CUIDADOS COM A PELE PARA SECAR ESPINHAS</strong>
          </p>
        </div>

        {/* Transformation Image */}
        <div className="rounded-2xl overflow-hidden shadow-sm mb-4 animate-fadeInSlideUp" style={{ animationDelay: '500ms' }}>
          <img
            src="/images/finalantes.png"
            alt="Transformação real - Antes e Depois"
            className="w-full object-cover"
            style={{ maxHeight: '350px' }}
          />
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-6 animate-fadeInSlideUp" style={{ animationDelay: '600ms' }}>
          <TestimonialCarousel />
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fadeInSlideUp" style={{ animationDelay: '600ms' }}>
          <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-3">
            AGORA É HORA DE PERSONALIZAR A SOLUÇÃO PARA VOCÊ
          </p>
          <button onClick={onContinueToOffer} className="cta-button animate-pulseGlow">
            CONTINUAR PARA SOLUÇÃO
          </button>
        </div>

        <div className="text-center text-xs text-gray-400 mt-8 pb-4">
          <p>© 2026 - Método Pele Limpa</p>
        </div>
      </div>
    </div>
  );
}
