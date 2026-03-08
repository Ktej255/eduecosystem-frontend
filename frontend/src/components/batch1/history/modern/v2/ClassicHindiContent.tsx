import React from 'react';

interface ContentItem {
    highlight?: string;
    bold?: string;
    text?: string;
    note?: string;
}

interface Section {
    title?: string;
    text?: string;
    content?: (ContentItem | string)[];
    footer?: string[];
    s6TableHeaders?: string[];
    s6Newspapers?: string[][];
    battles?: { title: string; treaty?: string; note?: string }[];
    items?: (string | { bold?: string; text: string })[];
}

interface TranslationData {
    title?: string;
    subtitle?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    sourcesCenter?: string;
    mindMapBranches?: string[];
    sections: Section[];
    end: string;
}

interface ClassicHindiContentProps {
    data: TranslationData;
    fontSize: number;
}

export default function ClassicHindiContent({ data, fontSize }: ClassicHindiContentProps) {
    if (!data) return null;

    // Use heroTitle if title is missing, or vice versa
    const mainTitle = data.title || data.heroTitle;
    const mainSubtitle = data.subtitle || data.heroSubtitle;

    return (
        <div className="space-y-8" style={{ fontSize: `${fontSize}px` }}>
            <div className="border-b-2 border-orange-800 pb-4 mb-8">
                <h1 className="text-3xl font-bold text-orange-900 mb-2">{mainTitle}</h1>
                <p className="text-muted-foreground font-medium italic">{mainSubtitle}</p>
            </div>

            {/* Support for Mind Map data as a summary list if it exists */}
            {data?.mindMapBranches && (
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-8">
                    <h3 className="text-lg font-bold text-orange-800 mb-3 border-b border-orange-200 pb-1">
                        {data.sourcesCenter || "Key Areas"}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {data.mindMapBranches.map((branch, bi) => (
                            <li key={bi} className="flex gap-2 text-sm text-muted-foreground">
                                <span className="text-orange-500">•</span> {branch}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data?.sections?.map((section, sidx) => (
                <div key={sidx} className="mb-10">
                    {section.title && (
                        <h2 className="text-2xl font-bold text-blue-900 mb-4 border-l-4 border-blue-900 pl-4">
                            {section.title}
                        </h2>
                    )}

                    {section.text && (
                        <p className="mb-4 text-foreground leading-relaxed">
                            {section.text}
                        </p>
                    )}

                    {section.content && (
                        <div className="space-y-4">
                            {section.content.map((item, cidx) => {
                                if (typeof item === 'string') {
                                    return <p key={cidx} className="leading-relaxed text-foreground">{item}</p>;
                                }
                                return (
                                    <p key={cidx} className="leading-relaxed text-foreground">
                                        {(item.highlight || item.bold) && (
                                            <strong className="text-black bg-yellow-100 px-1 mr-1">
                                                {item.highlight || item.bold}
                                            </strong>
                                        )}
                                        {item.text}
                                        {item.note && <span className="text-muted-foreground italic ml-1">({item.note})</span>}
                                    </p>
                                );
                            })}
                        </div>
                    )}

                    {/* Support for 'items' list if present */}
                    {section.items && (
                        <ul className="list-disc pl-6 space-y-2 text-foreground">
                            {section.items.map((item, iidx) => (
                                <li key={iidx}>
                                    {typeof item === 'string' ? item : (
                                        <>
                                            {item.bold && <strong className="font-bold">{item.bold}</strong>}
                                            {item.text}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Support for 'battles' list (Ch 5) */}
                    {section.battles && (
                        <div className="mt-4 space-y-3">
                            {section.battles.map((battle, bidx) => (
                                <div key={bidx} className="bg-blue-50/30 p-3 rounded border-l-2 border-blue-200">
                                    <h4 className="font-bold text-blue-900">{battle.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {battle.treaty && <span className="italic">Treaty: {battle.treaty}</span>}
                                        {battle.note && <span className="block mt-1 font-medium">• {battle.note}</span>}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Special handling for tables in translations (like Ch 31/ch1) */}
                    {section.s6TableHeaders && section.s6Newspapers && (
                        <div className="mt-6 overflow-x-auto border rounded-lg">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-muted">
                                    <tr>
                                        {section.s6TableHeaders.map((h: string, i: number) => (
                                            <th key={i} className="p-3 border font-bold text-muted-foreground">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.s6Newspapers.map((row: string[], i: number) => (
                                        <tr key={i} className="hover:bg-muted">
                                            {row.map((cell: string, j: number) => (
                                                <td key={j} className="p-3 border">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {section.footer && (
                        <div className="mt-4 bg-muted p-4 rounded-lg border-l-4 border-border italic text-muted-foreground text-sm">
                            {section.footer.map((f, fidx) => (
                                <p key={fidx} className="mb-1">• {f}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="text-center mt-12 pt-8 border-t border-dashed border-border">
                <p className="text-muted-foreground italic text-lg">{data.end}</p>
            </div>
        </div>
    );
}
