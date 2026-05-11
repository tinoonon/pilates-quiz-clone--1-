import { Shield, Clock, Star, Zap } from 'lucide-react';

export default function FinalOfferPage() {
  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      {/* Top gradient accent */}
      <div className="w-full h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

      <div className="container max-w-lg py-8 px-4">
        {/* Header */}
        <div className="text-center mb-6 animate-fadeInSlideUp">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            DIAGNÓSTICO CONCLUÍDO COM SUCESSO
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
            Seu Protocolo <span className="text-orange-500">Pele Limpa</span> está pronto!
          </h1>

          <p className="text-sm text-gray-600 leading-relaxed">
            Com base nas suas respostas, criamos um plano personalizado para eliminar suas espinhas e conquistar a pele que você merece.
          </p>
        </div>

        {/* Key benefits */}
        <div className="grid grid-cols-2 gap-3 mb-6 animate-fadeInSlideUp" style={{ animationDelay: '100ms' }}>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Clock className="h-5 w-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xs font-bold text-gray-800">Resultados em</p>
            <p className="text-lg font-extrabold text-orange-500">7 dias</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Zap className="h-5 w-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xs font-bold text-gray-800">Método</p>
            <p className="text-lg font-extrabold text-orange-500">100% Natural</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Shield className="h-5 w-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xs font-bold text-gray-800">Garantia de</p>
            <p className="text-lg font-extrabold text-orange-500">7 dias</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Star className="h-5 w-5 text-orange-500 mx-auto mb-1" />
            <p className="text-xs font-bold text-gray-800">Avaliação</p>
            <p className="text-lg font-extrabold text-orange-500">4.9 ⭐</p>
          </div>
        </div>

        {/* Info text */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 mb-6 animate-fadeInSlideUp" style={{ animationDelay: '200ms' }}>
          <h3 className="font-bold text-gray-900 text-center mb-2">
            🎯 O que você vai receber:
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Protocolo completo personalizado para o seu tipo de pele</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Rotina passo a passo para fazer em casa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Lista de produtos acessíveis e eficazes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Suporte e acompanhamento exclusivo</span>
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="mb-6 animate-fadeInSlideUp" style={{ animationDelay: '300ms' }}>
          <p className="text-center text-sm font-semibold text-gray-700 mb-3">
            🎬 Assista e entenda como funciona:
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/9' }}>
            {/* Replace the src below with your actual video URL */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Método Pele Limpa - Como Funciona"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            *Substitua o link acima pelo seu vídeo de vendas
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fadeInSlideUp" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => {
              // Replace with your sales page URL
              window.open('https://seulink.com/metodo-pele-limpa', '_blank');
            }}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-extrabold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
          >
            🔥 APROVEITAR O MÉTODO AGORA
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            ⚡ Oferta por tempo limitado • Acesso imediato
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex justify-center gap-4 text-[10px] text-gray-400 animate-fadeInSlideUp" style={{ animationDelay: '500ms' }}>
          <span className="flex items-center gap-1">🔒 Compra Segura</span>
          <span className="flex items-center gap-1">✅ Garantia 7 dias</span>
          <span className="flex items-center gap-1">📱 Acesso Imediato</span>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mt-8 pb-4">
          <p>© 2026 - Método Pele Limpa • Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}
