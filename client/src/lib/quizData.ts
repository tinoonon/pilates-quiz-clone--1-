export interface QuizQuestion {
  id: number;
  question: string;
  type: 'single' | 'multiple';
  options: QuizOption[];
  emoji?: string;
  subtitle?: string;
}

export interface QuizOption {
  id: string;
  label: string;
  emoji?: string;
  description?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a sua idade?',
    type: 'single',
    options: [
      { id: '13-18', label: '13-18 anos', emoji: '🧑' },
      { id: '19-25', label: '19-25 anos', emoji: '👩' },
      { id: '26-35', label: '26-35 anos', emoji: '💃' },
      { id: '36+', label: '36+ anos', emoji: '👑' },
    ],
  },
  {
    id: 2,
    question: 'Qual é o seu sexo?',
    emoji: '👤',
    type: 'single',
    options: [
      { id: 'female', label: 'Feminino', emoji: '👩' },
      { id: 'male', label: 'Masculino', emoji: '👨' },
      { id: 'other', label: 'Prefiro não informar', emoji: '🙂' },
    ],
  },
  {
    id: 3,
    question: 'Há quanto tempo você sofre com espinhas?',
    emoji: '📅',
    type: 'single',
    options: [
      { id: 'recent', label: 'Menos de 6 meses', emoji: '🕐', description: 'Começou há pouco tempo' },
      { id: '1year', label: '6 meses a 1 ano', emoji: '📆', description: 'Já convivo há um tempo' },
      { id: '2-5years', label: '1 a 5 anos', emoji: '📅', description: 'Problema persistente' },
      { id: '5plus', label: 'Mais de 5 anos', emoji: '😔', description: 'Luto contra isso há muito tempo' },
    ],
  },
  {
    id: 4,
    question: 'Como você descreveria sua pele hoje?',
    emoji: '🔍',
    subtitle: 'Escolha a opção que melhor descreve:',
    type: 'single',
    options: [
      { id: 'oily', label: 'Oleosa', emoji: '💧', description: 'Brilho excessivo e poros abertos' },
      { id: 'combination', label: 'Mista', emoji: '🔄', description: 'Oleosa na zona T, seca nas bochechas' },
      { id: 'dry', label: 'Seca', emoji: '🍂', description: 'Repuxa e descama com facilidade' },
      { id: 'sensitive', label: 'Sensível', emoji: '🌸', description: 'Irrita e avermelha facilmente' },
    ],
  },
  {
    id: 5,
    question: 'Em quais regiões as espinhas mais aparecem?',
    emoji: '📍',
    subtitle: 'Pode marcar várias regiões:',
    type: 'multiple',
    options: [
      { id: 'forehead', label: 'Testa', emoji: '🧠' },
      { id: 'cheeks', label: 'Bochechas', emoji: '😊' },
      { id: 'chin', label: 'Queixo e mandíbula', emoji: '👇' },
      { id: 'nose', label: 'Nariz', emoji: '👃' },
      { id: 'back', label: 'Costas', emoji: '🔙' },
      { id: 'chest', label: 'Peito e pescoço', emoji: '👕' },
    ],
  },
  {
    id: 6,
    question: 'Qual a gravidade das suas espinhas hoje?',
    emoji: '📊',
    type: 'single',
    options: [
      { id: 'mild', label: 'Leve', emoji: '😊', description: 'Poucas espinhas esporádicas' },
      { id: 'moderate', label: 'Moderada', emoji: '😟', description: 'Várias espinhas frequentes' },
      { id: 'severe', label: 'Intensa', emoji: '😰', description: 'Muitas espinhas com inflamação' },
      { id: 'cystic', label: 'Muito intensa', emoji: '😣', description: 'Espinhas internas dolorosas e cistos' },
    ],
  },
  {
    id: 7,
    question: 'Suas espinhas causam dor ou inflamação?',
    emoji: '🤕',
    type: 'single',
    options: [
      { id: 'no-pain', label: 'Não, são apenas superficiais', emoji: '😌' },
      { id: 'mild-pain', label: 'Sim, dor leve às vezes', emoji: '😕' },
      { id: 'moderate-pain', label: 'Sim, ficam vermelhas e doloridas', emoji: '😣' },
      { id: 'severe-pain', label: 'Sim, inflamam muito e sangram', emoji: '😫' },
    ],
  },
  {
    id: 8,
    question: 'Como é sua rotina de cuidados com a pele?',
    emoji: '🧴',
    type: 'single',
    options: [
      { id: 'none', label: 'Não tenho rotina', emoji: '❌', description: 'Não faço nada específico' },
      { id: 'basic', label: 'Só lavo com sabonete', emoji: '🧼', description: 'Higiene básica apenas' },
      { id: 'intermediate', label: 'Limpeza + hidratante', emoji: '📋', description: 'Uma rotina simples' },
      { id: 'advanced', label: 'Vários produtos e etapas', emoji: '🔬', description: 'Skincare completo' },
    ],
  },
  {
    id: 9,
    question: 'Você usa protetor solar todos os dias?',
    emoji: '☀️',
    type: 'single',
    options: [
      { id: 'never', label: 'Nunca uso', emoji: '❌' },
      { id: 'sometimes', label: 'Só quando vou sair', emoji: '🌤️' },
      { id: 'usually', label: 'Na maioria dos dias', emoji: '⛅' },
      { id: 'always', label: 'Sim, todos os dias', emoji: '✅' },
    ],
  },
  {
    id: 10,
    question: 'Sua alimentação tem muito açúcar, leite ou fritura?',
    emoji: '🍔',
    type: 'single',
    options: [
      { id: 'healthy', label: 'Não, me alimento bem', emoji: '🥗' },
      { id: 'moderate', label: 'Às vezes como besteiras', emoji: '🤷' },
      { id: 'unhealthy', label: 'Sim, como bastante', emoji: '🍟' },
      { id: 'very-unhealthy', label: 'Sim, minha dieta é péssima', emoji: '😅' },
    ],
  },
  {
    id: 11,
    question: 'Sua pele piora quando você está estressado(a)?',
    emoji: '😩',
    type: 'single',
    options: [
      { id: 'no', label: 'Não percebo diferença', emoji: '🤷' },
      { id: 'maybe', label: 'Talvez, não tenho certeza', emoji: '🤔' },
      { id: 'yes', label: 'Sim, piora bastante', emoji: '😣' },
      { id: 'definitely', label: 'Com certeza, piora muito', emoji: '🤯' },
    ],
  },
  {
    id: 12,
    question: 'Você sente vergonha ou constrangimento por causa da sua pele?',
    emoji: '😔',
    type: 'single',
    options: [
      { id: 'no', label: 'Não me afeta', emoji: '💪' },
      { id: 'sometimes', label: 'Um pouco, às vezes', emoji: '😐' },
      { id: 'yes', label: 'Sim, bastante', emoji: '😢' },
      { id: 'very', label: 'Sim, afeta muito minha vida', emoji: '💔' },
    ],
  },
  {
    id: 13,
    question: 'Suas espinhas afetam sua autoestima e confiança?',
    emoji: '💖',
    type: 'single',
    options: [
      { id: 'no', label: 'Não, estou bem com isso', emoji: '💪' },
      { id: 'slight', label: 'Um pouco', emoji: '😕' },
      { id: 'significant', label: 'Sim, bastante', emoji: '😢' },
      { id: 'severe', label: 'Destruiu minha confiança', emoji: '💔' },
    ],
  },
  {
    id: 14,
    question: 'Você evita tirar fotos ou aparecer em câmera por causa da pele?',
    emoji: '📸',
    type: 'single',
    options: [
      { id: 'no', label: 'Não, tiro fotos normalmente', emoji: '😄' },
      { id: 'sometimes', label: 'Às vezes evito', emoji: '😅' },
      { id: 'often', label: 'Frequentemente evito', emoji: '😰' },
      { id: 'always', label: 'Evito ao máximo', emoji: '🙈' },
    ],
  },
  {
    id: 15,
    question: 'Você já tentou outros tratamentos para espinhas?',
    emoji: '🧪',
    type: 'single',
    options: [
      { id: 'never', label: 'Nunca tentei nada', emoji: '🆕' },
      { id: 'few', label: 'Tentei 1 ou 2 coisas', emoji: '📝' },
      { id: 'many', label: 'Tentei vários', emoji: '📚' },
      { id: 'everything', label: 'Tentei de tudo, nada funcionou', emoji: '😤' },
    ],
  },
  {
    id: 16,
    question: 'Quanto já investiu tentando resolver sua pele?',
    emoji: '💸',
    type: 'single',
    options: [
      { id: 'nothing', label: 'Nada ou quase nada', emoji: '❌' },
      { id: 'some', label: 'Pouco dinheiro', emoji: '💵' },
      { id: 'considerable', label: 'Uma quantia considerável', emoji: '💰' },
      { id: 'a-lot', label: 'Muito dinheiro sem resultado', emoji: '😤' },
    ],
  },
  {
    id: 17,
    question: 'Se sua pele ficasse completamente limpa, como se sentiria?',
    emoji: '✨',
    type: 'single',
    options: [
      { id: 'nice', label: 'Seria bom', emoji: '🙂' },
      { id: 'great', label: 'Seria incrível', emoji: '😃' },
      { id: 'life-changing', label: 'Seria transformador', emoji: '🤩' },
      { id: 'everything', label: 'Mudaria tudo na minha vida', emoji: '😍' },
    ],
  },
  {
    id: 18,
    question: 'Você está pronto(a) para seguir um protocolo personalizado?',
    emoji: '🚀',
    type: 'single',
    options: [
      { id: 'not-sure', label: 'Ainda não sei', emoji: '🤷' },
      { id: 'small', label: 'Sim, se for simples', emoji: '👍' },
      { id: 'committed', label: 'Sim, estou comprometido(a)', emoji: '💪' },
      { id: 'anything', label: 'Sim, faria qualquer coisa!', emoji: '🔥' },
    ],
  },
];

export const interstitialConfig = {
  afterQuestions: [5, 10, 14],
};

export const testimonials = [
  {
    name: 'Larissa Mendes',
    age: 20,
    occupation: 'Estudante de Enfermagem',
    avatar: '/images/avatar-1.png',
    image: '/images/testimonial-before-after.png',
    text: 'Minha pele era cheia de espinhas, principalmente no queixo. Em 2 semanas seguindo o protocolo, as inflamações sumiram. Hoje me sinto outra pessoa!',
    rating: 5,
    result: 'Pele limpa em 14 dias',
  },
  {
    name: 'Lucas Ferreira',
    age: 24,
    occupation: 'Designer Gráfico',
    avatar: '/images/avatar-3.png',
    image: '/images/homemn.png',
    text: 'Gastei mais de R$2.000 em dermatologista e nada funcionava. Com esse método simples, em 3 semanas minhas espinhas praticamente desapareceram. Inacreditável!',
    rating: 5,
    result: 'Espinhas eliminadas em 7 dias',
  },
  {
    name: 'Rafael Santos',
    age: 19,
    occupation: 'Universitário',
    avatar: '/images/avatar-3.png',
    image: '/images/clear-skin-hero.png',
    text: 'Tinha vergonha de sair de casa por causa das espinhas. Depois do protocolo, minha autoestima voltou. Meus amigos nem acreditaram na mudança!',
    rating: 5,
    result: 'Autoestima recuperada',
  },
  {
    name: 'Beatriz Oliveira',
    age: 28,
    occupation: 'Professora',
    avatar: '/images/avatar-1.png',
    image: '/images/testimonial-before-after.png',
    text: 'Sofria com espinhas há 10 anos. Já tinha perdido a esperança. O método pele limpa foi a única coisa que realmente funcionou. Minha pele nunca esteve tão boa!',
    rating: 5,
    result: 'Pele renovada em 30 dias',
  },
  {
    name: 'Amanda Ferreira',
    age: 17,
    occupation: 'Estudante',
    avatar: '/images/avatar-2.png',
    image: '/images/skin-transformation.png',
    text: 'Minhas espinhas me faziam chorar todo dia. Depois de seguir o protocolo certinho, em 10 dias já vi diferença. Hoje tiro fotos sem medo! Super recomendo.',
    rating: 5,
    result: 'Resultado em apenas 10 dias',
  },
];

export const analysisSteps = [
  'Identificando seu tipo de pele...',
  'Analisando nível de inflamação...',
  'Verificando causas hormonais...',
  'Avaliando sua rotina atual...',
  'Calculando severidade...',
  'Criando protocolo personalizado...',
];
