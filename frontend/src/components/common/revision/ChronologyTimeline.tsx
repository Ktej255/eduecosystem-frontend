import { TimelineEvent } from "@/components/batch1/history/data/ancient-types-27";

export function ChronologyTimeline({ events }: { events: TimelineEvent[] }) {
    if (!events || events.length === 0) return null;

    return (
        <div className="relative border-l-2 border-stone-200 ml-4 md:ml-6 space-y-8 my-8 pb-4">
            {events.map((event, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10 group">
                    {/* Circle Node */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-stone-300 border-2 border-white group-hover:bg-amber-500 transition-colors shadow-sm" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                        <span className="font-bold text-lg whitespace-nowrap text-amber-600 bg-amber-50 px-2 rounded w-fit">
                            {event.year}
                        </span>
                        <div>
                            <h4 className="font-semibold text-stone-800 text-lg">{event.event}</h4>
                            <p className="text-stone-600 text-sm mt-1">{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
