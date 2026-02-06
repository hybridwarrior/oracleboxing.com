// lib/diagnostic-quiz.ts
// Diagnostic quiz engine - gap detection and prescription

import questionsData from './diagnostic-quiz-data.json';

export interface DiagnosticOption {
  id: string;
  text: string;
  correct: boolean;
  skillGap: string | null;
  remedialVideos: string[];
}

export interface DiagnosticQuestion {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  context: string;
  explanation: string;
  diagram: string | null;
  options: DiagnosticOption[];
  correctAnswer: string;
}

export interface SkillGap {
  gap: string;
  category: string;
  questionId: string;
  remedialVideos: string[];
}

export interface CategoryScore {
  category: string;
  correct: number;
  total: number;
  percentage: number;
  gaps: SkillGap[];
}

export interface DiagnosticResult {
  id: string;
  totalCorrect: number;
  totalQuestions: number;
  percentage: number;
  categoryScores: CategoryScore[];
  allGaps: SkillGap[];
  prescribedVideos: string[];
  level: 'beginner' | 'developing' | 'intermediate' | 'advanced';
  createdAt: string;
}

export const questions: DiagnosticQuestion[] = questionsData as DiagnosticQuestion[];

// Normalize category names for display
const CATEGORY_DISPLAY: Record<string, string> = {
  'STANCE_FOUNDATION': 'Stance & Foundation',
  'DISTANCE/RANGE': 'Distance & Range',
  'HOOK': 'Hooks',
  'Combinations & Flow': 'Combinations',
  'Defense - Hands': 'Defense (Hands)',
  'Defense - Movement': 'Defense (Movement)',
  'Power Generation': 'Power Generation',
  'cross': 'Cross',
  'jab': 'Jab',
  'footwork': 'Footwork',
  'uppercut': 'Uppercut',
};

export function getCategoryDisplay(cat: string): string {
  return CATEGORY_DISPLAY[cat] || cat;
}

// Calculate results from responses
export function calculateDiagnosticResults(
  responses: Record<string, string> // questionId -> selected option ID
): Omit<DiagnosticResult, 'id' | 'createdAt'> {
  let totalCorrect = 0;
  const categoryMap: Record<string, { correct: number; total: number; gaps: SkillGap[] }> = {};
  const allGaps: SkillGap[] = [];
  const videoSet = new Set<string>();

  for (const q of questions) {
    const cat = q.category;
    if (!categoryMap[cat]) {
      categoryMap[cat] = { correct: 0, total: 0, gaps: [] };
    }
    categoryMap[cat].total++;

    const selectedId = responses[q.id];
    if (!selectedId) continue;

    const selectedOption = q.options.find(o => o.id.toUpperCase() === selectedId.toUpperCase());
    if (!selectedOption) continue;

    if (selectedOption.correct) {
      totalCorrect++;
      categoryMap[cat].correct++;
    } else {
      // Record the skill gap
      const gap: SkillGap = {
        gap: selectedOption.skillGap || `Incorrect on: ${q.question.slice(0, 60)}`,
        category: cat,
        questionId: q.id,
        remedialVideos: selectedOption.remedialVideos || [],
      };
      allGaps.push(gap);
      categoryMap[cat].gaps.push(gap);
      selectedOption.remedialVideos?.forEach(v => videoSet.add(v));
    }
  }

  const totalQuestions = questions.length;
  const percentage = Math.round((totalCorrect / totalQuestions) * 100);

  const categoryScores: CategoryScore[] = Object.entries(categoryMap)
    .map(([category, data]) => ({
      category,
      correct: data.correct,
      total: data.total,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
      gaps: data.gaps,
    }))
    .sort((a, b) => a.percentage - b.percentage); // Worst first

  // Determine level
  let level: 'beginner' | 'developing' | 'intermediate' | 'advanced';
  if (percentage < 40) level = 'beginner';
  else if (percentage < 65) level = 'developing';
  else if (percentage < 85) level = 'intermediate';
  else level = 'advanced';

  return {
    totalCorrect,
    totalQuestions,
    percentage,
    categoryScores,
    allGaps,
    prescribedVideos: [...videoSet],
    level,
  };
}
