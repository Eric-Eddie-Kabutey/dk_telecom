'use client';

export default function WaterfallSVG() {
  return (
    <div className="grid-animation-container">
      <svg 
        width="609" 
        height="1285" 
        viewBox="0 0 609 1285" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="grid-svg"
      >
        {/* Grid Lines */}
        <line x1="121.5" y1="2.18557e-08" x2="121.5" y2="1044" stroke="#404A55" className="grid-line" />
        <line x1="194.5" y1="2.18557e-08" x2="194.5" y2="867" stroke="#404A55" className="grid-line" />
        <line x1="267.5" y1="2.18557e-08" x2="267.5" y2="1044" stroke="#404A55" className="grid-line" />
        <line x1="340.5" y1="2.18557e-08" x2="340.5" y2="866" stroke="#404A55" className="grid-line" />
        <line x1="413.5" y1="2.18557e-08" x2="413.5" y2="1044" stroke="#404A55" className="grid-line" />
        <line x1="486.5" y1="2.18557e-08" x2="486.5" y2="1044" stroke="#404A55" className="grid-line" />
        <line x1="559.5" y1="2.18557e-08" x2="559.5" y2="840" stroke="#404A55" className="grid-line" />
        
        {/* Diagonal Paths */}
        <path 
          opacity="0.5" 
          d="M341 260.5H268V188H0" 
          stroke="url(#paint0_linear_3548_4089)" 
          className="diagonal-path"
        />
        <path 
          opacity="0.5" 
          d="M268 946.5H341V874H609" 
          stroke="url(#paint1_linear_3548_4089)" 
          className="diagonal-path"
        />
        
        {/* Animated Dots */}
        <g className="dot-animation-group">
          <rect x="266" y="520" width="3" height="3" fill="#FBD956" className="dot dot-1" />
          <rect x="558" y="207" width="3" height="3" fill="#FBD956" className="dot dot-2" />
          <rect x="485" y="246" width="3" height="3" fill="#FBD956" className="dot dot-3" />
          <rect x="193" y="85" width="3" height="3" fill="#FBD956" className="dot dot-4" />
          <rect x="339" y="327" width="3" height="3" fill="#FBD956" className="dot dot-5" />
          <rect x="193" y="547" width="3" height="3" fill="#FBD956" className="dot dot-6" />
        </g>
        
        {/* Waterfall Lines */}
        <g className="waterfall-group">
          {/* Main waterfall lines */}
          <path d="M122 234L122 348" stroke="url(#paint5_linear_3548_4089)" className="waterfall-line waterfall-1" />
          <path d="M340 207L340 321" stroke="url(#paint2_linear_3548_4089)" className="waterfall-line waterfall-2" />
          <path d="M194.5 17V81.0036" stroke="url(#paint3_linear_3548_4089)" className="waterfall-line waterfall-3" />
          <path d="M487 171L487 205" stroke="url(#paint4_linear_3548_4089)" className="waterfall-line waterfall-4" />
          
          {/* Additional waterfall droplets */}
          <circle cx="122" cy="240" r="1" fill="#FFDC55" className="waterfall-droplet droplet-1" />
          <circle cx="122" cy="260" r="1" fill="#FFDC55" className="waterfall-droplet droplet-2" />
          <circle cx="122" cy="280" r="1" fill="#FFDC55" className="waterfall-droplet droplet-3" />
          <circle cx="122" cy="300" r="1" fill="#FFDC55" className="waterfall-droplet droplet-4" />
          <circle cx="122" cy="320" r="1" fill="#FFDC55" className="waterfall-droplet droplet-5" />
          
          <circle cx="340" cy="215" r="1" fill="#FFDC55" className="waterfall-droplet droplet-6" />
          <circle cx="340" cy="235" r="1" fill="#FFDC55" className="waterfall-droplet droplet-7" />
          <circle cx="340" cy="255" r="1" fill="#FFDC55" className="waterfall-droplet droplet-8" />
          <circle cx="340" cy="275" r="1" fill="#FFDC55" className="waterfall-droplet droplet-9" />
          <circle cx="340" cy="295" r="1" fill="#FFDC55" className="waterfall-droplet droplet-10" />
          
          <circle cx="194.5" cy="25" r="1" fill="#FFDC55" className="waterfall-droplet droplet-11" />
          <circle cx="194.5" cy="40" r="1" fill="#FFDC55" className="waterfall-droplet droplet-12" />
          <circle cx="194.5" cy="55" r="1" fill="#FFDC55" className="waterfall-droplet droplet-13" />
          <circle cx="194.5" cy="70" r="1" fill="#FFDC55" className="waterfall-droplet droplet-14" />
          
          <circle cx="487" cy="175" r="1" fill="#FFDC55" className="waterfall-droplet droplet-15" />
          <circle cx="487" cy="185" r="1" fill="#FFDC55" className="waterfall-droplet droplet-16" />
          <circle cx="487" cy="195" r="1" fill="#FFDC55" className="waterfall-droplet droplet-17" />
        </g>
        
        {/* Corner Marker */}
        <rect x="557" y="1280" width="5" height="5" fill="white" className="corner-marker" />
        
        <defs>
          <linearGradient 
            id="paint0_linear_3548_4089" 
            x1="0" 
            y1="224.25" 
            x2="341" 
            y2="224.25" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD32B" stopOpacity="0" />
            <stop offset="1" stopColor="#FFD32B" />
          </linearGradient>
          
          <linearGradient 
            id="paint1_linear_3548_4089" 
            x1="609" 
            y1="910.25" 
            x2="268" 
            y2="910.25" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD32B" stopOpacity="0" />
            <stop offset="1" stopColor="#FFD32B" />
          </linearGradient>
          
          <linearGradient 
            id="paint2_linear_3548_4089" 
            x1="340.5" 
            y1="321" 
            x2="340.5" 
            y2="207" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDC55" />
            <stop offset="1" stopColor="#FFDC55" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient 
            id="paint3_linear_3548_4089" 
            x1="195.5" 
            y1="81" 
            x2="195.5" 
            y2="17" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDC55" />
            <stop offset="1" stopColor="#FFDC55" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient 
            id="paint4_linear_3548_4089" 
            x1="487.5" 
            y1="205" 
            x2="487.5" 
            y2="171" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDC55" />
            <stop offset="1" stopColor="#FFDC55" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient 
            id="paint5_linear_3548_4089" 
            x1="122.5" 
            y1="348" 
            x2="122.5" 
            y2="234" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDC55" />
            <stop offset="1" stopColor="#FFDC55" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        .grid-animation-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }
        
        .grid-svg {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
        
        /* Grid lines subtle animation */
        .grid-line {
          animation: gridPulse 8s ease-in-out infinite;
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        /* Diagonal paths animation */
        .diagonal-path {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawDiagonal 6s ease-in-out infinite;
        }
        
        @keyframes drawDiagonal {
          0% {
            stroke-dashoffset: 500;
            opacity: 0.3;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 0.7;
          }
          100% {
            stroke-dashoffset: -500;
            opacity: 0.3;
          }
        }
        
        /* Dot animations */
        .dot {
          animation: dotPulse 2s ease-in-out infinite;
          transform-origin: center;
        }
        
        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.3s; }
        .dot-3 { animation-delay: 0.6s; }
        .dot-4 { animation-delay: 0.9s; }
        .dot-5 { animation-delay: 1.2s; }
        .dot-6 { animation-delay: 1.5s; }
        
        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
        
        /* Waterfall line animations */
        .waterfall-line {
          stroke-dasharray: 10 5;
          stroke-dashoffset: 0;
          animation: waterfallFlow 2s linear infinite;
        }
        
        .waterfall-1 { animation-duration: 1.8s; }
        .waterfall-2 { animation-duration: 2.2s; }
        .waterfall-3 { animation-duration: 1.5s; }
        .waterfall-4 { animation-duration: 2.5s; }
        
        @keyframes waterfallFlow {
          0% {
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: 15;
            opacity: 1;
          }
        }
        
        /* Waterfall droplet animations */
        .waterfall-droplet {
          animation: dropletFall 3s ease-in infinite;
          opacity: 0;
        }
        
        /* Stagger the droplet animations */
        .droplet-1 { animation-delay: 0s; }
        .droplet-2 { animation-delay: 0.2s; }
        .droplet-3 { animation-delay: 0.4s; }
        .droplet-4 { animation-delay: 0.6s; }
        .droplet-5 { animation-delay: 0.8s; }
        .droplet-6 { animation-delay: 0.1s; }
        .droplet-7 { animation-delay: 0.3s; }
        .droplet-8 { animation-delay: 0.5s; }
        .droplet-9 { animation-delay: 0.7s; }
        .droplet-10 { animation-delay: 0.9s; }
        .droplet-11 { animation-delay: 0.15s; }
        .droplet-12 { animation-delay: 0.35s; }
        .droplet-13 { animation-delay: 0.55s; }
        .droplet-14 { animation-delay: 0.75s; }
        .droplet-15 { animation-delay: 0.25s; }
        .droplet-16 { animation-delay: 0.45s; }
        .droplet-17 { animation-delay: 0.65s; }
        
        @keyframes dropletFall {
          0% {
            transform: translateY(-10px);
            opacity: 0;
            r: 0.5;
          }
          10% {
            opacity: 1;
            r: 1;
          }
          90% {
            opacity: 0.8;
            r: 1;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
            r: 0.5;
          }
        }
        
        /* Enhanced waterfall effect with glow */
        .waterfall-line {
          filter: drop-shadow(0 0 2px rgba(255, 220, 85, 0.5));
        }
        
        /* Corner marker animation */
        .corner-marker {
          animation: cornerGlow 4s ease-in-out infinite;
        }
        
        @keyframes cornerGlow {
          0%, 100% {
            opacity: 0.3;
            fill: #FFFFFF;
          }
          50% {
            opacity: 1;
            fill: #FBD956;
          }
        }
        
        /* Enhanced animations for better performance */
        .grid-svg * {
          transform-box: fill-box;
        }
      `}</style>
    </div>
  );
}