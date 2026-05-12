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
            O <span className="text-orange-500">Segredo Coreano</span> está pronto para VOCÊ!
          </h1>

          <p className="text-sm text-gray-600 leading-relaxed">
            Com base nas suas respostas, descobrimos o método EXATO inspirado nos protocolos coreanos de cuidados com a pele para SECAR suas espinhas de vez!
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
              <span>O Segredo Coreano completo personalizado para SUA pele</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Método passo a passo TESTADO por gerações</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Ingredientes naturais PODEROSOS e acessíveis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Suporte EXCLUSIVO para GARANTIR seus resultados</span>
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="mb-6 animate-fadeInSlideUp" style={{ animationDelay: '300ms' }}>
          <p className="text-center text-sm font-semibold text-gray-700 mb-3">
            🎬 Assista e entenda como funciona:
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '9/16', maxHeight: '600px', margin: '0 auto' }}>
            <video
              controls
              poster="/images/content.png"
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="https://cdn.discordapp.com/attachments/1304565472695685121/1503538220862935101/202605111838.mp4?ex=6a045f56&is=6a030dd6&hm=96d3345a47c14f096ac64b996eee99c0b297b9ea67ca3db8b3ae3a2b1c762d94&" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
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
