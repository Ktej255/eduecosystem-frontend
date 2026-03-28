"use client";

import React, { useState } from "react";
import Link from "next/link";
import { currentAffairsData, CATopic } from "@/components/upsc/subjects/polity/current-affairs/data";

export default function PolityCurrentAffairsPage() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSourceClick = (url: string) => {
    setSelectedUrl(url);
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank", "noopener,noreferrer");
    }
    setIsModalOpen(false);
    setSelectedUrl(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <Link
            href="/student/upsc/polity"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 mb-4 inline-block transition-colors"
          >
            &larr; Back to Polity Overview
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Polity Current Affairs
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Stay updated with the latest constitutional developments, SC judgments, and parliamentary procedures.
          </p>
        </header>

        <main className="space-y-12">
          {currentAffairsData.map((topic) => (
            <section
              key={topic.id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                    {topic.relatedChapter}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">{topic.title}</h2>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                  {topic.summary}
                </p>
                
                <div className="bg-slate-50 rounded-md p-6 border-l-4 border-slate-400 mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Key Points for UPSC
                  </h3>
                  <ul className="space-y-3">
                    {topic.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start text-slate-700 leading-relaxed">
                        <span className="text-slate-400 mr-2 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={() => handleSourceClick(topic.sourceUrl)}
                  className="inline-flex items-center px-4 py-2 border border-orange-600 text-sm font-semibold rounded-md text-orange-600 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
                >
                  Source Link
                  <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>

                <Link
                  href={`/student/upsc/polity/drill?topic=${encodeURIComponent(topic.title)}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all"
                >
                  Practice MCQs on this topic
                  <svg
                    className="ml-2 -mr-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </section>
          ))}
        </main>

        <footer className="mt-20 text-center pb-12 border-t border-slate-200 pt-12">
          <p className="text-slate-500 text-sm">
            &copy; 2025 EduEcosystem UPSC Study Platform. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Safety Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-bold text-slate-900" id="modal-title">
                    External Link Warning
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-slate-500">
                      You are leaving EduEcosystem. This link will open in a new tab. Do you wish to continue?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Continue
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Stay here
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
