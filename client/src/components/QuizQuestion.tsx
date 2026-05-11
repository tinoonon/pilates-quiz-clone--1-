import { QuizQuestion as QuizQuestionType } from '@/lib/quizData';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (value: string | string[]) => void;
}

export default function QuizQuestion({
  question,
  onAnswer,
}: QuizQuestionProps) {
  const [multipleSelected, setMultipleSelected] = useState<string[]>([]);

  // Reset multiple selection when question changes
  useEffect(() => {
    setMultipleSelected([]);
  }, [question.id]);

  const handleSingleSelect = (optionId: string) => {
    onAnswer(optionId);
  };

  const handleMultipleToggle = (optionId: string) => {
    setMultipleSelected(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleMultipleConfirm = () => {
    if (multipleSelected.length > 0) {
      onAnswer(multipleSelected);
    }
  };

  const isMultiple = question.type === 'multiple';

  return (
    <div className="animate-fadeInSlideUp" key={question.id}>
      {/* Question Emoji */}
      {question.emoji && (
        <div className="text-center mb-4">
          <span className="text-5xl animate-float inline-block">{question.emoji}</span>
        </div>
      )}

      {/* Question Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center leading-tight">
        {question.question}
      </h2>

      {/* Subtitle */}
      {question.subtitle && (
        <p className="text-center text-sm text-gray-500 mb-6">
          {question.subtitle}
        </p>
      )}

      {/* Options */}
      <div className="space-y-3 mt-6">
        {question.options.map((option, index) => {
          const isSelected = isMultiple
            ? multipleSelected.includes(option.id)
            : false;

          return (
            <div
              key={option.id}
              className="animate-optionEnter"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {isMultiple ? (
                <label
                  className={`quiz-option flex items-center gap-4 p-4 rounded-2xl border-2 bg-white cursor-pointer ${
                    isSelected
                      ? 'selected border-orange-400'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => handleMultipleToggle(option.id)}
                    className="h-6 w-6 rounded-md"
                  />
                  <div className="flex-1 flex items-center gap-3">
                    {option.emoji && (
                      <span className="option-emoji text-2xl flex-shrink-0">{option.emoji}</span>
                    )}
                    <div>
                      <span className="text-base font-semibold text-gray-800">
                        {option.label}
                      </span>
                      {option.description && (
                        <p className="text-xs text-gray-500 mt-0.5">{option.description}</p>
                      )}
                    </div>
                  </div>
                </label>
              ) : (
                <button
                  onClick={() => handleSingleSelect(option.id)}
                  className="quiz-option w-full p-4 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange-300 text-left"
                >
                  <div className="flex items-center gap-3">
                    {option.emoji && (
                      <span className="option-emoji text-2xl flex-shrink-0">{option.emoji}</span>
                    )}
                    <div className="flex-1">
                      <span className="text-base font-semibold text-gray-800">
                        {option.label}
                      </span>
                      {option.description && (
                        <p className="text-xs text-gray-500 mt-0.5">{option.description}</p>
                      )}
                    </div>
                  </div>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* CONTINUAR button ONLY for multiple-select */}
      {isMultiple && multipleSelected.length > 0 && (
        <div className="mt-6 animate-fadeInSlideUp">
          <button
            onClick={handleMultipleConfirm}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            CONTINUAR →
          </button>
        </div>
      )}
    </div>
  );
}
