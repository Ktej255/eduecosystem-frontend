
"use client";

import { useState, useEffect } from "react";

export default function BuildInfo() {
    const [show, setShow] = useState(true);
    const BUILD_VERSION = "v1.5-aws-fix";
    const COMMIT_HASH = "797e9a3";
    const TIMESTAMP = "Jan 6, 01:10 PM";

    if (!show) return null;

    return (
        <div
            className="fixed bottom-2 right-2 z-50 bg-black/80 text-white text-xs px-2 py-1 rounded cursor-pointer hover:bg-black"
            onClick={() => setShow(false)}
            title="Click to hide"
        >
            <span className="font-bold text-green-400">● LIVE</span> | {BUILD_VERSION} ({COMMIT_HASH}) | {TIMESTAMP}
        </div>
    );
}
