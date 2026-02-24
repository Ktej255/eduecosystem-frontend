import React from 'react';

const SiddhaQuadrant: React.FC = () => {
    return (
        <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <h3 className="font-semibold text-amber-200">The Power of Lineage</h3>
                <p className="text-sm text-slate-400 mt-2">
                    A mantra is only as powerful as the lineage (Parampara) that empowers it.
                    Without a guru, a mantra is like a seed without water.
                </p>
            </div>

            <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase">Available Teachings</h4>
                <ul className="space-y-1">
                    <li className="text-sm py-2 px-3 bg-slate-800/20 rounded-lg hover:bg-amber-500/10 cursor-pointer transition-colors">
                        Understanding the Shiva-Shakti Dynamic
                    </li>
                    <li className="text-sm py-2 px-3 bg-slate-800/20 rounded-lg hover:bg-amber-500/10 cursor-pointer transition-colors">
                        The 4 Modes of Speech (Para to Vaikhari)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SiddhaQuadrant;
