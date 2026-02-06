'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const DISMISSED_KEY = 'ob-quiz-popup-dismissed';
const SHOW_DELAY_MS = 8000;

// Fake results data for the blurred preview
const FAKE_CATEGORIES = [
  { name: 'Stance', pct: 85 },
  { name: 'Jab', pct: 70 },
  { name: 'Cross', pct: 45 },
  { name: 'Hooks', pct: 60 },
  { name: 'Defense', pct: 35 },
  { name: 'Footwork', pct: 55 },
  { name: 'Range', pct: 75 },
  { name: 'Combos', pct: 40 },
];

function BlurredReport() {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white border border-neutral-200">
      {/* Blurred content */}
      <div className="blur-[4px] pointer-events-none select-none p-4">
        {/* Fake header */}
        <div className="text-center mb-3">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Your Boxing Profile</div>
          <div className="text-2xl font-bold text-neutral-900 mt-1">Intermediate · 62%</div>
        </div>

        {/* Fake radar chart area */}
        <div className="flex justify-center mb-3">
          <svg viewBox="0 0 200 200" className="w-32 h-32">
            {/* Grid circles */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
            {/* Fake data polygon */}
            <polygon
              points="100,30 155,55 170,110 140,160 80,165 35,130 30,75 60,40"
              fill="rgba(55,50,47,0.12)"
              stroke="#37322F"
              strokeWidth="1.5"
            />
            {/* Axis lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x2 = 100 + 80 * Math.cos(rad - Math.PI / 2);
              const y2 = 100 + 80 * Math.sin(rad - Math.PI / 2);
              return <line key={angle} x1="100" y1="100" x2={x2} y2={y2} stroke="#e5e5e5" strokeWidth="0.5" />;
            })}
          </svg>
        </div>

        {/* Fake category bars */}
        <div className="space-y-1.5">
          {FAKE_CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-neutral-600 w-14 text-right">{cat.name}</span>
              <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-neutral-800 rounded-full"
                  style={{ width: `${cat.pct}%` }}
                />
              </div>
              <span className="text-[10px] text-neutral-500 w-6">{cat.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm border border-neutral-200">
          <p className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Take the test to unlock
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuizPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {}

    const timer = setTimeout(() => {
      setVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem(DISMISSED_KEY, '1'); } catch {}
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="bg-[#F5F5F5] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="bg-[#37322F] px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">New</p>
                <h2 className="text-white font-bold text-xl leading-tight">Boxing IQ Test</h2>
              </div>

              {/* Content */}
              <div className="px-5 py-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-1.5">
                    How well do you actually know boxing?
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    19 questions. 5 minutes. Get a personalised skill radar, gap analysis, and custom training plan.
                  </p>
                </div>

                {/* Blurred report preview */}
                <BlurredReport />

                <p className="text-xs text-neutral-400 text-center">
                  Most people score lower than they expect.
                </p>

                <Link
                  href="/quiz/take"
                  onClick={dismiss}
                  className="block w-full text-center bg-[#37322F] text-white font-semibold py-3.5 rounded-xl hover:bg-[#49423D] transition-colors text-sm"
                >
                  Take the Test
                </Link>

                <button
                  onClick={dismiss}
                  className="block w-full text-center text-neutral-400 hover:text-neutral-600 text-xs py-1 transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
