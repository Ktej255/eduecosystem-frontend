export interface FormulaTopic {
    id: string;
    topic: string; // e.g., "Number System", "Time & Work"
    category: 'Quant' | 'Reasoning';
    formulas: {
        title: string;
        expression: string; // The formula itself
        note?: string; // Quick tip or example
    }[];
}

export const CSAT_FORMULAS_DATA: FormulaTopic[] = [
    // --- QUANTITATIVE APTITUDE ---
    {
        id: 'number-system',
        topic: "Number System",
        category: 'Quant',
        formulas: [
            {
                title: "Sum of first n natural numbers",
                expression: "n(n + 1) / 2"
            },
            {
                title: "Sum of squares of first n natural numbers",
                expression: "n(n + 1)(2n + 1) / 6"
            },
            {
                title: "Remington Theorem (Divisibility)",
                expression: "Dividend = (Divisor × Quotient) + Remainder",
                note: "Remainder is always less than Divisor."
            }
        ]
    },
    {
        id: 'percentage',
        topic: "Percentage & Profit/Loss",
        category: 'Quant',
        formulas: [
            {
                title: "Percentage Change",
                expression: "[(Final Value - Initial Value) / Initial Value] × 100"
            },
            {
                title: "Successive Percentage Change (A% then B%)",
                expression: "A + B + (AB/100)",
                note: "Use signs: + for increase, - for decrease."
            },
            {
                title: "Profit %",
                expression: "(Profit / Cost Price) × 100"
            }
        ]
    },
    {
        id: 'time-speed-distance',
        topic: "Time, Speed & Distance",
        category: 'Quant',
        formulas: [
            {
                title: "Basic Relation",
                expression: "Distance = Speed × Time"
            },
            {
                title: "Average Speed (Equal Distances)",
                expression: "2xy / (x + y)",
                note: "Where x and y are two speeds for the same distance."
            },
            {
                title: "Relative Speed (Opposite Direction)",
                expression: "S1 + S2"
            },
            {
                title: "Relative Speed (Same Direction)",
                expression: "|S1 - S2|"
            }
        ]
    },
    {
        id: 'time-work',
        topic: "Time & Work",
        category: 'Quant',
        formulas: [
            {
                title: "Work Efficiency Relation",
                expression: "(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2",
                note: "M=Men, D=Days, H=Hours, W=Work"
            },
            {
                title: "A and B working together",
                expression: "(xy) / (x + y) days",
                note: "If A takes x days and B takes y days."
            }
        ]
    },
    {
        id: 'si-ci',
        topic: "Simple & Compound Interest",
        category: 'Quant',
        formulas: [
            {
                title: "Simple Interest (SI)",
                expression: "(P × R × T) / 100"
            },
            {
                title: "Compound Interest Amount",
                expression: "A = P [1 + (R/100)]^n"
            },
            {
                title: "Diff between CI and SI for 2 years",
                expression: "P (R/100)^2"
            }
        ]
    },

    // --- REASONING ---
    {
        id: 'clocks',
        topic: "Clocks",
        category: 'Reasoning',
        formulas: [
            {
                title: "Angle between hands",
                expression: "| (30 × H) - (11/2 × M) |",
                note: "H = Hour hand, M = Minute hand."
            },
            {
                title: "Coincide (0 degrees)",
                expression: "Occurs 11 times in 12 hours (not at 12-1)"
            },
            {
                title: "Right Angle (90 degrees)",
                expression: "Occurs 22 times in 12 hours"
            }
        ]
    },
    {
        id: 'calendars',
        topic: "Calendars",
        category: 'Reasoning',
        formulas: [
            {
                title: "Odd Days in 100 Years",
                expression: "5 Odd Days"
            },
            {
                title: "Odd Days in 400 Years",
                expression: "0 Odd Days (Repeating Cycle)"
            },
            {
                title: "Leap Year Condition",
                expression: "Divisible by 4 (Century years must be divisible by 400)",
                note: "1900 is NOT a leap year, 2000 IS."
            }
        ]
    },
    {
        id: 'permutations',
        topic: "Permutations & Combinations",
        category: 'Quant', // Often overlaps
        formulas: [
            {
                title: "Permutation (Arrangement)",
                expression: "nPr = n! / (n-r)!"
            },
            {
                title: "Combination (Selection)",
                expression: "nCr = n! / [r! (n-r)!]"
            },
            {
                title: "Circular Permutation",
                expression: "(n-1)!"
            }
        ]
    }
];
