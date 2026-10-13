import React, { useState, useRef, useEffect } from 'react';
import { TableProperties, Globe, ChevronDown, Check, Sparkles } from 'lucide-react';
import type { Language, ExcelFunction } from '../types';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  functions: ExcelFunction[];
  selectedFunctionId: string;
  onSelectFunction: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  functions,
  selectedFunctionId,
  onSelectFunction,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeFunction = functions.find((f) => f.id === selectedFunctionId) || functions[0];
  const translation = activeFunction ? activeFunction[currentLang] : null;

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-main/85 border-b border-emerald-900/40 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-decor shadow-[0_0_15px_rgba(16,204,88,0.15)]">
            <TableProperties className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-primary text-base sm:text-lg font-bold tracking-wide text-text">
                Excel Sales Rules
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-decor">
                <Sparkles className="w-2.5 h-2.5" /> Pro Guide
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-text/60 font-secondary leading-tight hidden sm:block">
              {currentLang === 'en'
                ? 'Quick-reference guide for sales professionals'
                : 'Szybki podręcznik formuł dla zespołów sprzedaży'}
            </p>
          </div>
        </div>

        {/* Middle & Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Function Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md bg-emerald-950/40 border border-emerald-900/50 hover:border-emerald-500/50 hover:bg-emerald-950/70 text-text text-xs sm:text-sm transition-colors duration-500 cursor-pointer shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-decor animate-pulse shrink-0" />
              <span className="font-semibold text-decor font-mono tracking-wider">
                {translation?.title || activeFunction.name}
              </span>
              <span className="hidden lg:inline text-text/60 max-w-35 truncate text-xs font-secondary">
                · {translation?.subtitle}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-text/70 transition-transform duration-500 ${
                  dropdownOpen ? 'rotate-180 text-decor' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-72 sm:w-80 rounded-md bg-main/95 backdrop-blur-xl border border-emerald-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.8)] py-1.5 z-50 animate-in fade-in duration-300"
              >
                <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-emerald-400/70 tracking-wider border-b border-emerald-950/60 mb-1">
                  {currentLang === 'en' ? 'Select Sales Function' : 'Wybierz Funkcję Sprzedażową'}
                </div>
                <div className="max-h-80 overflow-y-auto space-y-0.5 px-1">
                  {functions.map((fn) => {
                    const isSelected = fn.id === selectedFunctionId;
                    const fnText = fn[currentLang];
                    return (
                      <button
                        key={fn.id}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          onSelectFunction(fn.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-500 flex items-start justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-900/40 text-decor border border-emerald-500/30'
                            : 'hover:bg-emerald-950/40 text-text/85 hover:text-text border border-transparent'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-text">
                              {fnText.title}
                            </span>
                            {isSelected && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-decor">
                                {currentLang === 'en' ? 'Active' : 'Aktywna'}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-text/60 truncate font-secondary mt-0.5">
                            {fnText.subtitle}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 text-decor shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Bilingual Toggle (EN / PL) */}
          <div className="flex items-center rounded-md p-0.5 bg-emerald-950/50 border border-emerald-900/60 shadow-inner">
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold rounded-md transition-colors duration-500 cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-decor text-main shadow-[0_0_12px_rgba(16,204,88,0.35)]'
                  : 'text-text/70 hover:text-text hover:bg-emerald-900/30'
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>EN</span>
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('pl')}
              className={`flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold rounded-md transition-colors duration-500 cursor-pointer ${
                currentLang === 'pl'
                  ? 'bg-decor text-main shadow-[0_0_12px_rgba(16,204,88,0.35)]'
                  : 'text-text/70 hover:text-text hover:bg-emerald-900/30'
              }`}
            >
              <span>PL</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
