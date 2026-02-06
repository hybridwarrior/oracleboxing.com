// lib/toolkit-videos.ts
// Boxing Toolkit video recommendations mapped to quiz dimensions

export interface ToolkitVideo {
  id: string;
  title: string;
  module: string;
  /** Quiz dimensions this video helps improve */
  dimensions: string[];
}

/**
 * Boxing Toolkit videos mapped to quiz dimensions.
 * Each video is tagged with the dimensions it's most relevant to.
 * 
 * Quiz dimensions: Technique, Movement, Defense, Offense, Ring IQ, Training Habits
 * Toolkit modules: foundation, footwork, straight_punches, bent_arm_punches,
 *   defense_hands, defense_movement, ranges, combinations, feints, advanced
 */
export const toolkitVideos: ToolkitVideo[] = [
  // Module 1: Foundation
  { id: 'pu7AxAE5hKQ', title: 'Choosing Your Stance', module: 'foundation', dimensions: ['Technique', 'Movement'] },
  { id: 'tI0g7EpG1-Q', title: 'Shape and Posture', module: 'foundation', dimensions: ['Technique'] },
  { id: 'Bt0SuJvRRcc', title: 'Relaxation', module: 'foundation', dimensions: ['Technique', 'Training Habits'] },
  { id: 'yjSdVuJhcuU', title: 'Balance and Weight', module: 'foundation', dimensions: ['Technique', 'Movement'] },

  // Module 2: Footwork
  { id: 'WZCKf_W6X_w', title: 'Basic Footwork', module: 'footwork', dimensions: ['Movement'] },
  { id: 'LngNeOyTK08', title: 'Bouncing and Nick Skips', module: 'footwork', dimensions: ['Movement'] },
  { id: 'En5jvoEMZF4', title: 'Pivots', module: 'footwork', dimensions: ['Movement', 'Defense'] },
  { id: 'ubPkvK2OeOc', title: 'Pendulum Steps', module: 'footwork', dimensions: ['Movement'] },
  { id: 'aVHvEPHpOt0', title: 'Drop Steps', module: 'footwork', dimensions: ['Movement', 'Offense'] },
  { id: 'KvLmAKtNyoU', title: 'Side Shift', module: 'footwork', dimensions: ['Movement', 'Defense'] },
  { id: 'nXJ0DpcY18g', title: 'Shuffling', module: 'footwork', dimensions: ['Movement'] },

  // Module 3: Straight Punches
  { id: 'DXcqr9zAOEI', title: 'The Jab', module: 'straight_punches', dimensions: ['Technique', 'Offense'] },
  { id: '-1LMy61TYzE', title: 'The Cross', module: 'straight_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'Ficr-pWbLlk', title: 'Jab to Body', module: 'straight_punches', dimensions: ['Technique', 'Offense'] },
  { id: '9tAS4DdgpPU', title: 'Cross to Body', module: 'straight_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'Zs5IBD69-gQ', title: 'Power and Rotation', module: 'straight_punches', dimensions: ['Technique', 'Offense'] },
  { id: '497zM5SBWFM', title: 'Revisiting Technique', module: 'straight_punches', dimensions: ['Technique', 'Training Habits'] },

  // Module 4: Bent Arm Punches
  { id: 'itth-8OIqJE', title: 'Lead Hook', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'H_8yVnY6uXQ', title: 'Rear Hook', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'qnE3KodVfb0', title: 'Lead Uppercut', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: '8mSEYxjyOUk', title: 'Rear Uppercut', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'iQZt1ZJx_Kw', title: 'Lead Hook Body', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: 'FvX0dvPNLO4', title: 'Rear Hook Body', module: 'bent_arm_punches', dimensions: ['Technique', 'Offense'] },
  { id: '57BtjKENWDo', title: 'Hooks Relaxation', module: 'bent_arm_punches', dimensions: ['Technique'] },

  // Module 5: Defense - Hands
  { id: '64D2IUpHiWs', title: 'Full Block', module: 'defense_hands', dimensions: ['Defense'] },
  { id: 'cLiqawGd6dU', title: 'Catch and Parry', module: 'defense_hands', dimensions: ['Defense'] },
  { id: 'TQo5qaCFOvo', title: 'Blocking Head Shots', module: 'defense_hands', dimensions: ['Defense'] },
  { id: '2WQyD4xT1Mo', title: 'Blocking Body Shots', module: 'defense_hands', dimensions: ['Defense'] },
  { id: 'D4ouTd3RKa8', title: 'Blocking Uppercuts', module: 'defense_hands', dimensions: ['Defense'] },

  // Module 6: Defense - Movement
  { id: '5Tp3qHUUV7A', title: 'Slipping', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: '0h9HwUgCpUY', title: 'Rolling', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: 'pXaJSF2Z73c', title: 'Dipping', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: 'VtX0LV04F7E', title: 'Weaving', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: 'asvmlbkE0SI', title: 'Pull and Layback', module: 'defense_movement', dimensions: ['Defense'] },
  { id: 'brRL595mGQY', title: 'Foot Defenses', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: 'CZ6T_Tr6f6Q', title: 'Combining Defenses', module: 'defense_movement', dimensions: ['Defense', 'Ring IQ'] },
  { id: 'TWW5DGC9Cas', title: 'Hand With Foot', module: 'defense_movement', dimensions: ['Defense', 'Movement'] },
  { id: 'O9i_IepIlG0', title: 'Trunk With Hand', module: 'defense_movement', dimensions: ['Defense'] },

  // Module 7: Ranges
  { id: 'SYbbhth9ddc', title: 'Understanding Ranges', module: 'ranges', dimensions: ['Ring IQ', 'Movement'] },
  { id: 'HNNrvOILLNM', title: 'Range Management', module: 'ranges', dimensions: ['Ring IQ', 'Movement'] },
  { id: 'u9UpoI47IkU', title: 'Fencing Principle', module: 'ranges', dimensions: ['Ring IQ', 'Offense'] },

  // Module 8: Combinations
  { id: 'XBHOWjcsbUc', title: 'Linking Punches', module: 'combinations', dimensions: ['Offense', 'Technique'] },
  { id: 'hUrwH3vxhVk', title: 'Linking Punches', module: 'combinations', dimensions: ['Offense', 'Technique'] },
  { id: 'xLmDsVOh30Y', title: 'Straight Combos', module: 'combinations', dimensions: ['Offense'] },
  { id: 'aNpW9ZjDJSo', title: 'Bent Arm Combos', module: 'combinations', dimensions: ['Offense'] },
  { id: '3wHJRU1mDdw', title: 'Basic Combinations', module: 'combinations', dimensions: ['Offense', 'Technique'] },
  { id: 'c4yX8xAmWkI', title: 'Punches With Footwork', module: 'combinations', dimensions: ['Offense', 'Movement'] },
  { id: 'rG4bgqQPOzI', title: 'Pendulum Punches', module: 'combinations', dimensions: ['Offense', 'Movement'] },
  { id: '7YAk4u0W_6E', title: 'Multi Phase Attacks', module: 'combinations', dimensions: ['Offense', 'Ring IQ'] },
  { id: 'YnerCUeRUZ0', title: 'Shadowboxing', module: 'combinations', dimensions: ['Training Habits', 'Offense'] },

  // Module 9: Feints
  { id: 'oDeHXi8oANg', title: 'Why and How to Feint', module: 'feints', dimensions: ['Ring IQ', 'Offense'] },
  { id: 'IRqxxEp-Pyg', title: 'Hand Feints', module: 'feints', dimensions: ['Ring IQ', 'Offense'] },
  { id: 'jz-Cyk7qD5E', title: 'Foot Feints', module: 'feints', dimensions: ['Ring IQ', 'Movement'] },
  { id: 'DG4tvOr7k6Q', title: 'Trunk Feints', module: 'feints', dimensions: ['Ring IQ'] },

  // Module 10: Advanced
  { id: '3TVsWDgIuNI', title: 'Check Hook', module: 'advanced', dimensions: ['Offense', 'Defense', 'Ring IQ'] },
  { id: '4DPtkn-h4Wk', title: 'Drop Cross', module: 'advanced', dimensions: ['Offense', 'Technique'] },
  { id: 'LI1qhGIDbgQ', title: 'Slip and Throw', module: 'advanced', dimensions: ['Defense', 'Offense'] },
  { id: '45eVtBt0DJE', title: 'Roll and Throw', module: 'advanced', dimensions: ['Defense', 'Offense'] },
  { id: 'bC1fHMZB4jk', title: 'Sparring Introduction', module: 'advanced', dimensions: ['Ring IQ', 'Training Habits'] },
];

/**
 * Get recommended videos based on weakest quiz dimensions.
 * Returns videos sorted by relevance to the user's weakest areas.
 */
export function getRecommendedVideos(
  scores: Record<string, number>,
  maxCount: number = 4
): ToolkitVideo[] {
  // Sort dimensions by score (lowest first = weakest areas)
  const sorted = Object.entries(scores)
    .sort(([, a], [, b]) => a - b);

  // Get the 2-3 weakest dimensions
  const weakDimensions = sorted.slice(0, 3).map(([dim]) => dim);

  // Score each video by how many weak dimensions it covers
  const scored = toolkitVideos.map((video) => {
    let relevance = 0;
    video.dimensions.forEach((dim) => {
      const idx = weakDimensions.indexOf(dim);
      if (idx !== -1) {
        // Higher weight for weaker dimensions (first = weakest)
        relevance += 3 - idx;
      }
    });
    return { video, relevance };
  });

  // Filter to relevant videos, sort by relevance, deduplicate by title
  const seen = new Set<string>();
  return scored
    .filter((s) => s.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .filter((s) => {
      if (seen.has(s.video.title)) return false;
      seen.add(s.video.title);
      return true;
    })
    .slice(0, maxCount)
    .map((s) => s.video);
}
