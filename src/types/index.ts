export type Language = 'en' | 'pl';

export interface GridCell {
  value: string;
  highlight?: boolean;
  highlightColor?: string; // e.g. 'emerald', 'sky', 'amber', 'rose', 'violet'
  borderColor?: string;    // tailwind left-border color class
  isFormula?: boolean;
}

export interface GridRow {
  rowNum: number;
  cells: GridCell[];
}

export interface MiniGridData {
  columns: string[]; // e.g. ['A', 'B', 'C', 'D']
  rows: GridRow[];
  formulaBar: string;         // e.g. =XLOOKUP(A2,A:A,B:B)
  formulaHighlights: FormulaHighlight[];
}

export interface FormulaHighlight {
  text: string;
  color: string; // tailwind text color class e.g. 'text-emerald-400'
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctId: string;
  explanation: string;
}

export interface FunctionTranslation {
  title: string;
  subtitle: string;
  purpose: string;
  syntax: string;
  paramDescriptions: { param: string; description: string }[];
  salesUseCase: string;
  tip: string;
  miniGrid: MiniGridData;
  questions: QuizQuestion[];
}

export interface ExcelFunction {
  id: string;
  name: string;
  en: FunctionTranslation;
  pl: FunctionTranslation;
}
