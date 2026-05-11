import { useState, useCallback } from 'react';
import { quizQuestions, interstitialConfig, testimonials } from '@/lib/quizData';
import Hero from './Hero';
import QuizQuestion from './QuizQuestion';
import QuizResultComponent from './QuizResult';
import ProgressBar from './ProgressBar';
import InterstitialScreen from './InterstitialScreen';
import AnalysisScreen from './AnalysisScreen';
import FinalOfferPage from './FinalOfferPage';

type Phase = 'hero' | 'quiz' | 'interstitial' | 'analyzing' | 'result' | 'offer';

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>('hero');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [interstitialIndex, setInterstitialIndex] = useState(0);

  const questionsToShow = quizQuestions.filter(q => q.id !== 1);
  const currentQuestion = questionsToShow[currentStep];
  const isLastQuestion = currentStep === questionsToShow.length - 1;
  const progress = ((currentStep + 1) / questionsToShow.length) * 100;

  const handleStartQuiz = (ageId?: string) => {
    if (ageId) {
      setAnswers({ 1: ageId });
    }
    setPhase('quiz');
    setCurrentStep(0);
  };

  const handleAnswer = (value: string | string[]) => {
    if (!currentQuestion) return;

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    setTimeout(() => {
      if (isLastQuestion) {
        setPhase('analyzing');
      } else if (interstitialConfig.afterQuestions.includes(currentQuestion.id)) {
        setPhase('interstitial');
      } else {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 350);
  };

  const handleInterstitialContinue = () => {
    setInterstitialIndex(prev => prev + 1);
    setPhase('quiz');
    setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalysisComplete = useCallback(() => {
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleContinueToOffer = useCallback(() => {
    setPhase('offer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (phase === 'hero') {
    return <Hero onStartQuiz={handleStartQuiz} />;
  }

  if (phase === 'interstitial') {
    return (
      <>
        <ProgressBar progress={progress} />
        <InterstitialScreen
          index={interstitialIndex}
          answers={answers}
          onContinue={handleInterstitialContinue}
          totalQuestions={questionsToShow.length}
          currentStep={currentStep}
        />
      </>
    );
  }

  if (phase === 'analyzing') {
    return (
      <>
        <ProgressBar progress={100} />
        <AnalysisScreen onComplete={handleAnalysisComplete} />
      </>
    );
  }

  if (phase === 'result') {
    return (
      <QuizResultComponent
        answers={answers}
        testimonials={testimonials}
        onContinueToOffer={handleContinueToOffer}
      />
    );
  }

  if (phase === 'offer') {
    return <FinalOfferPage />;
  }

  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      <ProgressBar progress={progress} />

      <div className="container max-w-lg py-8 sm:py-12 px-4 pt-12 sm:pt-16">
        {currentQuestion && (
          <QuizQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}

        <div className="mt-8 sm:mt-10 text-center text-xs text-gray-400 font-medium">
          ✅ TEMPO ESTIMADO: 49 SEGUNDOS
        </div>
      </div>
    </div>
  );
}
