"use client"

import Link from "next/link"

export default function PricingSection() {
  const packages = [
    {
      id: "21dc-entry",
      name: "Entry",
      price: 147,
      description: "Everything you need to start mastering the fundamentals.",
      features: [
        "11 Live Classes Per Week",
        "Private Community Access",
        "Boxing Roadmap Course",
        "1-on-1 Graduation Call",
        "Money-Back Guarantee",
      ],
      featured: false,
      ctaText: "Get Started",
    },
    {
      id: "21dc-premium",
      name: "Premium",
      price: 297,
      description: "Go deeper with additional courses and recordings.",
      features: [
        "Everything in Entry",
        "Full Recordings Vault",
        "First Principles Course",
      ],
      featured: true,
      ctaText: "Get Premium",
    },
    {
      id: "21dc-vip",
      name: "VIP",
      price: 497,
      description: "The complete experience with 1-1 coaching and gear.",
      features: [
        "Everything in Premium",
        "Jump-Start Coaching Call",
        "Oracle Boxing Tracksuit",
      ],
      featured: false,
      ctaText: "Get VIP Access",
    },
  ]

  return (
    <div id="pricing" className="w-full flex flex-col justify-center items-center gap-2 scroll-mt-8">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[700px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              21-Day Fundamentals Challenge
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Three Packages Tailored To Your Needs
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Not Having Solid Fundamentals Is Costing You Progress Every Single Day.
            <br />
            The Longer You Train Bad Habits, The Harder It Is To Correct Them Later.
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Left Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Pricing Cards Container */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch gap-0 py-12 md:py-0">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex-1 max-w-full md:max-w-none self-stretch px-6 py-8 border border-[rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-between items-start gap-8 ${
                  pkg.featured
                    ? "bg-[#37322F]"
                    : "bg-white"
                }`}
              >
                {/* Plan Header */}
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div
                      className={`text-lg font-medium leading-7 font-sans ${
                        pkg.featured ? "text-[#FBFAF9]" : "text-[rgba(55,50,47,0.90)]"
                      }`}
                    >
                      {pkg.name}
                    </div>
                    <div
                      className={`w-full max-w-[280px] text-sm font-normal leading-5 font-sans ${
                        pkg.featured ? "text-[#B2AEA9]" : "text-[rgba(41,37,35,0.70)]"
                      }`}
                    >
                      {pkg.description}
                    </div>
                  </div>

                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-medium leading-[60px] font-serif ${
                          pkg.featured ? "text-[#F0EFEE]" : "text-[#37322F]"
                        }`}
                      >
                        ${pkg.price}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium font-sans ${
                        pkg.featured ? "text-[#D2C6BF]" : "text-[#847971]"
                      }`}
                    >
                      one-time payment
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/checkout?product=${pkg.id}`}
                    className={`self-stretch px-4 py-[12px] relative shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center ${
                      pkg.featured
                        ? "bg-[#FBFAF9]"
                        : "bg-[#37322F]"
                    }`}
                  >
                    <div
                      className={`text-[14px] font-medium leading-5 font-sans ${
                        pkg.featured ? "text-[#37322F]" : "text-[#FBFAF9]"
                      }`}
                    >
                      {pkg.ctaText}
                    </div>
                  </Link>
                </div>

                {/* Features */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="self-stretch flex justify-start items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke={pkg.featured ? "#FF8000" : "#37322F"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div
                        className={`flex-1 text-sm font-medium leading-5 font-sans ${
                          pkg.featured ? "text-[#F0EFEE]" : "text-[#49423D]"
                        }`}
                      >
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Decorative Pattern */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WYMB Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-[700px] flex flex-col items-center gap-6">
          <div className="text-center text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
            Why The Win Your Money Back (WYMB) Feature?
          </div>
          <div className="text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            The WYMB feature means if you complete the BARE MINIMUM required from our battle-tested programme, we'll refund your entire investment for this challenge.
            <br /><br />
            This holds you accountable so that you show up twice per week for our live classes and once per week for a video review.
            <br /><br />
            And it gives us an opportunity to see if you're a good fit for the Oracle Boxing Community.
          </div>
        </div>
      </div>
    </div>
  )
}
