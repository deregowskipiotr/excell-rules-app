import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Briefcase,
  Lightbulb,
  Copy,
  Check,
  ChevronRight,
  TrendingUp,
  Table,
} from 'lucide-react';
import type { ExcelFunction, Language } from '../types';
import { ExcelMiniGrid } from './ExcelMiniGrid';
import { QuizCard } from './QuizCard';

interface FunctionDetailViewProps {
  func: ExcelFunction;
  lang: Language;
}

export const FunctionDetailView: React.FC<FunctionDetailViewProps> = ({ func, lang }) => {
  const [syntaxCopied, setSyntaxCopied] = useState(false);
  const data = func[lang];

  const handleCopySyntax = () => {
    navigator.clipboard.writeText(data.syntax);
    setSyntaxCopied(true);
    setTimeout(() => setSyntaxCopied(false), 2000);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${func.id}-${lang}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="space-y-6 sm:space-y-8"
      >
        {/* Hero Header Card */}
        <section className="rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-5 sm:p-8 shadow-[0_8px_30px_rgba(0,16,2,0.6)] transition-colors duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-decor text-xs font-mono font-bold tracking-wider">
                  {lang === 'en' ? 'FUNCTION' : 'FUNKCJA'}
                </span>
                <span className="text-xs text-text/50 font-secondary flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-decor" /> Sales Essential
                </span>
              </div>
              <h1 className="font-primary text-2xl sm:text-4xl font-bold text-text tracking-tight">
                {data.title}
              </h1>
              <p className="font-secondary text-sm sm:text-base text-decor mt-1 font-medium">
                {data.subtitle}
              </p>
            </div>
          </div>

          <p className="font-secondary text-sm sm:text-base text-text/85 leading-relaxed max-w-3xl border-t border-emerald-900/40 pt-4">
            {data.purpose}
          </p>
        </section>

        {/* Syntax & Parameters Breakdown */}
        <section className="rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-5 sm:p-7 shadow-[0_8px_30px_rgba(0,16,2,0.6)] transition-colors duration-500">
          <div className="flex items-center gap-2.5 mb-4 text-decor">
            <Code2 className="w-5 h-5" />
            <h2 className="font-primary text-lg sm:text-xl font-bold text-text">
              {lang === 'en' ? 'Formula Syntax & Arguments' : 'Składnia i Argumenty Formuły'}
            </h2>
          </div>

          {/* Syntax box */}
          <div className="rounded-md border border-emerald-900/50 bg-black/50 p-3 sm:p-4 mb-5 flex items-center justify-between gap-3 overflow-hidden">
            <code className="font-mono text-xs sm:text-sm text-decor overflow-x-auto whitespace-nowrap scrollbar-thin py-1 flex-1">
              {data.syntax}
            </code>
            <button
              type="button"
              onClick={handleCopySyntax}
              title={lang === 'en' ? 'Copy formula syntax' : 'Kopiuj składnię formuły'}
              className="px-2.5 py-1.5 rounded-md border border-emerald-900/60 bg-emerald-950/40 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-text/80 hover:text-decor text-xs flex items-center gap-1.5 transition-colors duration-500 cursor-pointer shrink-0"
            >
              {syntaxCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-decor" />
                  <span className="hidden sm:inline text-decor">
                    {lang === 'en' ? 'Copied' : 'Skopiowano'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {lang === 'en' ? 'Copy' : 'Kopiuj'}
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Parameter Descriptions */}
          <div className="space-y-2.5">
            <h3 className="text-xs uppercase font-semibold text-text/60 tracking-wider mb-2">
              {lang === 'en' ? 'Parameters Guide:' : 'Przewodnik po Argumentach:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {data.paramDescriptions.map((paramItem, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-emerald-900/40 bg-black/30 p-3 flex items-start gap-2.5 hover:border-emerald-500/30 transition-colors duration-500"
                >
                  <ChevronRight className="w-4 h-4 text-decor shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs font-bold text-decor bg-emerald-950/60 px-1.5 py-0.5 rounded-md border border-emerald-900/50 inline-block mb-1">
                      {paramItem.param}
                    </span>
                    <p className="text-xs text-text/75 font-secondary leading-relaxed">
                      {paramItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2-Column Section: Real-World Sales Use Case & Pro Tip */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Sales Use Case */}
          <div className="rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,16,2,0.6)] flex flex-col justify-between transition-colors duration-500">
            <div>
              <div className="flex items-center gap-2 mb-3 text-decor">
                <Briefcase className="w-4 h-4" />
                <h3 className="font-primary text-base sm:text-lg font-bold text-text">
                  {lang === 'en' ? 'Sales Use Case Scenario' : 'Zastosowanie w Sprzedaży'}
                </h3>
              </div>
              <p className="font-secondary text-xs sm:text-sm text-text/85 leading-relaxed">
                {data.salesUseCase}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-900/30 text-[11px] text-decor/80 font-mono">
              ✦ {lang === 'en' ? 'Field-Tested Practice' : 'Sprawdzona Praktyka Biznesowa'}
            </div>
          </div>

          {/* Pro Sales Tip */}
          <div className="rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,16,2,0.6)] flex flex-col justify-between transition-colors duration-500">
            <div>
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <Lightbulb className="w-4 h-4" />
                <h3 className="font-primary text-base sm:text-lg font-bold text-text">
                  {lang === 'en' ? 'Pro Analyst Tip' : 'Wskazówka Eksperta'}
                </h3>
              </div>
              <p className="font-secondary text-xs sm:text-sm text-text/85 leading-relaxed">
                {data.tip}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-900/30 text-[11px] text-amber-400/80 font-mono">
              ★ {lang === 'en' ? 'Efficiency Boost' : 'Zwiększenie Efektywności'}
            </div>
          </div>
        </section>

        {/* Compact Interactive Excel Mini-Grid */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-decor px-1">
            <Table className="w-4 h-4" />
            <h2 className="font-primary text-lg sm:text-xl font-bold text-text">
              {lang === 'en' ? 'Interactive Spreadsheet Demo' : 'Interaktywny Arkusz Kalkulacyjny'}
            </h2>
          </div>
          <ExcelMiniGrid data={data.miniGrid} lang={lang} />
        </section>

        {/* Interactive Check-Up Quiz Card */}
        <section className="space-y-3">
          <QuizCard
            key={`${func.id}-${lang}`}
            questions={data.questions}
            lang={lang}
            functionName={data.title}
          />
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
