"use client";

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { UPSC_CATALOG, UPSCBook } from '@/data/upsc-catalog';
import TieredLevelView from '@/components/upsc/TieredLevelView';
import { CHAPTER7_TIERED_CONTENT } from '@/components/batch1/history/data/mcqs/chapter7-tiered';
import { POLITY_CHAPTER5_TIERED } from '@/components/batch1/polity/data/mcqs/chapter5-tiered';
import { GEOGRAPHY_CHAPTER1_TIERED } from '@/components/batch1/geography/data/mcqs/chapter1-tiered';
import { ENVIRONMENT_CHAPTER1_TIERED } from '@/components/batch1/environment/data/mcqs/chapter1-tiered';
import { getSubjectColor } from '@/lib/subject-colors';

// Static Chapter Maps (Mocking DB)
const HISTORY_CHAPTERS = [
    { id: 1, title: "Advent of Europeans" },
    { id: 2, title: "British Expansion" },
    { id: 7, title: "The Revolt of 1857", data: CHAPTER7_TIERED_CONTENT },
    { id: 8, title: "Socio-Religious Reform Movements" }
];

const POLITY_CHAPTERS = [
    { id: 1, title: "Historical Background" },
    { id: 2, title: "Making of the Constitution" },
    { id: 5, title: "Union & Its Territory", data: POLITY_CHAPTER5_TIERED },
    { id: 6, title: "Citizenship" }
];

const GEOGRAPHY_CHAPTERS = [
    { id: 1, title: "The Universe & Solar System", data: GEOGRAPHY_CHAPTER1_TIERED },
    { id: 2, title: "Geomorphology: Earth's Interior" },
    { id: 3, title: "Climatology: Atmosphere" },
    { id: 4, title: "Oceanography" }
];

const ENVIRONMENT_CHAPTERS = [
    { id: 1, title: "Ecology & Ecosystem Functions", data: ENVIRONMENT_CHAPTER1_TIERED },
    { id: 2, title: "Biodiversity & Conservation" },
    { id: 3, title: "Climate Change & Summits" },
    { id: 4, title: "Pollution & Acts" }
];

export default function SubjectStorePage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const subjectId = params.subjectId as string;
    const levelParam = searchParams.get('level');
    const activeLevel = levelParam ? parseInt(levelParam) : null;

    const subject = UPSC_CATALOG.find(s => s.id === subjectId);

    // ① Not found branch — preserved exactly
    if (!subject) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold">Subject Not Found</h2>
                <button onClick={() => router.back()} className="mt-4 text-blue-600 hover:underline">
                    Go Back
                </button>
            </div>
        );
    }

    // ② TieredLevelView branch — preserved exactly
    if (activeLevel) {
        const chapters = subjectId === 'history' ? HISTORY_CHAPTERS :
            subjectId === 'polity' ? POLITY_CHAPTERS :
                subjectId === 'geography' ? GEOGRAPHY_CHAPTERS :
                    subjectId === 'environment' ? ENVIRONMENT_CHAPTERS : [];

        return <TieredLevelView
            subjectId={subjectId}
            level={activeLevel}
            onBack={() => router.back()}
            chapters={chapters}
        />;
    }

    // ③ Main store branch
    const ncertBooks = subject.books.filter(b => b.isNCERT);
    const standardBooks = subject.books.filter(b => !b.isNCERT);
    const subjectColor = getSubjectColor(subject.id);

    const BookCard = ({ book }: { book: UPSCBook }) => (
        <div
            onClick={() => router.push(`/student/upsc/${subjectId}/${book.id}`)}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-float)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(29,158,117,0.4)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--line)';
            }}
            style={{
                position: 'relative',
                background: 'var(--paper)',
                borderRadius: 'var(--r-lg)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-card)',
                padding: 20,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {book.isNCERT && (
                <span className="sl-chip forest" style={{ position: 'absolute', top: 12, right: 12 }}>
                    NCERT
                </span>
            )}

            {/* Left accent bar */}
            <div style={{
                width: 4,
                alignSelf: 'stretch',
                background: subjectColor,
                borderRadius: 999,
                marginRight: 16,
                flexShrink: 0,
            }} />

            {/* Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 15,
                    color: 'var(--forest)',
                    margin: '0 0 4px',
                    paddingRight: book.isNCERT ? 64 : 0,
                }}>
                    {book.title}
                </h4>
                {book.author && (
                    <p style={{ fontSize: 12, color: 'var(--ink-55)', margin: '0 0 8px' }}>
                        by {book.author}
                    </p>
                )}
                <p style={{
                    fontSize: 13,
                    color: 'var(--ink-70)',
                    lineHeight: 1.5,
                    margin: '0 0 12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                }}>
                    {book.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
                    {book.price > 0 ? (
                        <>
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: 18,
                                color: 'var(--forest)',
                            }}>
                                ₹{book.discountedPrice}
                            </span>
                            <span style={{
                                fontSize: 12,
                                color: 'var(--ink-35)',
                                textDecoration: 'line-through',
                                marginLeft: 8,
                            }}>
                                ₹{book.price}
                            </span>
                            <span className="sl-chip amber">
                                -{Math.round(((book.price - book.discountedPrice) / book.price) * 100)}%
                            </span>
                        </>
                    ) : (
                        <span className="sl-chip teal">FREE</span>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="topo" style={{ background: 'var(--forest-ink)', minHeight: '100vh', padding: '32px 40px' }}>

            {/* Back button */}
            <button
                onClick={() => router.back()}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    color: 'var(--teal)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 600,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: 24,
                    padding: 0,
                }}
            >
                ← Back to subjects
            </button>

            {/* Subject header card */}
            <div style={{
                background: 'var(--paper)',
                borderRadius: 'var(--r-xl)',
                padding: '32px 40px',
                marginBottom: 32,
                boxShadow: 'var(--shadow-float)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: subjectColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}>
                        <subject.icon size={28} color="white" />
                    </div>
                    <div>
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: 28,
                            color: 'var(--forest)',
                            margin: '0 0 6px',
                        }}>
                            {subject.title} Study Materials
                        </h1>
                        <p style={{ fontSize: 14, color: 'var(--ink-55)', margin: 0 }}>
                            {subject.description}
                        </p>
                    </div>
                </div>
                <span className="sl-chip teal">{subject.books.length} Resources</span>
            </div>

            {/* Book sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

                {/* Dynamic category sections */}
                {[...new Set(subject.books.map(b => b.category).filter(Boolean))].map(category => (
                    <section key={category}>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            fontSize: 16,
                            color: 'var(--ink-70)',
                            margin: '0 0 16px',
                            paddingBottom: 8,
                            borderBottom: '1px solid var(--line)',
                        }}>
                            {category}
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: 16,
                        }}>
                            {subject.books
                                .filter(b => b.category === category)
                                .map(book => <BookCard key={book.id} book={book} />)
                            }
                        </div>
                    </section>
                ))}

                {/* Fallback: Standard vs NCERT */}
                {!subject.books.some(b => b.category) && (
                    <>
                        {standardBooks.length > 0 && (
                            <section>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: 16,
                                    color: 'var(--ink-70)',
                                    margin: '0 0 16px',
                                    paddingBottom: 8,
                                    borderBottom: '1px solid var(--line)',
                                }}>
                                    Standard Reference Books
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                    gap: 16,
                                }}>
                                    {standardBooks.map(book => <BookCard key={book.id} book={book} />)}
                                </div>
                            </section>
                        )}

                        {ncertBooks.length > 0 && (
                            <section>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 600,
                                    fontSize: 16,
                                    color: 'var(--ink-70)',
                                    margin: '0 0 16px',
                                    paddingBottom: 8,
                                    borderBottom: '1px solid var(--line)',
                                }}>
                                    NCERT Foundations
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                    gap: 16,
                                }}>
                                    {ncertBooks.map(book => <BookCard key={book.id} book={book} />)}
                                </div>
                            </section>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
