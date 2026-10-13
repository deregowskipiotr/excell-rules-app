import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';
import type { MiniGridData } from '../types';

interface ExcelMiniGridProps {
  data: MiniGridData;
  lang?: 'en' | 'pl';
}

export const ExcelMiniGrid: React.FC<ExcelMiniGridProps> = ({ data, lang = 'en' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyFormula = () => {
    if (!data.formulaBar) return;
    navigator.clipboard.writeText(data.formulaBar);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getHighlightClass = (color?: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-500/15 text-emerald-300 font-semibold border-l-2 border-l-emerald-400';
      case 'sky':
        return 'bg-sky-500/15 text-sky-300 font-semibold border-l-2 border-l-sky-400';
      case 'amber':
        return 'bg-amber-500/15 text-amber-300 font-semibold border-l-2 border-l-amber-400';
      case 'violet':
        return 'bg-purple-500/15 text-purple-300 font-semibold border-l-2 border-l-purple-400';
      case 'rose':
        return 'bg-rose-500/15 text-rose-300 font-semibold border-l-2 border-l-rose-400';
      default:
        return 'bg-emerald-950/20 text-text/90';
    }
  };

  return (
    <div className="w-full rounded-md border border-emerald-900/50 bg-main/80 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_rgba(0,16,2,0.6)] transition-colors duration-500">
      {/* Top Bar / Formula Bar */}
      <div className="border-b border-emerald-900/40 bg-main/90 p-2 sm:p-3 flex items-center gap-2 sm:gap-3 transition-colors duration-500">
        {/* Name Box & fx Symbol */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="px-2 py-1 rounded-md bg-emerald-950/70 border border-emerald-900/60 font-mono text-xs text-decor font-bold select-none">
            fx
          </div>
        </div>

        {/* Formula Bar Content */}
        <div className="flex-1 font-mono text-xs sm:text-sm bg-black/40 border border-emerald-900/30 rounded-md px-2.5 py-1.5 overflow-x-auto whitespace-nowrap text-text flex items-center transition-colors duration-500 scrollbar-thin">
          {data.formulaHighlights && data.formulaHighlights.length > 0 ? (
            data.formulaHighlights.map((chunk, idx) => (
              <span key={idx} className={`${chunk.color} font-medium`}>
                {chunk.text}
              </span>
            ))
          ) : (
            <span className="text-decor font-semibold">{data.formulaBar}</span>
          )}
        </div>

        {/* Copy Formula Action */}
        <button
          type="button"
          onClick={handleCopyFormula}
          title={lang === 'en' ? 'Copy formula' : 'Kopiuj formułę'}
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-md border border-emerald-900/60 bg-emerald-950/40 hover:bg-emerald-900/40 hover:border-emerald-500/50 text-text/80 hover:text-decor text-xs flex items-center gap-1.5 transition-colors duration-500 cursor-pointer shrink-0"
        >
          {copied ? (
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

      {/* Spreadsheet Grid Container - Horizontally scrollable on small screens */}
      <div className="p-3 sm:p-4 overflow-x-auto">
        <div className="min-w-85 sm:min-w-full inline-block align-middle">
          <table className="w-full border-collapse text-left font-mono text-xs select-none">
            <thead>
              <tr className="bg-emerald-950/40 text-text/60 border-b border-emerald-900/50">
                {/* Empty corner cell */}
                <th className="w-10 sm:w-12 px-2 py-1.5 text-center font-normal border-r border-emerald-900/50 text-text/40 bg-black/40">
                  #
                </th>
                {data.columns.map((col) => (
                  <th
                    key={col}
                    className="px-3 py-1.5 text-center font-semibold text-decor border-r border-emerald-900/50 last:border-r-0"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-950/60">
              {data.rows.map((row) => (
                <tr
                  key={row.rowNum}
                  className="hover:bg-emerald-950/20 transition-colors duration-500"
                >
                  {/* Row number column */}
                  <td className="px-2 py-2 text-center text-text/40 border-r border-emerald-900/50 bg-black/30 font-semibold">
                    {row.rowNum}
                  </td>
                  {/* Row data cells */}
                  {row.cells.map((cell, cIdx) => {
                    const isHighlighted = !!cell.highlight;
                    const highlightClass = isHighlighted
                      ? getHighlightClass(cell.highlightColor)
                      : 'text-text/80';

                    return (
                      <td
                        key={cIdx}
                        className={`px-3 py-2 border-r border-emerald-900/40 last:border-r-0 transition-colors duration-500 relative ${highlightClass}`}
                      >
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="truncate">{cell.value || '—'}</span>
                          {cell.isFormula && (
                            <span className="shrink-0 text-[10px] font-sans px-1 py-0.2 rounded-md bg-emerald-500/20 text-decor border border-emerald-500/30">
                              fx
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid Footnote / Mapping Legend */}
      <div className="px-3 py-2 sm:px-4 sm:py-2.5 bg-black/40 border-t border-emerald-900/30 text-[11px] text-text/60 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-decor shrink-0" />
          <span>
            {lang === 'en'
              ? 'Highlighted cell colors directly correspond to arguments in the formula bar above.'
              : 'Podświetlone komórki odpowiadają kolorystycznie argumentom formuły na pasku.'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-sky-400/80 inline-block" />
            Lookup / Criteria
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-emerald-400/80 inline-block" />
            Data Array
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-amber-400/80 inline-block" />
            Result
          </span>
        </div>
      </div>
    </div>
  );
};
