import type { ExcelFunction } from '../types';

export const excelFunctions: ExcelFunction[] = [
  // ─────────────────────────────────────────
  // 1. XLOOKUP
  // ─────────────────────────────────────────
  {
    id: 'xlookup',
    name: 'XLOOKUP',
    en: {
      title: 'XLOOKUP',
      subtitle: 'Master-Data Matcher',
      purpose:
        'Searches a range for a match and returns the corresponding value from another range. The modern, flexible replacement for VLOOKUP.',
      syntax: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])',
      paramDescriptions: [
        { param: 'lookup_value', description: 'The value you are searching for (e.g. client name, product ID).' },
        { param: 'lookup_array', description: 'The column/range to search in.' },
        { param: 'return_array', description: 'The column/range to return a value from.' },
        { param: '[if_not_found]', description: 'Optional. Text returned when no match is found, e.g. "Not found".' },
      ],
      salesUseCase:
        'Pull a client\'s contract value by their name from a CRM export. Instantly find a product\'s margin percentage from a price list using its SKU.',
      tip: 'Unlike VLOOKUP, XLOOKUP can search left-to-right OR right-to-left and returns exact matches by default — no column index headaches.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Client' }, { value: 'Revenue' }, { value: '' }, { value: 'Find Revenue for:' }] },
          { rowNum: 2, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '$120,000' }, { value: '' }, { value: 'Globex Inc', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }] },
          { rowNum: 3, cells: [{ value: 'Globex Inc', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '$95,000', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400' }, { value: '' }, { value: '', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'Initech' }, { value: '$47,000' }, { value: '' }, { value: '' }] },
        ],
        formulaBar: '=XLOOKUP(D2, A2:A4, B2:B4, "Not found")',
        formulaHighlights: [
          { text: '=XLOOKUP(', color: 'text-[#FCFCF7]' },
          { text: 'D2', color: 'text-sky-400' },
          { text: ', ', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-emerald-400' },
          { text: ', ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-amber-400' },
          { text: ', "Not found")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'xl-q1',
          question: 'You have a client list in column B and revenue in column A. Which function argument allows XLOOKUP to search right-to-left?',
          options: [
            { id: 'a', text: 'if_not_found = "N/A"' },
            { id: 'b', text: 'match_mode = 0' },
            { id: 'c', text: 'search_mode = -1' },
            { id: 'd', text: 'lookup_array = B:B, return_array = A:A' },
          ],
          correctId: 'd',
          explanation: 'XLOOKUP does not require columns to be in a specific order — just place lookup_array and return_array in the correct position regardless of physical column order.',
        },
        {
          id: 'xl-q2',
          question: 'A sales rep asks for a formula to find a product price by SKU. The SKU is in D5, the SKU list is in F2:F100, and prices are in G2:G100. Which formula is correct?',
          options: [
            { id: 'a', text: '=VLOOKUP(D5, F2:G100, 2, 0)' },
            { id: 'b', text: '=XLOOKUP(D5, F2:F100, G2:G100, "Not found")' },
            { id: 'c', text: '=XLOOKUP(F2:F100, D5, G2:G100)' },
            { id: 'd', text: '=INDEX(G2:G100, MATCH(D5, F2:F100))' },
          ],
          correctId: 'b',
          explanation: 'XLOOKUP(lookup_value, lookup_array, return_array) is the correct order. D5 is what we search, F2:F100 is where we search, G2:G100 is what we return.',
        },
      ],
    },
    pl: {
      title: 'X.WYSZUKAJ',
      subtitle: 'Mistrz Dopasowywania Danych',
      purpose:
        'Przeszukuje zakres w celu znalezienia dopasowania i zwraca odpowiednią wartość z innego zakresu. Nowoczesna i elastyczna alternatywa dla WYSZUKAJ.PIONOWO.',
      syntax: '=X.WYSZUKAJ(szukana_wartość; tablica_szukana; tablica_zwracana; [jeśli_nie_znaleziono]; [tryb_dopasowania]; [tryb_wyszukiwania])',
      paramDescriptions: [
        { param: 'szukana_wartość', description: 'Wartość, której szukasz (np. nazwa klienta, ID produktu).' },
        { param: 'tablica_szukana', description: 'Kolumna/zakres, w którym wyszukujesz.' },
        { param: 'tablica_zwracana', description: 'Kolumna/zakres, z którego chcesz zwrócić wartość.' },
        { param: '[jeśli_nie_znaleziono]', description: 'Opcjonalnie. Tekst zwracany gdy nie znaleziono dopasowania, np. "Nie znaleziono".' },
      ],
      salesUseCase:
        'Pobierz wartość kontraktu klienta po jego nazwie z eksportu CRM. Natychmiast znajdź marżę produktu na liście cenowej używając jego SKU.',
      tip: 'W przeciwieństwie do WYSZUKAJ.PIONOWO, X.WYSZUKAJ może przeszukiwać od lewej do prawej LUB od prawej do lewej i domyślnie zwraca dokładne dopasowania — bez problemów z indeksem kolumny.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Klient' }, { value: 'Przychód' }, { value: '' }, { value: 'Znajdź przychód:' }] },
          { rowNum: 2, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '120 000 zł' }, { value: '' }, { value: 'Globex Inc', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }] },
          { rowNum: 3, cells: [{ value: 'Globex Inc', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '95 000 zł', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400' }, { value: '' }, { value: '', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'Initech' }, { value: '47 000 zł' }, { value: '' }, { value: '' }] },
        ],
        formulaBar: '=X.WYSZUKAJ(D2; A2:A4; B2:B4; "Nie znaleziono")',
        formulaHighlights: [
          { text: '=X.WYSZUKAJ(', color: 'text-[#FCFCF7]' },
          { text: 'D2', color: 'text-sky-400' },
          { text: '; ', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-emerald-400' },
          { text: '; ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-amber-400' },
          { text: '; "Nie znaleziono")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'xl-q1',
          question: 'Masz listę klientów w kolumnie B i przychody w kolumnie A. Który argument pozwala X.WYSZUKAJ wyszukiwać od prawej do lewej?',
          options: [
            { id: 'a', text: 'jeśli_nie_znaleziono = "Brak"' },
            { id: 'b', text: 'tryb_dopasowania = 0' },
            { id: 'c', text: 'tryb_wyszukiwania = -1' },
            { id: 'd', text: 'tablica_szukana = B:B, tablica_zwracana = A:A' },
          ],
          correctId: 'd',
          explanation: 'X.WYSZUKAJ nie wymaga określonej kolejności kolumn — wystarczy podać poprawne zakresy jako tablica_szukana i tablica_zwracana niezależnie od ich fizycznej pozycji.',
        },
        {
          id: 'xl-q2',
          question: 'Handlowiec prosi o formułę wyszukującą cenę produktu po SKU. SKU jest w D5, lista SKU w F2:F100, a ceny w G2:G100. Która formuła jest poprawna?',
          options: [
            { id: 'a', text: '=WYSZUKAJ.PIONOWO(D5; F2:G100; 2; 0)' },
            { id: 'b', text: '=X.WYSZUKAJ(D5; F2:F100; G2:G100; "Nie znaleziono")' },
            { id: 'c', text: '=X.WYSZUKAJ(F2:F100; D5; G2:G100)' },
            { id: 'd', text: '=INDEKS(G2:G100; PODAJ.POZYCJĘ(D5; F2:F100))' },
          ],
          correctId: 'b',
          explanation: 'X.WYSZUKAJ(szukana_wartość; tablica_szukana; tablica_zwracana) to poprawna kolejność. D5 to to, czego szukamy, F2:F100 gdzie szukamy, G2:G100 co zwracamy.',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // 2. SUMIFS
  // ─────────────────────────────────────────
  {
    id: 'sumifs',
    name: 'SUMIFS',
    en: {
      title: 'SUMIFS',
      subtitle: 'Multi-Condition Revenue Aggregator',
      purpose:
        'Sums values that meet multiple criteria simultaneously. Essential for slicing revenue data by region, product, rep, or time period.',
      syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
      paramDescriptions: [
        { param: 'sum_range', description: 'The range of cells to sum (e.g. Revenue column).' },
        { param: 'criteria_range1', description: 'The first column to filter by (e.g. Region).' },
        { param: 'criteria1', description: 'The value to match in criteria_range1 (e.g. "North").' },
        { param: 'criteria_range2 / criteria2', description: 'Additional optional filter pairs.' },
      ],
      salesUseCase:
        'Total Q1 revenue for the North region from rep "Smith". Calculate revenue for product category "SaaS" closed above $10,000.',
      tip: 'You can use wildcards: "*" matches any string, "?" matches a single character. Combine with "<", ">", ">=" for numeric conditions.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Region' }, { value: 'Rep' }, { value: 'Revenue' }, { value: 'Result' }] },
          { rowNum: 2, cells: [{ value: 'North', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Smith', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '$45,000', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'South' }, { value: 'Jones' }, { value: '$30,000' }, { value: '$87,000', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'North', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Smith', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '$42,000', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '' }] },
        ],
        formulaBar: '=SUMIFS(C2:C4, A2:A4, "North", B2:B4, "Smith")',
        formulaHighlights: [
          { text: '=SUMIFS(', color: 'text-[#FCFCF7]' },
          { text: 'C2:C4', color: 'text-emerald-400' },
          { text: ', ', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-sky-400' },
          { text: ', "North", ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-violet-400' },
          { text: ', "Smith")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'si-q1',
          question: 'What is the key difference between SUMIF and SUMIFS?',
          options: [
            { id: 'a', text: 'SUMIFS can sum multiple ranges at once' },
            { id: 'b', text: 'SUMIFS supports multiple criteria ranges, SUMIF supports only one' },
            { id: 'c', text: 'SUMIF is faster and more memory-efficient' },
            { id: 'd', text: 'SUMIFS requires sorted data' },
          ],
          correctId: 'b',
          explanation: 'SUMIFS allows you to specify multiple criteria_range/criteria pairs, making it perfect for multi-dimensional filtering like region + rep + period.',
        },
        {
          id: 'si-q2',
          question: 'Revenue is in column D, product category in column B, and deal size in column C. Which formula sums SaaS deals above $10,000?',
          options: [
            { id: 'a', text: '=SUMIFS(D:D, B:B, "SaaS", C:C, ">10000")' },
            { id: 'b', text: '=SUMIF(D:D, B:B, "SaaS")' },
            { id: 'c', text: '=SUMIFS(B:B, "SaaS", C:C, ">10000", D:D)' },
            { id: 'd', text: '=SUMPRODUCT((B:B="SaaS")*(C:C>10000)*D:D)' },
          ],
          correctId: 'a',
          explanation: 'SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2) — D:D is summed when B:B="SaaS" AND C:C>10000.',
        },
      ],
    },
    pl: {
      title: 'SUMA.WARUNKÓW',
      subtitle: 'Agregator Przychodów z Wieloma Warunkami',
      purpose:
        'Sumuje wartości spełniające jednocześnie wiele kryteriów. Niezbędna do analizy przychodów według regionu, produktu, handlowca lub okresu.',
      syntax: '=SUMA.WARUNKÓW(zakres_sumowania; zakres_kryteriów1; kryterium1; [zakres_kryteriów2; kryterium2]; ...)',
      paramDescriptions: [
        { param: 'zakres_sumowania', description: 'Zakres komórek do zsumowania (np. kolumna Przychód).' },
        { param: 'zakres_kryteriów1', description: 'Pierwsza kolumna filtrowania (np. Region).' },
        { param: 'kryterium1', description: 'Wartość do dopasowania w zakresie_kryteriów1 (np. "Północ").' },
        { param: 'zakres_kryteriów2 / kryterium2', description: 'Dodatkowe opcjonalne pary filtrów.' },
      ],
      salesUseCase:
        'Zsumuj przychody Q1 dla regionu Północ od handlowca "Kowalski". Oblicz przychód dla kategorii produktu "SaaS" zamkniętego powyżej 10 000 zł.',
      tip: 'Możesz używać symboli wieloznacznych: "*" pasuje do dowolnego ciągu, "?" do pojedynczego znaku. Łącz z "<", ">", ">=" dla warunków numerycznych.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Region' }, { value: 'Handlowiec' }, { value: 'Przychód' }, { value: 'Wynik' }] },
          { rowNum: 2, cells: [{ value: 'Północ', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Kowalski', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '45 000 zł', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Południe' }, { value: 'Nowak' }, { value: '30 000 zł' }, { value: '87 000 zł', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'Północ', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Kowalski', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '42 000 zł', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: '' }] },
        ],
        formulaBar: '=SUMA.WARUNKÓW(C2:C4; A2:A4; "Północ"; B2:B4; "Kowalski")',
        formulaHighlights: [
          { text: '=SUMA.WARUNKÓW(', color: 'text-[#FCFCF7]' },
          { text: 'C2:C4', color: 'text-emerald-400' },
          { text: '; ', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-sky-400' },
          { text: '; "Północ"; ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-violet-400' },
          { text: '; "Kowalski")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'si-q1',
          question: 'Jaka jest kluczowa różnica między SUMA.JEŻELI a SUMA.WARUNKÓW?',
          options: [
            { id: 'a', text: 'SUMA.WARUNKÓW może sumować wiele zakresów jednocześnie' },
            { id: 'b', text: 'SUMA.WARUNKÓW obsługuje wiele zakresów kryteriów, SUMA.JEŻELI tylko jeden' },
            { id: 'c', text: 'SUMA.JEŻELI jest szybsza i bardziej wydajna pamięciowo' },
            { id: 'd', text: 'SUMA.WARUNKÓW wymaga posortowanych danych' },
          ],
          correctId: 'b',
          explanation: 'SUMA.WARUNKÓW pozwala podać wiele par zakres_kryteriów/kryterium, co jest idealne do wielowymiarowego filtrowania jak region + handlowiec + okres.',
        },
        {
          id: 'si-q2',
          question: 'Przychód jest w kolumnie D, kategoria produktu w B, a wielkość transakcji w C. Która formuła sumuje transakcje SaaS powyżej 10 000?',
          options: [
            { id: 'a', text: '=SUMA.WARUNKÓW(D:D; B:B; "SaaS"; C:C; ">10000")' },
            { id: 'b', text: '=SUMA.JEŻELI(D:D; B:B; "SaaS")' },
            { id: 'c', text: '=SUMA.WARUNKÓW(B:B; "SaaS"; C:C; ">10000"; D:D)' },
            { id: 'd', text: '=SUMA.ILOCZYNÓW((B:B="SaaS")*(C:C>10000)*D:D)' },
          ],
          correctId: 'a',
          explanation: 'SUMA.WARUNKÓW(zakres_sumowania; zakres_kryteriów1; kryterium1; zakres_kryteriów2; kryterium2) — D:D jest sumowane gdy B:B="SaaS" ORAZ C:C>10000.',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // 3. IFS
  // ─────────────────────────────────────────
  {
    id: 'ifs',
    name: 'IFS',
    en: {
      title: 'IFS',
      subtitle: 'Target & Tier Evaluator',
      purpose:
        'Checks multiple conditions sequentially and returns the value for the first true condition. Replaces nested IF statements for tiered logic.',
      syntax: '=IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)',
      paramDescriptions: [
        { param: 'logical_test1', description: 'The first condition to check (e.g. A2>=90%).' },
        { param: 'value_if_true1', description: 'Value returned if logical_test1 is TRUE.' },
        { param: 'logical_test2 / value_if_true2', description: 'Additional condition/value pairs.' },
      ],
      salesUseCase:
        'Automatically assign commission tiers (Bronze / Silver / Gold / Platinum) based on % target achieved. Label deal health (Hot / Warm / Cold) based on close probability.',
      tip: 'Always end with TRUE as the last condition to serve as a catch-all default (like an ELSE clause), preventing #N/A errors.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Rep' }, { value: '% Target' }, { value: 'Tier' }, { value: '' }] },
          { rowNum: 2, cells: [{ value: 'Smith' }, { value: '95%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Gold', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Jones' }, { value: '72%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Silver', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400', isFormula: true }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Lee' }, { value: '45%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Bronze', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
        ],
        formulaBar: '=IFS(B2>=90%,"Gold",B2>=70%,"Silver",B2>=50%,"Bronze",TRUE,"Below")',
        formulaHighlights: [
          { text: '=IFS(', color: 'text-[#FCFCF7]' },
          { text: 'B2>=90%', color: 'text-sky-400' },
          { text: ', "Gold", ', color: 'text-[#FCFCF7]' },
          { text: 'B2>=70%', color: 'text-sky-400' },
          { text: ', "Silver", ', color: 'text-[#FCFCF7]' },
          { text: 'B2>=50%', color: 'text-sky-400' },
          { text: ', "Bronze", TRUE, "Below")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'ifs-q1',
          question: 'What happens in IFS if none of the conditions are TRUE and there is no TRUE fallback?',
          options: [
            { id: 'a', text: 'It returns 0' },
            { id: 'b', text: 'It returns an empty cell' },
            { id: 'c', text: 'It returns a #N/A error' },
            { id: 'd', text: 'It returns FALSE' },
          ],
          correctId: 'c',
          explanation: 'Without a TRUE fallback clause, IFS returns #N/A when no condition matches. Always add TRUE, "default_value" as the last pair.',
        },
        {
          id: 'ifs-q2',
          question: 'A rep scored 68% of target. Using =IFS(A1>=90%,"Platinum",A1>=80%,"Gold",A1>=70%,"Silver",TRUE,"Bronze"), what is returned?',
          options: [
            { id: 'a', text: 'Gold' },
            { id: 'b', text: 'Silver' },
            { id: 'c', text: 'Bronze' },
            { id: 'd', text: '#N/A' },
          ],
          correctId: 'c',
          explanation: '68% is below 70%, so the first three conditions are false. The TRUE fallback triggers, returning "Bronze".',
        },
      ],
    },
    pl: {
      title: 'WARUNKI',
      subtitle: 'Ewaluator Celów i Poziomów',
      purpose:
        'Sprawdza wiele warunków sekwencyjnie i zwraca wartość dla pierwszego prawdziwego warunku. Zastępuje zagnieżdżone funkcje JEŻELI w logice wielopoziomowej.',
      syntax: '=WARUNKI(test_logiczny1; wartość_jeśli_prawda1; [test_logiczny2; wartość_jeśli_prawda2]; ...)',
      paramDescriptions: [
        { param: 'test_logiczny1', description: 'Pierwszy warunek do sprawdzenia (np. A2>=90%).' },
        { param: 'wartość_jeśli_prawda1', description: 'Wartość zwracana gdy test_logiczny1 jest PRAWDĄ.' },
        { param: 'test_logiczny2 / wartość_jeśli_prawda2', description: 'Dodatkowe pary warunek/wartość.' },
      ],
      salesUseCase:
        'Automatycznie przypisuj poziomy prowizji (Brąz / Srebro / Złoto / Platyna) na podstawie % realizacji celu. Oznaczaj kondycję transakcji (Gorący / Ciepły / Zimny) na podstawie prawdopodobieństwa zamknięcia.',
      tip: 'Zawsze kończ na PRAWDA jako ostatnim warunku — będzie domyślnym wynikiem (jak klauzula ELSE), zapobiegając błędom #N/A.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Handlowiec' }, { value: '% Celu' }, { value: 'Poziom' }, { value: '' }] },
          { rowNum: 2, cells: [{ value: 'Kowalski' }, { value: '95%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Złoto', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Nowak' }, { value: '72%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Srebro', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400', isFormula: true }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Wiśniewska' }, { value: '45%', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Brąz', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
        ],
        formulaBar: '=WARUNKI(B2>=90%;"Złoto";B2>=70%;"Srebro";B2>=50%;"Brąz";PRAWDA;"Poniżej")',
        formulaHighlights: [
          { text: '=WARUNKI(', color: 'text-[#FCFCF7]' },
          { text: 'B2>=90%', color: 'text-sky-400' },
          { text: '; "Złoto"; ', color: 'text-[#FCFCF7]' },
          { text: 'B2>=70%', color: 'text-sky-400' },
          { text: '; "Srebro"; ', color: 'text-[#FCFCF7]' },
          { text: 'B2>=50%', color: 'text-sky-400' },
          { text: '; "Brąz"; PRAWDA; "Poniżej")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'ifs-q1',
          question: 'Co zwraca WARUNKI gdy żaden z warunków nie jest PRAWDĄ i nie ma warunku PRAWDA jako zapasowego?',
          options: [
            { id: 'a', text: 'Zwraca 0' },
            { id: 'b', text: 'Zwraca pustą komórkę' },
            { id: 'c', text: 'Zwraca błąd #N/A' },
            { id: 'd', text: 'Zwraca FAŁSZ' },
          ],
          correctId: 'c',
          explanation: 'Bez klauzuli zapasowej PRAWDA, funkcja WARUNKI zwraca błąd #N/A gdy żaden warunek nie jest spełniony. Zawsze dodawaj PRAWDA; "wartość_domyślna" jako ostatnią parę.',
        },
        {
          id: 'ifs-q2',
          question: 'Handlowiec osiągnął 68% celu. Używając =WARUNKI(A1>=90%;"Platyna";A1>=80%;"Złoto";A1>=70%;"Srebro";PRAWDA;"Brąz"), co zostanie zwrócone?',
          options: [
            { id: 'a', text: 'Złoto' },
            { id: 'b', text: 'Srebro' },
            { id: 'c', text: 'Brąz' },
            { id: 'd', text: '#N/A' },
          ],
          correctId: 'c',
          explanation: '68% jest poniżej 70%, więc pierwsze trzy warunki są fałszywe. Uruchamia się zapasowy warunek PRAWDA, zwracając "Brąz".',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // 4. COUNTIFS
  // ─────────────────────────────────────────
  {
    id: 'countifs',
    name: 'COUNTIFS',
    en: {
      title: 'COUNTIFS',
      subtitle: 'Order Frequency & Pipeline Monitor',
      purpose:
        'Counts the number of cells that meet multiple criteria. Use it to track how many deals, orders, or interactions match specific conditions.',
      syntax: '=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
      paramDescriptions: [
        { param: 'criteria_range1', description: 'The first range to evaluate (e.g. Stage column).' },
        { param: 'criteria1', description: 'The condition to match in criteria_range1 (e.g. "Closed Won").' },
        { param: 'criteria_range2 / criteria2', description: 'Additional optional filter pairs.' },
      ],
      salesUseCase:
        'Count "Closed Won" deals in Q3 for the East region. Monitor how many pipeline deals are above $50K for a specific rep.',
      tip: 'Use date criteria with ">=" & DATE() or text references like ">="&E1 to build dynamic dashboards that update automatically.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Stage' }, { value: 'Region' }, { value: 'Value' }, { value: 'Count' }] },
          { rowNum: 2, cells: [{ value: 'Closed Won', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: 'East', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '$60,000' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Proposal' }, { value: 'East' }, { value: '$30,000' }, { value: '2', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'Closed Won', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: 'East', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '$42,000' }, { value: '' }] },
        ],
        formulaBar: '=COUNTIFS(A2:A4, "Closed Won", B2:B4, "East")',
        formulaHighlights: [
          { text: '=COUNTIFS(', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-emerald-400' },
          { text: ', "Closed Won", ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-sky-400' },
          { text: ', "East")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'ci-q1',
          question: 'A pipeline has 50 deals. Stage is in column A, deal value in column B. Which formula counts deals in "Negotiation" above $25,000?',
          options: [
            { id: 'a', text: '=COUNTIF(A:A, "Negotiation")' },
            { id: 'b', text: '=COUNTIFS(A:A, "Negotiation", B:B, ">25000")' },
            { id: 'c', text: '=SUMIFS(B:B, A:A, "Negotiation", B:B, ">25000")' },
            { id: 'd', text: '=COUNT(A:A, "Negotiation", B:B, ">25000")' },
          ],
          correctId: 'b',
          explanation: 'COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2) counts rows matching ALL conditions — stage = Negotiation AND value > 25000.',
        },
        {
          id: 'ci-q2',
          question: 'Which wildcard counts all deals whose stage starts with "Close"?',
          options: [
            { id: 'a', text: '"Close*"' },
            { id: 'b', text: '"*Close"' },
            { id: 'c', text: '"?Close?"' },
            { id: 'd', text: '"Close?"' },
          ],
          correctId: 'a',
          explanation: '"Close*" matches any text that starts with "Close", such as "Closed Won" or "Closed Lost". The * wildcard replaces any sequence of characters.',
        },
      ],
    },
    pl: {
      title: 'LICZ.WARUNKI',
      subtitle: 'Monitor Częstości Zamówień i Pipeline\'u',
      purpose:
        'Liczy komórki spełniające wiele kryteriów. Użyj do śledzenia liczby transakcji, zamówień lub interakcji pasujących do określonych warunków.',
      syntax: '=LICZ.WARUNKI(zakres_kryteriów1; kryterium1; [zakres_kryteriów2; kryterium2]; ...)',
      paramDescriptions: [
        { param: 'zakres_kryteriów1', description: 'Pierwszy zakres do oceny (np. kolumna Etap).' },
        { param: 'kryterium1', description: 'Warunek do dopasowania w zakresie_kryteriów1 (np. "Zamknięta wygrana").' },
        { param: 'zakres_kryteriów2 / kryterium2', description: 'Dodatkowe opcjonalne pary filtrów.' },
      ],
      salesUseCase:
        'Policz transakcje "Zamknięta wygrana" w Q3 dla regionu Wschód. Monitoruj ile transakcji w pipeline przekracza 50 000 zł dla konkretnego handlowca.',
      tip: 'Używaj dat jako kryteriów z ">=" & DATA() lub odwołaniami do komórek jak ">="&E1, aby budować dynamiczne dashboardy aktualizujące się automatycznie.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Etap' }, { value: 'Region' }, { value: 'Wartość' }, { value: 'Liczba' }] },
          { rowNum: 2, cells: [{ value: 'Zamkn. wygr.', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: 'Wschód', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '60 000 zł' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Oferta' }, { value: 'Wschód' }, { value: '30 000 zł' }, { value: '2', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
          { rowNum: 4, cells: [{ value: 'Zamkn. wygr.', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400' }, { value: 'Wschód', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '42 000 zł' }, { value: '' }] },
        ],
        formulaBar: '=LICZ.WARUNKI(A2:A4; "Zamkn. wygr."; B2:B4; "Wschód")',
        formulaHighlights: [
          { text: '=LICZ.WARUNKI(', color: 'text-[#FCFCF7]' },
          { text: 'A2:A4', color: 'text-emerald-400' },
          { text: '; "Zamkn. wygr."; ', color: 'text-[#FCFCF7]' },
          { text: 'B2:B4', color: 'text-sky-400' },
          { text: '; "Wschód")', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'ci-q1',
          question: 'Pipeline ma 50 transakcji. Etap jest w kolumnie A, wartość transakcji w B. Która formuła liczy transakcje "Negocjacje" powyżej 25 000?',
          options: [
            { id: 'a', text: '=LICZ.JEŻELI(A:A; "Negocjacje")' },
            { id: 'b', text: '=LICZ.WARUNKI(A:A; "Negocjacje"; B:B; ">25000")' },
            { id: 'c', text: '=SUMA.WARUNKÓW(B:B; A:A; "Negocjacje"; B:B; ">25000")' },
            { id: 'd', text: '=ILE.LICZB(A:A; "Negocjacje"; B:B; ">25000")' },
          ],
          correctId: 'b',
          explanation: 'LICZ.WARUNKI(zakres_kryteriów1; kryterium1; zakres_kryteriów2; kryterium2) liczy wiersze spełniające WSZYSTKIE warunki — etap = Negocjacje I wartość > 25000.',
        },
        {
          id: 'ci-q2',
          question: 'Który symbol wieloznaczny liczy transakcje, których etap zaczyna się od "Zamkn"?',
          options: [
            { id: 'a', text: '"Zamkn*"' },
            { id: 'b', text: '"*Zamkn"' },
            { id: 'c', text: '"?Zamkn?"' },
            { id: 'd', text: '"Zamkn?"' },
          ],
          correctId: 'a',
          explanation: '"Zamkn*" pasuje do każdego tekstu zaczynającego się od "Zamkn", np. "Zamknięta wygrana" lub "Zamknięta przegrana". Symbol * zastępuje dowolny ciąg znaków.',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // 5. SUMPRODUCT
  // ─────────────────────────────────────────
  {
    id: 'sumproduct',
    name: 'SUMPRODUCT',
    en: {
      title: 'SUMPRODUCT',
      subtitle: 'Weighted Average Price / ASP Calculator',
      purpose:
        'Multiplies corresponding elements in arrays, then sums the result. Perfect for weighted averages, revenue weighting, and conditional sums without helper columns.',
      syntax: '=SUMPRODUCT(array1, [array2], [array3], ...)',
      paramDescriptions: [
        { param: 'array1', description: 'First array to multiply (e.g. Quantity column).' },
        { param: 'array2', description: 'Second array to multiply element-by-element (e.g. Price column).' },
        { param: 'array3+', description: 'Additional arrays for more complex calculations (e.g. conditional boolean arrays).' },
      ],
      salesUseCase:
        'Calculate the average selling price (ASP) across all deals weighted by units sold. Compute total weighted revenue without needing a helper column.',
      tip: 'Use double negation (--) to convert TRUE/FALSE arrays to 1/0 for conditional SUMPRODUCT: =SUMPRODUCT(--(A2:A10="North"), B2:B10)',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Product' }, { value: 'Units', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Price', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: 'Revenue' }] },
          { rowNum: 2, cells: [{ value: 'Widget A' }, { value: '200', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '$15', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Widget B' }, { value: '150', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '$25', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Total' }, { value: '' }, { value: '' }, { value: '$6,750', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
        ],
        formulaBar: '=SUMPRODUCT(B2:B3, C2:C3)',
        formulaHighlights: [
          { text: '=SUMPRODUCT(', color: 'text-[#FCFCF7]' },
          { text: 'B2:B3', color: 'text-sky-400' },
          { text: ', ', color: 'text-[#FCFCF7]' },
          { text: 'C2:C3', color: 'text-violet-400' },
          { text: ')', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'sp-q1',
          question: 'What does =SUMPRODUCT(B2:B5, C2:C5) calculate when B contains units and C contains prices?',
          options: [
            { id: 'a', text: 'The sum of all units plus all prices' },
            { id: 'b', text: 'The average price across products' },
            { id: 'c', text: 'The total revenue (sum of unit × price per row)' },
            { id: 'd', text: 'The number of products' },
          ],
          correctId: 'c',
          explanation: 'SUMPRODUCT multiplies B2×C2, B3×C3, B4×C4, B5×C5 and sums the results — exactly like a total revenue calculation across all products.',
        },
        {
          id: 'sp-q2',
          question: 'How do you use SUMPRODUCT to sum revenue (column C) only for the "North" region (column A)?',
          options: [
            { id: 'a', text: '=SUMPRODUCT(A2:A10="North", C2:C10)' },
            { id: 'b', text: '=SUMPRODUCT(--(A2:A10="North"), C2:C10)' },
            { id: 'c', text: '=SUMPRODUCT(C2:C10, IF(A2:A10="North",1,0))' },
            { id: 'd', text: 'Both B and C are correct' },
          ],
          correctId: 'd',
          explanation: 'Both work: double negation (--) converts TRUE/FALSE to 1/0, and IF(condition,1,0) achieves the same. Both are valid conditional SUMPRODUCT patterns.',
        },
      ],
    },
    pl: {
      title: 'SUMA.ILOCZYNÓW',
      subtitle: 'Kalkulator Średniej Ceny Sprzedaży / ASP',
      purpose:
        'Mnoży odpowiadające sobie elementy tablic, a następnie sumuje wyniki. Idealne do średnich ważonych, ważenia przychodów i sum warunkowych bez kolumn pomocniczych.',
      syntax: '=SUMA.ILOCZYNÓW(tablica1; [tablica2]; [tablica3]; ...)',
      paramDescriptions: [
        { param: 'tablica1', description: 'Pierwsza tablica do mnożenia (np. kolumna Ilość).' },
        { param: 'tablica2', description: 'Druga tablica do mnożenia element po elemencie (np. kolumna Cena).' },
        { param: 'tablica3+', description: 'Dodatkowe tablice do bardziej złożonych obliczeń (np. tablice warunkowe).' },
      ],
      salesUseCase:
        'Oblicz średnią cenę sprzedaży (ASP) dla wszystkich transakcji ważoną sprzedanymi jednostkami. Oblicz łączny ważony przychód bez kolumny pomocniczej.',
      tip: 'Użyj podwójnej negacji (--) do konwersji tablic PRAWDA/FAŁSZ na 1/0 dla warunkowego SUMA.ILOCZYNÓW: =SUMA.ILOCZYNÓW(--(A2:A10="Północ"); B2:B10)',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Produkt' }, { value: 'Ilość', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: 'Cena', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: 'Przychód' }] },
          { rowNum: 2, cells: [{ value: 'Widget A' }, { value: '200', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '15 zł', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Widget B' }, { value: '150', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '25 zł', highlight: true, highlightColor: 'violet', borderColor: 'border-l-violet-400' }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Razem' }, { value: '' }, { value: '' }, { value: '6 750 zł', highlight: true, highlightColor: 'amber', borderColor: 'border-l-amber-400', isFormula: true }] },
        ],
        formulaBar: '=SUMA.ILOCZYNÓW(B2:B3; C2:C3)',
        formulaHighlights: [
          { text: '=SUMA.ILOCZYNÓW(', color: 'text-[#FCFCF7]' },
          { text: 'B2:B3', color: 'text-sky-400' },
          { text: '; ', color: 'text-[#FCFCF7]' },
          { text: 'C2:C3', color: 'text-violet-400' },
          { text: ')', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'sp-q1',
          question: 'Co oblicza =SUMA.ILOCZYNÓW(B2:B5; C2:C5) gdy B zawiera ilości, a C ceny?',
          options: [
            { id: 'a', text: 'Sumę wszystkich ilości i cen' },
            { id: 'b', text: 'Średnią cenę wszystkich produktów' },
            { id: 'c', text: 'Łączny przychód (suma ilość × cena dla każdego wiersza)' },
            { id: 'd', text: 'Liczbę produktów' },
          ],
          correctId: 'c',
          explanation: 'SUMA.ILOCZYNÓW mnoży B2×C2, B3×C3, B4×C4, B5×C5 i sumuje wyniki — dokładnie jak obliczanie łącznego przychodu dla wszystkich produktów.',
        },
        {
          id: 'sp-q2',
          question: 'Jak użyć SUMA.ILOCZYNÓW do zsumowania przychodu (kolumna C) tylko dla regionu "Północ" (kolumna A)?',
          options: [
            { id: 'a', text: '=SUMA.ILOCZYNÓW(A2:A10="Północ"; C2:C10)' },
            { id: 'b', text: '=SUMA.ILOCZYNÓW(--(A2:A10="Północ"); C2:C10)' },
            { id: 'c', text: '=SUMA.ILOCZYNÓW(C2:C10; JEŻELI(A2:A10="Północ";1;0))' },
            { id: 'd', text: 'Zarówno B jak i C są poprawne' },
          ],
          correctId: 'd',
          explanation: 'Obie metody działają: podwójna negacja (--) konwertuje PRAWDA/FAŁSZ na 1/0, a JEŻELI(warunek;1;0) osiąga to samo. Oba są prawidłowymi wzorcami warunkowego SUMA.ILOCZYNÓW.',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // 6. UNIQUE
  // ─────────────────────────────────────────
  {
    id: 'unique',
    name: 'UNIQUE',
    en: {
      title: 'UNIQUE',
      subtitle: 'Dynamic List Generator',
      purpose:
        'Returns a list of unique values from a range, automatically spilling results into adjacent cells. Essential for building dynamic dropdowns and deduplicating CRM data.',
      syntax: '=UNIQUE(array, [by_col], [exactly_once])',
      paramDescriptions: [
        { param: 'array', description: 'The range or array to extract unique values from.' },
        { param: '[by_col]', description: 'Optional. FALSE (default) = unique rows. TRUE = unique columns.' },
        { param: '[exactly_once]', description: 'Optional. TRUE = return items that appear exactly once. FALSE (default) = all unique values.' },
      ],
      salesUseCase:
        'Generate a deduplicated list of all clients in a CRM export for use in a dropdown filter. Extract all unique product categories from a sales order report.',
      tip: 'Combine with SORT: =SORT(UNIQUE(A2:A100)) to get a clean, alphabetically ordered unique list in one formula.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Raw Clients', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Unique List' }, { value: '' }] },
          { rowNum: 2, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Acme Corp', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Globex Inc', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Globex Inc', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Initech', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
        ],
        formulaBar: '=UNIQUE(A2:A5)',
        formulaHighlights: [
          { text: '=UNIQUE(', color: 'text-[#FCFCF7]' },
          { text: 'A2:A5', color: 'text-sky-400' },
          { text: ')', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'uq-q1',
          question: 'A client list in A2:A500 has many duplicates. Which formula gives you a sorted, deduplicated client list?',
          options: [
            { id: 'a', text: '=UNIQUE(SORT(A2:A500))' },
            { id: 'b', text: '=SORT(UNIQUE(A2:A500))' },
            { id: 'c', text: '=FILTER(UNIQUE(A2:A500), A2:A500<>"")' },
            { id: 'd', text: '=DISTINCT(SORT(A2:A500))' },
          ],
          correctId: 'b',
          explanation: '=SORT(UNIQUE(A2:A500)) first extracts unique values, then sorts them alphabetically. UNIQUE should be the inner function since SORT operates on the de-duplicated output.',
        },
        {
          id: 'uq-q2',
          question: 'What does the "exactly_once" parameter (3rd argument = TRUE) do in UNIQUE?',
          options: [
            { id: 'a', text: 'Returns only values that appear more than once' },
            { id: 'b', text: 'Returns only values that appear exactly one time in the source list' },
            { id: 'c', text: 'Sorts the output alphabetically' },
            { id: 'd', text: 'Removes blank cells from the output' },
          ],
          correctId: 'b',
          explanation: 'When exactly_once = TRUE, UNIQUE returns only values that appear exactly once in the source — useful for finding items without duplicates, like one-time buyers.',
        },
      ],
    },
    pl: {
      title: 'UNIKATOWE',
      subtitle: 'Generator Dynamicznych List',
      purpose:
        'Zwraca listę unikalnych wartości z zakresu, automatycznie rozlewając wyniki do sąsiednich komórek. Niezbędna do budowania dynamicznych list rozwijanych i deduplikacji danych CRM.',
      syntax: '=UNIKATOWE(tablica; [wg_kolumny]; [dokładnie_raz])',
      paramDescriptions: [
        { param: 'tablica', description: 'Zakres lub tablica, z której wyodrębniane są unikalne wartości.' },
        { param: '[wg_kolumny]', description: 'Opcjonalnie. FAŁSZ (domyślnie) = unikalne wiersze. PRAWDA = unikalne kolumny.' },
        { param: '[dokładnie_raz]', description: 'Opcjonalnie. PRAWDA = zwróć elementy pojawiające się dokładnie raz. FAŁSZ (domyślnie) = wszystkie unikalne wartości.' },
      ],
      salesUseCase:
        'Wygeneruj zdeduplikowaną listę wszystkich klientów z eksportu CRM do użycia w filtrze rozwijającym. Wyodrębnij wszystkie unikalne kategorie produktów z raportu sprzedaży.',
      tip: 'Połącz z SORTUJ: =SORTUJ(UNIKATOWE(A2:A100)) aby uzyskać czystą, alfabetycznie posortowaną listę unikalną w jednej formule.',
      miniGrid: {
        columns: ['A', 'B', 'C', 'D'],
        rows: [
          { rowNum: 1, cells: [{ value: 'Surowi klienci', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Lista unikalna' }, { value: '' }] },
          { rowNum: 2, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Acme Corp', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
          { rowNum: 3, cells: [{ value: 'Globex Inc', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Globex Inc', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
          { rowNum: 4, cells: [{ value: 'Acme Corp', highlight: true, highlightColor: 'sky', borderColor: 'border-l-sky-400' }, { value: '' }, { value: 'Initech', highlight: true, highlightColor: 'emerald', borderColor: 'border-l-emerald-400', isFormula: true }, { value: '' }] },
        ],
        formulaBar: '=UNIKATOWE(A2:A5)',
        formulaHighlights: [
          { text: '=UNIKATOWE(', color: 'text-[#FCFCF7]' },
          { text: 'A2:A5', color: 'text-sky-400' },
          { text: ')', color: 'text-[#FCFCF7]' },
        ],
      },
      questions: [
        {
          id: 'uq-q1',
          question: 'Lista klientów w A2:A500 ma wiele duplikatów. Która formuła da posortowaną, zdeduplikowaną listę klientów?',
          options: [
            { id: 'a', text: '=UNIKATOWE(SORTUJ(A2:A500))' },
            { id: 'b', text: '=SORTUJ(UNIKATOWE(A2:A500))' },
            { id: 'c', text: '=FILTRUJ(UNIKATOWE(A2:A500); A2:A500<>"")' },
            { id: 'd', text: '=DISTINCT(SORTUJ(A2:A500))' },
          ],
          correctId: 'b',
          explanation: '=SORTUJ(UNIKATOWE(A2:A500)) najpierw wyodrębnia unikalne wartości, a następnie sortuje je alfabetycznie. UNIKATOWE powinno być funkcją wewnętrzną, ponieważ SORTUJ działa na zdeduplikowanym wyniku.',
        },
        {
          id: 'uq-q2',
          question: 'Co robi parametr "dokładnie_raz" (3. argument = PRAWDA) w UNIKATOWE?',
          options: [
            { id: 'a', text: 'Zwraca tylko wartości pojawiające się więcej niż raz' },
            { id: 'b', text: 'Zwraca tylko wartości pojawiające się dokładnie jeden raz na liście źródłowej' },
            { id: 'c', text: 'Sortuje wynik alfabetycznie' },
            { id: 'd', text: 'Usuwa puste komórki z wyników' },
          ],
          correctId: 'b',
          explanation: 'Gdy dokładnie_raz = PRAWDA, UNIKATOWE zwraca tylko wartości pojawiające się dokładnie raz w źródle — przydatne do znajdowania elementów bez duplikatów, np. jednorazowych nabywców.',
        },
      ],
    },
  },
];
