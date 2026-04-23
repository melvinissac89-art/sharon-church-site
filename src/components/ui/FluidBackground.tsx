import React from 'react'

export default function FluidBackground() {
  return (
    <>
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Decorative Canvas: Triple-Curve Wave Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-surface-container-lowest overflow-hidden">
        <svg 
          className="w-full h-full object-cover" 
          preserveAspectRatio="xMaxYMid slice" 
          viewBox="0 0 1440 900" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient 1: Deep Blue to Vibrant Purple */}
            <linearGradient id="wave-grad-1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4648d4" />
              <stop offset="100%" stopColor="#6063ee" />
            </linearGradient>
            
            {/* Gradient 2: Bright Pink to Soft Orange */}
            <linearGradient id="wave-grad-2" x1="20%" x2="80%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="#fd56a7" />
              <stop offset="100%" stopColor="#ffb95f" />
            </linearGradient>

            {/* Gradient 3: Golden Yellow to Soft Pink */}
            <linearGradient id="wave-grad-3" x1="0%" x2="100%" y1="50%" y2="50%">
              <stop offset="0%" stopColor="#ffddb8" />
              <stop offset="100%" stopColor="#ffb0cd" />
            </linearGradient>
            
            {/* Soft Drop Shadow for depth between ribbons */}
            <filter id="ribbon-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-10" dy="15" stdDeviation="25" floodColor="#4648d4" floodOpacity="0.15" />
            </filter>
          </defs>
          
          {/* Base ambient glow on the right */}
          <ellipse cx="1200" cy="450" rx="400" ry="600" fill="#eaedff" opacity="0.5" filter="blur(80px)" />
          
          {/* Ribbon 1 (Back Layer): Blue/Purple */}
          <path 
            d="M1100, -150 C600, 200 850, 650 1500, 850" 
            fill="none" 
            stroke="url(#wave-grad-1)" 
            strokeWidth="160" 
            strokeLinecap="round" 
            opacity="0.95" 
            filter="url(#ribbon-shadow)" 
          />
          
          {/* Ribbon 2 (Middle Layer): Pink/Orange crossing over */}
          <path 
            d="M1450, -50 C850, 150 650, 700 1250, 1050" 
            fill="none" 
            stroke="url(#wave-grad-2)" 
            strokeWidth="120" 
            strokeLinecap="round" 
            opacity="0.9" 
            filter="url(#ribbon-shadow)" 
          />
          
          {/* Ribbon 3 (Front Layer): Yellow/Pink fluid accent */}
          <path 
            d="M1600, 250 C950, 350 550, 800 1050, 1200" 
            fill="none" 
            stroke="url(#wave-grad-3)" 
            strokeWidth="140" 
            strokeLinecap="round" 
            opacity="0.85" 
            filter="url(#ribbon-shadow)" 
          />
        </svg>
      </div>
    </>
  )
}
