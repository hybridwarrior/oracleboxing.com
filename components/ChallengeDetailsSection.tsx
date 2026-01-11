"use client"

import Image from "next/image"

// Live Coaching Calls Calendar Component
function LiveCoachingCalendar() {
  // Schedule with coach names, times, and lesson names (London time)
  const schedule = [
    { day: 'Mon', calls: [{ time: '9pm', coach: 'Toni', lesson: 'Jab Mechanics' }] },
    { day: 'Tue', calls: [{ time: '9am', coach: 'Oliver', lesson: 'Shape & Stance' }, { time: '11pm', coach: 'Charlie', lesson: 'Slips & Rolls' }] },
    { day: 'Wed', calls: [{ time: '9am', coach: 'Oliver', lesson: '1-2 Combos' }] },
    { day: 'Thu', calls: [{ time: '9am', coach: 'Oliver', lesson: 'Pivots & Angles' }] },
    { day: 'Fri', calls: [{ time: '12pm', coach: 'Toni', lesson: 'Hook Power' }, { time: '7pm', coach: 'Charlie', lesson: 'Catch & Parry' }] },
    { day: 'Sat', calls: [{ time: '12pm', coach: 'Toni', lesson: 'Kinetic Chain' }, { time: '5pm', coach: 'Charlie', lesson: 'Tilt Work' }] },
    { day: 'Sun', calls: [{ time: '8pm', coach: 'Toni', lesson: 'Footwork Flow' }] },
  ]

  // Track which calls are "attended" for demo
  const attended = { 'Tue-9am': true, 'Sat-12pm': true }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <h4 className="text-[#37322F] text-sm md:text-lg font-semibold" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
          Live Coaching Calls
        </h4>
        <span className="text-[#6B7280] text-[10px] md:text-xs">London Time</span>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-7 gap-0.5 md:gap-1">
          {/* Day Headers */}
          {schedule.map((item, idx) => (
            <div key={idx} className="text-center pb-1 md:pb-2 border-b border-[#E5E0DB]">
              <span className="text-[#37322F] text-[9px] md:text-xs font-medium">{item.day}</span>
            </div>
          ))}

          {/* Call cards */}
          {schedule.map((item, dayIdx) => (
            <div key={`calls-${dayIdx}`} className="flex flex-col gap-0.5 md:gap-1 pt-1 md:pt-2">
              {item.calls.map((call, callIdx) => {
                const isAttended = attended[`${item.day}-${call.time}` as keyof typeof attended]
                return (
                  <div
                    key={callIdx}
                    className={`px-0.5 md:px-1 py-1 md:py-1.5 rounded text-center ${
                      isAttended
                        ? 'bg-[#B8C9A3]'
                        : 'bg-[#E8E4DE]'
                    }`}
                  >
                    <div className={`text-[6px] md:text-[8px] font-semibold ${isAttended ? 'text-[#3D4A2D]' : 'text-[#49423D]'}`}>
                      {call.lesson}
                    </div>
                    <div className={`text-[6px] md:text-[8px] ${isAttended ? 'text-[#3D4A2D]/80' : 'text-[#6B7280]'}`}>
                      {call.time}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-3 md:gap-4 mt-2 md:mt-3 pt-2 md:pt-3 border-t border-[#E5E0DB]">
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded bg-[#E8E4DE]" />
          <span className="text-[#6B7280] text-[8px] md:text-[10px]">Available</span>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded bg-[#B8C9A3]" />
          <span className="text-[#6B7280] text-[8px] md:text-[10px]">Attended</span>
        </div>
      </div>
    </div>
  )
}

// Feedback Illustration Component
function FeedbackIllustration() {
  const teamImages = {
    toni: "https://sb.oracleboxing.com/Website/team_toni.webp",
    oliver: "https://sb.oracleboxing.com/Website/team_ollie.webp",
    jordan: "https://sb.oracleboxing.com/Website/team_jordan.webp",
  }

  const comments = [
    {
      coach: "Toni",
      image: teamImages.toni,
      feedback: "Good stance setup. Keep shoulders over hips and spine neutral. Initiate rotation from the hips, then shoulders, then arm. Stay relaxed through the chain."
    },
    {
      coach: "Oliver",
      image: teamImages.oliver,
      feedback: "Jab timing looks clean. Shoulder to chin on release, elbow tucked, aim with the knuckles and recoil straight back to guard. Maintain head position through the 1–2."
    },
  ]

  return (
    <div className="w-full h-full flex flex-col">
      {/* Video Thumbnail - fixed height instead of aspect-video */}
      <div className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] bg-[#E5E5E5] rounded-lg overflow-hidden mb-2 md:mb-3 border border-[#E5E0DB] flex-shrink-0">
        <Image
          src="https://sb.oracleboxing.com/Website/kris_action.webp"
          alt="Boxing technique video"
          fill
          className="object-cover"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Duration */}
        <div className="absolute bottom-1.5 right-1.5 bg-black/70 px-1.5 py-0.5 rounded text-white text-[9px] md:text-[10px]">
          0:45
        </div>
      </div>

      {/* Coach Comments */}
      <div className="flex-1 flex flex-col gap-1.5 md:gap-2">
        {comments.map((comment, idx) => (
          <div key={idx} className={`flex items-start gap-2 ${idx !== comments.length - 1 ? 'pb-1.5 md:pb-2 border-b border-[#E5E0DB]' : ''}`}>
            {/* Coach Avatar */}
            <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image src={comment.image} alt={comment.coach} fill className="object-cover" />
            </div>
            {/* Comment Content */}
            <div className="flex-1 min-w-0">
              <span className="text-[#37322F] text-[9px] md:text-[11px] font-semibold">{comment.coach}</span>
              <span className="text-[#9CA3AF] text-[8px] md:text-[10px]"> – </span>
              <span className="text-[#6B7280] text-[8px] md:text-[10px] leading-tight">
                {comment.feedback}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Challenge Progress Illustration Component
function ChallengeProgressIllustration() {
  const weeks = [
    { label: "Week 1", status: "Complete", icon: "check" },
    { label: "Week 2", status: "Complete", icon: "check" },
    { label: "Week 3", status: "In Progress", icon: "progress" },
    { label: "Graduation Call", status: "Locked", icon: "lock" },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Card Container */}
      <div className="w-full max-w-[280px] md:max-w-[320px] bg-white rounded-xl border border-[#E5E0DB] shadow-sm p-4 md:p-5">
        {/* Header */}
        <h4 className="text-[#37322F] text-sm md:text-base font-semibold text-center mb-3" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
          Challenge Progress
        </h4>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-2.5 md:h-3 bg-[#E5E0DB] rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#49423D] rounded-full" />
          </div>
          <span className="text-[#49423D] text-xs md:text-sm font-medium">75%</span>
        </div>

        {/* Week List */}
        <div className="flex flex-col gap-2 md:gap-2.5">
          {weeks.map((week, idx) => (
            <div key={idx} className={`flex items-center gap-2.5 ${idx !== weeks.length - 1 ? 'pb-2 md:pb-2.5 border-b border-[#E5E0DB]' : ''}`}>
              {/* Icon */}
              {week.icon === "check" && (
                <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#7CB342] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              {week.icon === "progress" && (
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] border-[#49423D] flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#C4BCB5]" />
                </div>
              )}
              {week.icon === "lock" && (
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 text-[#C4BCB5]">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                </div>
              )}
              {/* Text */}
              <span className="text-[#49423D] text-[11px] md:text-sm font-medium">
                {week.label} — {week.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Win Money Back Illustration Component
function WinMoneyBackIllustration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 md:gap-3">
      {/* Top Card - Challenge Complete */}
      <div className="w-full max-w-[240px] md:max-w-[280px] bg-white rounded-xl border border-[#E5E0DB] shadow-sm p-2.5 md:p-3">
        <h4 className="text-[#37322F] text-xs md:text-sm font-semibold text-center" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
          Challenge Complete
        </h4>
        <p className="text-[#9CA3AF] text-[9px] md:text-[10px] text-center mb-1.5 md:mb-2">
          Membership unlocked
        </p>
        {/* Credit Button */}
        <div className="w-full bg-[#49423D] rounded-md py-1.5 md:py-2 px-2 flex items-center justify-center gap-1.5">
          <span className="text-white/80 text-[9px] md:text-[10px] font-medium">Credit applied</span>
          <span className="text-white text-xs md:text-sm font-bold">+$147</span>
        </div>
      </div>

      {/* Divider with "or" */}
      <div className="flex items-center gap-2 w-full max-w-[160px]">
        <div className="flex-1 h-px bg-[#E5E0DB]" />
        <span className="text-[#9CA3AF] text-[9px] md:text-[10px]">or</span>
        <div className="flex-1 h-px bg-[#E5E0DB]" />
      </div>

      {/* Bottom Card - Refund */}
      <div className="w-full max-w-[240px] md:max-w-[280px] bg-white rounded-xl border border-[#E5E0DB] shadow-sm p-2.5 md:p-3">
        <h4 className="text-[#37322F] text-xs md:text-sm font-semibold text-center" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
          Not for you?
        </h4>
        <p className="text-[#9CA3AF] text-[9px] md:text-[10px] text-center border-b border-[#E5E0DB] pb-1.5 md:pb-2 mb-1.5 md:mb-2">
          Full refund
        </p>
        <p className="text-[#49423D] text-base md:text-xl font-bold text-center" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
          $147
        </p>
      </div>
    </div>
  )
}

// Badge Component (matching Brilliance)
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function ChallengeDetailsSection() {
  return (
    <div id="how-it-works" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-white scroll-mt-16">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal leading-tight md:leading-[60px] tracking-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
            The 21-Day Challenge
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Oracle Boxing isn't for everyone. It's not a gym. It's not just a course.
            <br className="hidden sm:block" />
            It's a movement. And membership is earned.
          </div>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative pattern */}
        <div className="hidden sm:block sm:w-4 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-0 sm:border-l sm:border-r border-[rgba(55,50,47,0.12)] bg-white">
          {/* Top Left - Show Up Twice a Week */}
          <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                Show up. Twice a week.
              </h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Attend 2 live coaching calls per week. That's the bare minimum to stay on track and build momentum.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
              <LiveCoachingCalendar />
            </div>
          </div>

          {/* Top Right - Submit Videos for Review */}
          <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] font-semibold leading-tight text-lg sm:text-xl" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                Get feedback on your technique
              </h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Submit 1 video per week and get detailed feedback from our coaches. Watch your technique improve in real time.
              </p>
            </div>
            <div className="w-full h-[280px] sm:h-[280px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center">
              <FeedbackIllustration />
            </div>
          </div>

          {/* Bottom Left - Track Your Progress */}
          <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                Work through Grade 1
              </h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Follow our structured curriculum and get weekly feedback on your progress. Complete 21 days and book your graduation call.
              </p>
            </div>
            <div className="w-full h-[260px] sm:h-[260px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center">
              <ChallengeProgressIllustration />
            </div>
          </div>

          {/* Bottom Right - Two Outcomes */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                Win your money back
              </h3>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                Complete the challenge and your $147 becomes credit towards full membership. Not for you? Full refund. No hard feelings.
              </p>
            </div>
            <div className="w-full h-[280px] sm:h-[280px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center">
              <WinMoneyBackIllustration />
            </div>
          </div>
        </div>

        {/* Right decorative pattern */}
        <div className="hidden sm:block sm:w-4 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
