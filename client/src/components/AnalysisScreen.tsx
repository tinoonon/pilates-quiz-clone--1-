import { useState, useEffect } from 'react';
import { analysisSteps } from '@/lib/quizData';

interface AnalysisScreenProps {
  onComplete: () => void;
}

export default function AnalysisScreen({ onComplete }: AnalysisScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 6000; // 6 seconds
    const interval = 50; // update every 50ms
    const totalSteps = totalDuration / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepDuration = 6000 / analysisSteps.length;
    const timer = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#F7F5F2' }}>
      <div className="max-w-md w-full text-center">
        {/* Spinner */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full border-4 border-gray-200"
              style={{
                borderTopColor: '#FF8C42',
                borderRightColor: '#FF8C42',
                animation: 'spin 1s linear infinite',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Analisando suas respostas
        </h2>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Analisando suas respostas</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="analysis-loading-bar">
            <div
              className="analysis-loading-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Current step text */}
        <div className="min-h-[24px]">
          <p
            key={currentStepIndex}
            className="text-sm text-orange-500 font-medium animate-fadeInSlideUp"
          >
            {analysisSteps[currentStepIndex]}
          </p>
        </div>

        {/* Analysis items */}
        <div className="mt-8 space-y-3">
          {analysisSteps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 text-sm transition-all duration-500 ${
                i <= currentStepIndex ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                  i < currentStepIndex
                    ? 'bg-green-500 text-white'
                    : i === currentStepIndex
                      ? 'bg-orange-500 text-white animate-pulseGlow'
                      : 'bg-gray-200 text-gray-400'
                }`}
              >
                {i < currentStepIndex ? '✓' : i === currentStepIndex ? '•' : ''}
              </div>
              <span className={`${i <= currentStepIndex ? 'text-gray-700' : 'text-gray-400'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
