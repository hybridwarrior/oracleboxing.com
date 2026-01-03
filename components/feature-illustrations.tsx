"use client"

// Isometric UI Mockup Illustrations for Features Section

export function CoursesIllustration() {
  return (
    <svg viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="380" height="280" fill="#FFFCF5" />

      {/* Main video player card */}
      <g transform="translate(40, 30)">
        {/* Card body */}
        <rect x="5" y="5" width="200" height="220" rx="8" fill="white" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />

        {/* Video thumbnail area with course screenshot */}
        <defs>
          <clipPath id="coursesVideoClip">
            <rect x="12" y="12" width="186" height="140" rx="4" />
          </clipPath>
        </defs>
        <image
          href="https://sb.oracleboxing.com/Website/coaching_tn_1.webp"
          x="12"
          y="12"
          width="186"
          height="140"
          clipPath="url(#coursesVideoClip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Play button */}
        <circle cx="105" cy="80" r="18" fill="rgba(255, 255, 255, 0.9)" />
        <path d="M100 72 L113 80 L100 88 Z" fill="#37322F" />

        {/* Video title */}
        <text x="12" y="168" fontSize="11" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">Kinetic Chain</text>

        {/* Accordion sections */}
        <g transform="translate(12, 180)">
          {/* Drills accordion - collapsed */}
          <rect x="0" y="0" width="186" height="18" rx="4" fill="rgba(55, 50, 47, 0.06)" />
          <text x="10" y="12" fontSize="8" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">Drills</text>
          <path d="M172 7 L176 11 L180 7" stroke="rgba(55, 50, 47, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Workouts accordion - collapsed */}
          <rect x="0" y="22" width="186" height="18" rx="4" fill="rgba(55, 50, 47, 0.06)" />
          <text x="10" y="34" fontSize="8" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">Workouts</text>
          <path d="M172 29 L176 33 L180 29" stroke="rgba(55, 50, 47, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>

      {/* Skills progression sidebar */}
      <g transform="translate(255, 30)">
        {/* Sidebar card */}
        <rect x="0" y="0" width="120" height="220" rx="8" fill="white" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />

        {/* Header */}
        <text x="10" y="18" fontSize="9" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">Skills Unlocked</text>
        <text x="85" y="18" fontSize="7" fill="rgba(55, 50, 47, 0.5)" fontFamily="system-ui, sans-serif">24/87</text>

        {/* Progress bar */}
        <rect x="10" y="26" width="100" height="4" rx="2" fill="rgba(55, 50, 47, 0.1)" />
        <rect x="10" y="26" width="28" height="4" rx="2" fill="#37322F" />

        {/* Skill 1 - Completed */}
        <g transform="translate(10, 40)">
          <circle cx="5" cy="5" r="5" fill="#37322F" />
          <path d="M2.5 5 L4 6.5 L7.5 3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="14" y="8" fontSize="7" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">Stance</text>
        </g>

        {/* Skill 2 - Completed */}
        <g transform="translate(10, 56)">
          <circle cx="5" cy="5" r="5" fill="#37322F" />
          <path d="M2.5 5 L4 6.5 L7.5 3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="14" y="8" fontSize="7" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">Weight Distribution</text>
        </g>

        {/* Skill 3 - In Progress (Kinetic Chain) */}
        <g transform="translate(10, 72)">
          <circle cx="5" cy="5" r="5" fill="white" stroke="#37322F" strokeWidth="1.2" />
          <circle cx="5" cy="5" r="2" fill="#37322F" />
          <text x="14" y="8" fontSize="7" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">Kinetic Chain</text>
        </g>

        {/* Skill 4 - Locked */}
        <g transform="translate(10, 88)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Jab</text>
        </g>

        {/* Skill 5 - Locked */}
        <g transform="translate(10, 104)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Cross</text>
        </g>

        {/* Skill 6 - Locked */}
        <g transform="translate(10, 120)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">1-2 Combination</text>
        </g>

        {/* Skill 7 - Locked */}
        <g transform="translate(10, 136)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Lead Hook (3)</text>
        </g>

        {/* Skill 8 - Locked */}
        <g transform="translate(10, 152)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Slipping</text>
        </g>

        {/* Skill 9 - Locked */}
        <g transform="translate(10, 168)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Rolling</text>
        </g>

        {/* Skill 10 - Locked */}
        <g transform="translate(10, 184)">
          <circle cx="5" cy="5" r="5" fill="rgba(55, 50, 47, 0.06)" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />
          <text x="14" y="8" fontSize="7" fill="rgba(55, 50, 47, 0.35)" fontFamily="system-ui, sans-serif">Philly Shell Guard</text>
        </g>

        {/* More indicator */}
        <text x="10" y="205" fontSize="7" fill="rgba(55, 50, 47, 0.4)" fontFamily="system-ui, sans-serif">+63 more skills...</text>
      </g>
    </svg>
  )
}

export function CoachingIllustration() {
  return (
    <svg viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="380" height="280" fill="#FFFCF5" />

      {/* Video call container */}
      <g transform="translate(45, 30)">
        {/* Card body */}
        <rect x="0" y="0" width="290" height="215" rx="8" fill="#1a1a1a" stroke="rgba(55, 50, 47, 0.2)" strokeWidth="1" />

        {/* Ollie's video - left side */}
        <defs>
          <clipPath id="ollieClip">
            <path d="M8 8 L140 8 L140 175 L8 175 Q8 175 8 175 Z" />
          </clipPath>
          <clipPath id="studentClip">
            <path d="M150 8 L282 8 L282 175 L150 175 Z" />
          </clipPath>
        </defs>

        {/* Ollie - Coach (left) */}
        <image
          href="https://sb.oracleboxing.com/Website/ob_coaching_call_6.webp"
          x="8"
          y="8"
          width="132"
          height="167"
          clipPath="url(#ollieClip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Student (right) */}
        <image
          href="https://sb.oracleboxing.com/Website/ob_coaching_call_5.webp"
          x="150"
          y="8"
          width="132"
          height="167"
          clipPath="url(#studentClip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Name labels */}
        <rect x="12" y="155" width="30" height="14" rx="3" fill="rgba(0, 0, 0, 0.6)" />
        <text x="17" y="165" fontSize="8" fill="white" fontWeight="500" fontFamily="system-ui, sans-serif">You</text>

        <rect x="154" y="155" width="40" height="14" rx="3" fill="rgba(0, 0, 0, 0.6)" />
        <text x="159" y="165" fontSize="8" fill="white" fontWeight="500" fontFamily="system-ui, sans-serif">Ollie</text>

        {/* Compact control bar at bottom */}
        <path d="M0 183 L290 183 L290 207 Q290 215 282 215 L8 215 Q0 215 0 207 Z" fill="rgba(30, 30, 30, 0.95)" />

        {/* Control buttons */}
        <g transform="translate(95, 190)">
          {/* Mute button */}
          <circle cx="12" cy="8" r="8" fill="rgba(255, 255, 255, 0.1)" />
          <rect x="10" y="4" width="4" height="7" rx="1" fill="white" />

          {/* Video button */}
          <circle cx="36" cy="8" r="8" fill="rgba(255, 255, 255, 0.1)" />
          <rect x="32" y="5" width="7" height="5" rx="1" fill="white" />

          {/* Screen share */}
          <circle cx="60" cy="8" r="8" fill="rgba(255, 255, 255, 0.1)" />
          <rect x="55" y="4" width="10" height="7" rx="1" fill="none" stroke="white" strokeWidth="1" />

          {/* End call */}
          <circle cx="84" cy="8" r="8" fill="#EF4444" />
          <rect x="80" y="7" width="8" height="2" rx="1" fill="white" />
        </g>
      </g>

    </svg>
  )
}

export function CommunityIllustration() {
  return (
    <svg viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="380" height="280" fill="#FFFCF5" />

      {/* Main post card */}
      <g transform="translate(40, 5)">
        {/* Card body */}
        <rect x="0" y="0" width="300" height="270" rx="8" fill="white" stroke="rgba(55, 50, 47, 0.12)" strokeWidth="1" />

        {/* Post title */}
        <text x="12" y="20" fontSize="9" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">Combo for analysis - 123-Tilt-52-Tilt-63</text>

        {/* Post content */}
        <g transform="translate(12, 30)">
          <text x="0" y="10" fontSize="7" fill="rgba(55, 50, 47, 0.8)" fontFamily="system-ui, sans-serif">Homework from Toni this week sees me include tilts into the mix</text>
          <text x="0" y="20" fontSize="7" fill="rgba(55, 50, 47, 0.8)" fontFamily="system-ui, sans-serif">using a short combo. Two videos uploaded. One at speed, one</text>
          <text x="0" y="30" fontSize="7" fill="rgba(55, 50, 47, 0.8)" fontFamily="system-ui, sans-serif">slowed down working on the rotations for each punch...</text>
        </g>

        {/* Focus points section */}
        <g transform="translate(12, 75)">
          <text x="0" y="10" fontSize="7" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">🚨 Focus points:</text>
          <text x="0" y="22" fontSize="7" fill="rgba(55, 50, 47, 0.7)" fontFamily="system-ui, sans-serif">• Flow of movement (not jittery) • Rotation of shoulders</text>
          <text x="0" y="32" fontSize="7" fill="rgba(55, 50, 47, 0.7)" fontFamily="system-ui, sans-serif">• Chin down • Keeping head on axis during tilts</text>
        </g>

        {/* Things to fix section */}
        <g transform="translate(12, 115)">
          <text x="0" y="10" fontSize="7" fill="#37322F" fontWeight="600" fontFamily="system-ui, sans-serif">🚨 Things that need fixing:</text>
          <text x="0" y="22" fontSize="7" fill="rgba(55, 50, 47, 0.7)" fontFamily="system-ui, sans-serif">• Kinetic chain cleaner - more lag - more snap</text>
          <text x="0" y="32" fontSize="7" fill="rgba(55, 50, 47, 0.7)" fontFamily="system-ui, sans-serif">• Lead elbow from flaring • Move slow to move fast</text>
        </g>

        {/* Single video thumbnail with action image */}
        <g transform="translate(12, 155)">
          <defs>
            <clipPath id="videoClip">
              <rect x="0" y="0" width="276" height="80" rx="6" />
            </clipPath>
          </defs>
          <rect x="0" y="0" width="276" height="80" rx="6" fill="rgba(55, 50, 47, 0.1)" />
          <image
            href="https://sb.oracleboxing.com/Website/kris_action.webp"
            x="0"
            y="0"
            width="276"
            height="80"
            clipPath="url(#videoClip)"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Play button */}
          <circle cx="138" cy="40" r="16" fill="rgba(255, 255, 255, 0.9)" />
          <path d="M133 30 L148 40 L133 50 Z" fill="#37322F" />
        </g>

        {/* Likes and comments */}
        <g transform="translate(12, 245)">
          {/* Heart icon and likes */}
          <path d="M8 3C5.5 0 1 1 1 5c0 3 4 6 7 9 3-3 7-6 7-9 0-4-4.5-5-7-2z" fill="#EF4444" transform="scale(0.8)" />
          <text x="14" y="8" fontSize="8" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">39</text>

          {/* Comment icon and comments */}
          <g transform="translate(45, 0)">
            <path d="M0 2C0 0.9 0.9 0 2 0h8c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H4l-3 3V9H2C0.9 9 0 8.1 0 7V2z" fill="rgba(55, 50, 47, 0.4)" transform="scale(0.8)" />
            <text x="14" y="8" fontSize="8" fill="#37322F" fontWeight="500" fontFamily="system-ui, sans-serif">56</text>
          </g>
        </g>
      </g>

    </svg>
  )
}
