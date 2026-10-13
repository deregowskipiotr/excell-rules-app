import { useState } from 'react';
import type { Language } from './types';
import { excelFunctions } from './data/functionsData';
import { Navbar } from './components/Navbar';
import { FunctionDetailView } from './components/FunctionDetailView';
import { Layers, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedFunctionId, setSelectedFunctionId] = useState<string>(
    excelFunctions[0]?.id || 'xlookup'
  );

  const activeIndex = excelFunctions.findIndex((f) => f.id === selectedFunctionId);
  const currentFunction = excelFunctions[activeIndex] || excelFunctions[0];

  const handlePrevFunction = () => {
    const prevIdx = (activeIndex - 1 + excelFunctions.length) % excelFunctions.length;
    setSelectedFunctionId(excelFunctions[prevIdx].id);
  };

  const handleNextFunction = () => {
    const nextIdx = (activeIndex + 1) % excelFunctions.length;
    setSelectedFunctionId(excelFunctions[nextIdx].id);
  };

  return (
    <div className="min-h-screen bg-main text-text flex flex-col selection:bg-decor/30 selection:text-decor">
      {/* Sticky Glass Navbar with Bilingual Toggle & Dropdown */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        functions={excelFunctions}
        selectedFunctionId={selectedFunctionId}
        onSelectFunction={setSelectedFunctionId}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Quick Function Navigation Bar / Pill Selector */}
        <section aria-label="Functions tabs" className="space-y-2">
          <div className="flex items-center justify-between gap-2 px-1">
            <span className="text-xs uppercase font-mono tracking-wider text-decor flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {currentLang === 'en' ? 'Core Functions Directory' : 'Katalog Głównych Formuł'}
            </span>
            <span className="text-xs text-text/40 font-mono">
              {activeIndex + 1} / {excelFunctions.length}
            </span>
          </div>

          {/* Horizontally scrollable function pills for mobile & desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {excelFunctions.map((fn, idx) => {
              const isActive = fn.id === selectedFunctionId;
              const fnData = fn[currentLang];

              return (
                <button
                  key={fn.id}
                  type="button"
                  onClick={() => setSelectedFunctionId(fn.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-md border text-xs sm:text-sm font-mono whitespace-nowrap transition-colors duration-500 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-emerald-950/70 border-emerald-500/60 text-decor shadow-[0_0_15px_rgba(16,204,88,0.2)]'
                      : 'bg-emerald-950/20 border-emerald-900/40 text-text/70 hover:bg-emerald-950/40 hover:border-emerald-500/30 hover:text-text'
                  }`}
                >
                  <span className="text-[10px] text-text/40 font-mono">
                    0{idx + 1}
                  </span>
                  <span className="font-bold">{fnData.title}</span>
                  <span className="text-[11px] text-text/50 font-sans hidden md:inline">
                    · {fnData.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Function Detail View (Theory, Mini-Grid, Quizzes) */}
        <FunctionDetailView
          func={currentFunction}
          lang={currentLang}
        />

        {/* Bottom Pagination Controls for Quick Stepping */}
        <div className="rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md p-3 sm:p-4 flex items-center justify-between gap-3 transition-colors duration-500">
          <button
            type="button"
            onClick={handlePrevFunction}
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-emerald-900/50 bg-emerald-950/30 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-text/80 hover:text-decor text-xs sm:text-sm transition-colors duration-500 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>
              {currentLang === 'en' ? 'Previous Function' : 'Poprzednia Funkcja'}
            </span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-text/50 font-secondary">
            <Bookmark className="w-3.5 h-3.5 text-decor" />
            <span>
              {currentLang === 'en'
                ? `Active: ${currentFunction.name}`
                : `Aktywna: ${currentFunction.pl.title}`}
            </span>
          </div>

          <button
            type="button"
            onClick={handleNextFunction}
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-emerald-900/50 bg-emerald-950/30 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-text/80 hover:text-decor text-xs sm:text-sm transition-colors duration-500 cursor-pointer"
          >
            <span>
              {currentLang === 'en' ? 'Next Function' : 'Następna Funkcja'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-900/40 bg-main/90 backdrop-blur-md py-6 px-4 mt-8 transition-colors duration-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-text/50 font-secondary">
          <p>
            © {new Date().getFullYear()} Excel Sales Rules & Guide. Built for high-velocity revenue & sales support teams.
          </p>
          <p className="font-mono text-[11px] text-decor/80">
            {currentLang === 'en'
              ? 'Bilingual Edition · Polish & English'
              : 'Wersja Dwujęzyczna · Polski i Angielski'}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
