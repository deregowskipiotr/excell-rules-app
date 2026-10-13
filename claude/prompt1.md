You are an expert Senior Front-End Developer and UI/UX Designer specializing in building pixel-perfect, production-ready, and highly polished web applications using React 19, Vite, TypeScript, and Tailwind CSS v4.

Your task is to build a complete, production-ready, bug-free, and stunning web application called "Excel Sales Rules & Guide" (Excel & Sales Guide). This app is designed for sales professionals and sales support specialists to act as an instant, mobile-first quick-reference guide and micro-learning tool.

---

### 🛠️ Technical Stack & Environment
- **React 19 & TypeScript** (`.tsx` components, strict types)
- **Styling:** Tailwind CSS v4 (already configured via `@tailwindcss/vite` and `@import 'tailwindcss'`)
- **Icons:** `lucide-react`
- **Animations:** `framer-motion` (smooth transitions, duration at least 500ms)
- **State Management:** `zustand` or React state
- **Confetti:** `canvas-confetti` (for quiz completion celebrations)

### 🎨 Design & Styling System (Strict Golden Rules)
You must strictly adhere to the following design tokens and styling rules:
1. **Typography & Colors (from index.css):**
   - Base Background: `#001002` (Dark theme)
   - Accent / Decor: `#10cc58` (Vibrant emerald green)
   - Text Color: `#FCFCF7` (Off-white)
   - Headings Font: `"Libre Caslon Display", serif` (`--font-primary`)
   - Body Font: `"Baskervville", serif` (`--font-secondary`)
2. **Layout & UI Constraints:**
   - **Mobile-first approach:** Must look and feel exceptionally crisp on mobile screens as well as desktop.
   - **Border Radius:** Use `rounded-md` across cards, buttons, and dropdowns.
   - **Borders:** Thin, elegant lines for every element (`1px` width, e.g., `border border-emerald-900/40` or subtle slate/green dividers).
   - **Hover Effects:** **Crucial:** Hover effects must *only* involve subtle color changes (background, border, text color), **strictly without any scale properties** (no `scale-105` or zoom transforms).
   - **Glass Effect:** Glassmorphism (`backdrop-blur-md bg-[#001002]/8` or semi-transparent dark layers with subtle borders) is a must for cards and navigation bars.
   - **Smooth Animations:** Any UI transitions must be smooth, with a duration of at least 500ms (`duration-500` / `transition-all duration-500`).

---

### 📋 Core App Features & Architecture

1. **Bilingual Support (English / Polish):**
   - Provide a clean language toggle button in the header (`EN` / `PL`).
   - All function titles, descriptions, sales use cases, table headers, mini-grid data labels, and check-up questions must be fully translated in both languages.

2. **Function Dropdown & Extensible Data Structure:**
   - A clean, drop-down selection menu or tab bar to switch between the **top 6 sales-oriented Excel functions**:
     1. `XLOOKUP` (Master-Data Matcher)
     2. `SUMIFS` (Multi-Condition Revenue Aggregator)
     3. `IFS` (Target & Tier Evaluator)
     4. `COUNTIFS` (Order Frequency & Pipeline Monitor)
     5. `SUMPRODUCT` (Weighted Average Price / ASP Calculator)
     6. `UNIQUE` (Dynamic List Generator)
   - Structure the data in a modular file (e.g., `src/data/functionsData.ts`) so that new functions can be easily added in the future.

3. **Compact Interactive Excel Mini-Grid Component (`ExcelMiniGrid`):**
   - A compact, mobile-friendly mini spreadsheet view (e.g., 3-4 columns by 4 rows) complete with Excel-style column headers (`A, B, C, D`) and row numbers (`1, 2, 3, 4`).
   - Includes a mini formula bar (`fx`) showing the formula syntax with color-coded highlights.
   - Specific cells corresponding to the formula arguments must have subtle background highlights and colored left borders matching the formula parameters so users instantly understand row/column mapping.
   - Horizontally scrollable on small mobile screens without breaking layout.

4. **Interactive Check-Up Quizzes (2 Questions per function):**
   - For each function, include 2 rapid-fire check-up questions with multiple-choice options.
   - Instant visual feedback (green banner for correct, red/subtle warning for incorrect) using local component state.
   - Trigger `canvas-confetti` when both questions are answered correctly.

---

### 📁 Required File Structure
Please generate the complete codebase with a clean, modular structure:
- `src/types/index.ts` (TypeScript interfaces for functions, questions, languages)
- `src/data/functionsData.ts` (Bilingual content for all 6 functions, including explanations, mini-grid datasets, and 2 quiz questions each)
- `src/components/Navbar.tsx` (Header with logo, function switcher dropdown, and EN/PL language toggle)
- `src/components/ExcelMiniGrid.tsx` (Compact, responsive spreadsheet component with color highlights)
- `src/components/QuizCard.tsx` (Interactive check-up exercise card with instant validation and confetti)
- `src/components/FunctionDetailView.tsx` (Main layout combining theory, mini-grid, and quiz)
- `src/App.tsx` (Main wrapper holding language and active function state)

Please write clean, modular, production-ready code with no placeholder comments, fully implementing all features adhering strictly to the design rules.