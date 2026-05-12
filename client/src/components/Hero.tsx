interface HeroProps {
  onStartQuiz: (ageId?: string) => void;
}

const ageOptions = [
  { id: '13-18', label: '13-18 anos', emoji: '🧑' },
  { id: '19-25', label: '19-25 anos', emoji: '👩' },
  { id: '26-35', label: '26-35 anos', emoji: '💃' },
  { id: '36+', label: '36+ anos', emoji: '👑' },
];

export default function Hero({ onStartQuiz }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F7F5F2' }}>
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">
        <div className="max-w-lg w-full">
          {/* Title */}
          <div className="text-center mb-4 sm:mb-6 animate-fadeInSlideUp">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight px-2">
              O MÉTODO COREANO SIMPLES QUE ESTÁ AJUDANDO MULHERES A <span className="text-orange-500">REDUZIREM ESPINHAS</span> EM ATÉ <span className="text-orange-500">7 DIAS</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-4 sm:mb-6 animate-fadeInSlideUp px-2" style={{ animationDelay: '100ms' }}>
            <p className="inline-block bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide">
              COM NOSSO MÉTODO PERSONALIZADO EM CASA
            </p>
          </div>

          {/* Info Banner - Moved here */}
          <div className="animate-fadeInSlideUp px-2 mb-6 sm:mb-8" style={{ animationDelay: '150ms' }}>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl px-4 sm:px-5 py-3 text-center">
              <p className="text-xs text-gray-700 leading-relaxed">
                Faça esse teste para{' '}
                <strong className="text-gray-900">Descobrir o Segredo Coreano Inspirado nos Protocolos Coreanos de Cuidados com a Pele Para Secar Espinhas</strong>. Ao final
                você ganha seu <strong className="text-gray-900">diagnóstico grátis</strong>.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-6 sm:mb-8 animate-fadeInScale px-2" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '280px', maxHeight: '350px' }}>
              <img
                src="/images/skin-transformation.png"
                alt="Transformação da pele - Antes e Depois"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Age Selection */}
          <div className="text-center mb-4 sm:mb-6 animate-fadeInSlideUp px-2" style={{ animationDelay: '300ms' }}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Desafio específico para sua idade e objetivo:
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">Escolha uma opção abaixo:</p>
          </div>

          {/* Age Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {ageOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => onStartQuiz(option.id)}
                className="quiz-option flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl border-2 border-orange-300 bg-white text-left font-semibold text-gray-800 hover:bg-orange-50 animate-optionEnter"
                style={{ animationDelay: `${400 + index * 80}ms` }}
              >
                <span className="text-lg sm:text-xl">{option.emoji}</span>
                <span className="text-xs sm:text-sm">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Estimated time */}
          <div className="text-center animate-fadeInSlideUp px-2" style={{ animationDelay: '700ms' }}>
            <p className="text-xs text-gray-500 font-medium">
              ✅ TEMPO ESTIMADO: <strong className="text-gray-700">49 SEGUNDOS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
