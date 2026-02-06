'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const DISMISSED_KEY = 'ob-quiz-popup-dismissed';
const SHOW_DELAY_MS = 8000; // 8 seconds after page load

export default function QuizPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
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
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Top accent */}
              <div className="bg-[#37322F] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥊</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">New</p>
                    <p className="text-white font-bold text-lg leading-tight">Boxing IQ Test</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-2">
                  How well do you actually know boxing?
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-1">
                  19 questions. 5 minutes. Get a personalised breakdown of your boxing knowledge with a custom training plan.
                </p>
                <p className="text-xs text-neutral-400 mb-5">
                  Most people score lower than they expect.
                </p>

                <Link
                  href="/quiz/take"
                  onClick={dismiss}
                  className="block w-full text-center bg-[#37322F] text-white font-semibold py-3 rounded-xl hover:bg-[#49423D] transition-colors text-sm"
                >
                  Take the Test
                </Link>

                <button
                  onClick={dismiss}
                  className="block w-full text-center text-neutral-400 hover:text-neutral-600 text-xs mt-3 py-1 transition-colors"
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
