'use client'

export function TransformationShowcase() {
  const benefits = [
    {
      title: "Self-Mastery",
      description: "Watch yourself improve every day and build real confidence."
    },
    {
      title: "Self-Defence",
      description: "Know you can protect yourself if you ever need to."
    },
    {
      title: "Get In Shape",
      description: "Burn fat, build muscle, and feel stronger than ever."
    },
    {
      title: "Mental Toughness",
      description: "Push past your comfort zone and grow resilience."
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 px-2 md:px-0">
      {/* Outer container with thick border pattern */}
      <div className="w-full max-w-[1800px] mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ padding: '8px' }}
        >
          {/* Pattern border background */}
          <div className="absolute inset-0 bg-[#37322F] overflow-hidden rounded-2xl">
            {/* Animated flowing ribbons/orbs */}
            <div className="ribbon ribbon-1" />
            <div className="ribbon ribbon-2" />
            <div className="ribbon ribbon-3" />
            <div className="ribbon ribbon-4" />
            <div className="ribbon ribbon-5" />
            <div className="ribbon ribbon-6" />
            <div className="ribbon ribbon-7" />
            <div className="ribbon ribbon-8" />
            <div className="ribbon ribbon-9" />
            <div className="ribbon ribbon-10" />
          </div>

          {/* Inner white card */}
          <div className="relative bg-white p-3 md:p-4 lg:p-5 rounded-xl">
            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-10 gap-4 lg:gap-6 items-stretch">
              {/* Left column - Benefits (spans 2 cols) */}
              <div className="flex flex-col lg:col-span-2 lg:pl-4 lg:pr-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`py-4 ${index !== benefits.length - 1 ? 'border-b border-[#37322F]/15' : ''}`}>
                    <h4
                      className="text-[#37322F] text-xl font-semibold mb-1"
                      style={{ fontFamily: 'ClashDisplay, sans-serif' }}
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-[#49423D]/80 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Shalyn transformation - Middle columns (spans 4 cols) */}
              <div className="grid grid-cols-2 gap-0 lg:col-span-4">
                {/* Before Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-l-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/shalyn_before.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* BEFORE label - top left */}
                  <div className="absolute top-3 left-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-r-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/shalyn_after.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* AFTER label - top right */}
                  <div className="absolute top-3 right-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Keli transformation - Right columns (spans 4 cols) */}
              <div className="grid grid-cols-2 gap-0 lg:col-span-4">
                {/* Before Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-l-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/keli_before.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* BEFORE label - top left */}
                  <div className="absolute top-3 left-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-r-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/keli_after.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* AFTER label - top right */}
                  <div className="absolute top-3 right-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout - Videos stacked, then text */}
            <div className="lg:hidden flex flex-col gap-4">
              {/* Shalyn transformation - on top */}
              <div className="grid grid-cols-2 gap-0">
                {/* Before Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-l-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/shalyn_before.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* BEFORE label - top left */}
                  <div className="absolute top-2 left-2 bg-[#37322F]/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-white text-[10px] font-semibold tracking-wide">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-r-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/shalyn_after.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* AFTER label - top right */}
                  <div className="absolute top-2 right-2 bg-[#37322F]/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-white text-[10px] font-semibold tracking-wide">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Keli transformation - below */}
              <div className="grid grid-cols-2 gap-0">
                {/* Before Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-l-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/keli_before.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* BEFORE label - top left */}
                  <div className="absolute top-2 left-2 bg-[#37322F]/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-white text-[10px] font-semibold tracking-wide">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After Video */}
                <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-r-lg">
                  <video
                    src="https://sb.oracleboxing.com/transfo-v2/keli_after.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-[120%] h-full object-cover left-1/2 -translate-x-1/2"
                  />
                  {/* AFTER label - top right */}
                  <div className="absolute top-2 right-2 bg-[#37322F]/80 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-white text-[10px] font-semibold tracking-wide">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits text below videos on mobile */}
              <div className="flex flex-col px-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`py-4 ${index !== benefits.length - 1 ? 'border-b border-[#37322F]/15' : ''}`}>
                    <h4
                      className="text-[#37322F] text-xl font-semibold mb-1"
                      style={{ fontFamily: 'ClashDisplay, sans-serif' }}
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-[#49423D]/80 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ribbon {
          position: absolute;
          width: 400%;
          height: 100px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255,252,245,0.25) 20%,
            rgba(255,252,245,0.5) 50%,
            rgba(255,252,245,0.25) 80%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(25px);
          box-shadow:
            0 0 80px 40px rgba(255, 252, 245, 0.4),
            0 0 120px 60px rgba(255, 252, 245, 0.25),
            0 0 160px 80px rgba(255, 252, 245, 0.15);
        }
        .ribbon-1 {
          top: 0%;
          left: -150%;
          transform: rotate(-8deg);
          animation: drift1 12s ease-in-out infinite;
        }
        .ribbon-2 {
          top: 20%;
          left: -120%;
          height: 120px;
          transform: rotate(5deg);
          animation: drift2 15s ease-in-out infinite;
          animation-delay: -3s;
        }
        .ribbon-3 {
          top: 40%;
          left: -140%;
          height: 90px;
          transform: rotate(-5deg);
          animation: drift3 11s ease-in-out infinite;
          animation-delay: -5s;
        }
        .ribbon-4 {
          top: 60%;
          left: -160%;
          height: 110px;
          transform: rotate(8deg);
          animation: drift1 14s ease-in-out infinite;
          animation-delay: -8s;
        }
        .ribbon-5 {
          top: 80%;
          left: -130%;
          height: 80px;
          transform: rotate(-10deg);
          animation: drift2 10s ease-in-out infinite;
          animation-delay: -4s;
        }
        .ribbon-6 {
          top: 10%;
          left: -100%;
          height: 130px;
          transform: rotate(3deg);
          animation: drift3 16s ease-in-out infinite;
          animation-delay: -10s;
        }
        .ribbon-7 {
          top: 35%;
          left: -110%;
          height: 100px;
          transform: rotate(-6deg);
          animation: drift1 13s ease-in-out infinite;
          animation-delay: -6s;
        }
        .ribbon-8 {
          top: 55%;
          left: -90%;
          height: 85px;
          transform: rotate(4deg);
          animation: drift2 9s ease-in-out infinite;
          animation-delay: -7s;
        }
        .ribbon-9 {
          top: 75%;
          left: -170%;
          height: 95px;
          transform: rotate(-3deg);
          animation: drift3 11s ease-in-out infinite;
          animation-delay: -2s;
        }
        .ribbon-10 {
          top: 90%;
          left: -80%;
          height: 70px;
          transform: rotate(6deg);
          animation: drift1 8s ease-in-out infinite;
          animation-delay: -4s;
        }
        @keyframes drift1 {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(-8deg);
            opacity: 0.9;
          }
          50% {
            transform: translateX(90%) translateY(15px) rotate(-3deg);
            opacity: 1;
          }
        }
        @keyframes drift2 {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(5deg);
            opacity: 0.85;
          }
          50% {
            transform: translateX(85%) translateY(-20px) rotate(10deg);
            opacity: 1;
          }
        }
        @keyframes drift3 {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(-5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateX(80%) translateY(10px) rotate(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
