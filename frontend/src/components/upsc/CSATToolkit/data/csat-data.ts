export interface FormulaTopic {
    id: string;
    topic: string;
    category: 'Quant' | 'Reasoning';
    formulas: {
        title: string;
        expression: string;
        note?: string;
    }[];
}

export const CSAT_FORMULAS_DATA: FormulaTopic[] = [
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
                title: "Remainder Theorem",
                expression: "Dividend = (Divisor × Quotient) + Remainder",
                note: "Remainder < Divisor."
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
                expression: "[(Final - Initial) / Initial] × 100"
            },
            {
                title: "Successive Changes (A% & B%)",
                expression: "A + B + (AB/100)",
                note: "+ for increase, - for decrease."
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
                title: "Average Speed",
                expression: "2xy / (x + y)",
                note: "For equal distances at speeds x and y."
            },
            {
                title: "Relative Speed (Opposite Direction)",
                expression: "S1 + S2"
            }
        ]
    },
    {
        id: 'clocks',
        topic: "Clocks",
        category: 'Reasoning',
        formulas: [
            {
                title: "Angle between hands",
                expression: "| (30 × H) - (11/2 × M) |",
                note: "H = Hours, M = Minutes."
            },
            {
                title: "Coincide (0°)",
                expression: "11 times in 12 hours (Never between 12-1)"
            },
            {
                title: "Opposite (180°)",
                expression: "11 times in 12 hours (Never between 6-7)"
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
                title: "Leap Year Drill",
                expression: "Divisible by 4; Century years by 400",
                note: "2000 is a leap year; 1900 is not."
            }
        ]
    }
];
