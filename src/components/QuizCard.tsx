import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy, Award } from 'lucide-react';
import type { QuizQuestion, Language } from '../types';

interface QuizCardProps {
  questions: QuizQuestion[];
  lang: Language;
  functionName: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({ questions, lang, functionName }) => {
  // Map question id -> selected option id
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [celebrated, setCelebrated] = useState(false);

  const handleSelectOption = (questionId: string, optionId: string) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [questionId]: optionId,
    };
    setSelectedAnswers(updatedAnswers);

    // Check if answering this question completes the quiz with all correct answers
    const totalCorrect = questions.filter(
      (q) => updatedAnswers[q.id] === q.correctId
    ).length;

    if (questions.length > 0 && totalCorrect === questions.length && !celebrated) {
      setCelebrated(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10cc58', '#4ade80', '#22c55e', '#38bdf8', '#fbbf24'],
        });
      } catch (err) {
        console.error('Confetti trigger failed:', err);
      }
    }
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(
    (q) => selectedAnswers[q.id] === q.correctId
  ).length;
  const isAllCorrect = questions.length > 0 && correctCount === questions.length;

  const handleReset = () => {
    setSelectedAnswers({});
    setCelebrated(false);
  };

  return (
    <div className="w-full rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,16,2,0.6)] transition-colors duration-500">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-emerald-900/40 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-decor">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-primary text-base sm:text-lg font-bold text-text">
              {lang === 'en'
                ? `Rapid Check-Up: ${functionName}`
                : `Szybki Sprawdzian: ${functionName}`}
            </h3>
            <p className="text-xs text-text/60 font-secondary">
              {lang === 'en'
                ? 'Test your understanding with 2 sales scenario questions.'
                : 'Sprawdź swoją wiedzę w 2 praktycznych scenariuszach sprzedażowych.'}
            </p>
          </div>
        </div>

        {answeredCount > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-emerald-900/50 bg-emerald-950/40 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-text/70 hover:text-text text-xs transition-colors duration-500 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Reset' : 'Resetuj'}
            </span>
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selectedOptionId = selectedAnswers[q.id];
          const isAnswered = !!selectedOptionId;
          const isCorrect = selectedOptionId === q.correctId;

          // Styling logic based on state
          return (
            <div
              key={q.id}
              className="rounded-md border border-emerald-900/40 bg-black/30 p-4 sm:p-5 transition-colors duration-500"
            >
              {/* Question title */}
              <div className="flex items-start gap-2.5 mb-3.5">
                <span className="shrink-0 w-6 h-6 rounded-md bg-emerald-950/80 border border-emerald-900/60 text-decor text-xs font-mono font-bold flex items-center justify-center">
                  Q{qIndex + 1}
                </span>
                <p className="text-sm sm:text-base text-text font-medium leading-relaxed font-secondary">
                  {q.question}
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2 mb-3">
                {q.options.map((opt) => {
                  const isThisSelected = selectedOptionId === opt.id;
                  const isThisCorrectOption = opt.id === q.correctId;

                  let buttonStyle =
                    'border-emerald-900/40 bg-emerald-950/20 text-text/80 hover:bg-emerald-950/50 hover:border-emerald-500/40 hover:text-text';

                  if (isAnswered) {
                    if (isThisSelected && isCorrect) {
                      buttonStyle =
                        'border-emerald-500/70 bg-emerald-950/60 text-decor font-semibold';
                    } else if (isThisSelected && !isCorrect) {
                      buttonStyle =
                        'border-rose-500/70 bg-rose-950/30 text-rose-300 font-semibold';
                    } else if (!isThisSelected && isThisCorrectOption) {
                      buttonStyle =
                        'border-emerald-500/40 bg-emerald-950/30 text-emerald-300';
                    } else {
                      buttonStyle =
                        'border-emerald-900/20 bg-black/20 text-text/40 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      className={`w-full text-left p-3 rounded-md border text-xs sm:text-sm transition-colors duration-500 flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-md border border-current/30 flex items-center justify-center text-[10px] font-mono shrink-0 uppercase">
                          {opt.id}
                        </span>
                        <span className="font-mono">{opt.text}</span>
                      </div>

                      {isAnswered && (
                        <div className="shrink-0">
                          {isThisSelected && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-decor" />
                          )}
                          {isThisSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Visual Feedback & Explanation */}
              {isAnswered && (
                <div
                  className={`mt-3 p-3 rounded-md border text-xs sm:text-sm font-secondary transition-colors duration-500 flex items-start gap-2.5 ${
                    isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-900/60 text-rose-200'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-decor shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-bold mb-0.5">
                      {isCorrect
                        ? lang === 'en'
                          ? 'Correct answer!'
                          : 'Świetnie! Poprawna odpowiedź!'
                        : lang === 'en'
                          ? 'Not quite right.'
                          : 'Nie do końca.'}
                    </p>
                    <p className="text-xs text-text/80 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Banner with Confetti Announcement */}
      {isAllCorrect && (
        <div className="mt-6 p-4 rounded-md border border-emerald-500/50 bg-linear-to-r from-emerald-950/70 via-emerald-900/40 to-emerald-950/70 text-text flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(16,204,88,0.2)] transition-colors duration-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-decor">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="font-primary font-bold text-sm sm:text-base text-decor flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                {lang === 'en' ? 'Mastery Confirmed!' : 'Opanowano funkcję!'}
              </p>
              <p className="text-xs text-text/80 font-secondary">
                {lang === 'en'
                  ? `You have answered both check-up questions for ${functionName} correctly.`
                  : `Udało Ci się poprawnie odpowiedzieć na oba pytania sprawdzające dla ${functionName}.`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
