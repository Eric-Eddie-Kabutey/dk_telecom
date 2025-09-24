'use client';

export default function WaterfallBottomSVG() {
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
          <path d="M122 234L122 348" stroke="url(#paint5_linear_3548_4089)" className="waterfall-line waterfall-1" />
          <path d="M340 207L340 321" stroke="url(#paint2_linear_3548_4089)" className="waterfall-line waterfall-2" />
          <path d="M194.5 17V81.0036" stroke="url(#paint3_linear_3548_4089)" className="waterfall-line waterfall-3" />
          <path d="M487 171L487 205" stroke="url(#paint4_linear_3548_4089)" className="waterfall-line waterfall-4" />
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
        
        /* Dot animations - horizontal movement */
        .dot {
          animation: dotMove 4s ease-in-out infinite;
        }
        
        .dot-1 { animation-delay: 0s; }
        .dot-2 { animation-delay: 0.7s; }
        .dot-3 { animation-delay: 1.4s; }
        .dot-4 { animation-delay: 2.1s; }
        .dot-5 { animation-delay: 2.8s; }
        .dot-6 { animation-delay: 3.5s; }
        
        @keyframes dotMove {
          0%, 100% {
            transform: translateX(-8px);
            opacity: 0.6;
          }
          25% {
            transform: translateX(8px);
            opacity: 1;
          }
          50% {
            transform: translateX(-8px);
            opacity: 0.8;
          }
          75% {
            transform: translateX(8px);
            opacity: 1;
          }
        }
        
        /* Dot pulse effect */
        .dot:nth-child(odd) {
          animation: dotPulseOdd 3s ease-in-out infinite;
        }
        
        .dot:nth-child(even) {
          animation: dotPulseEven 3s ease-in-out infinite;
        }
        
        @keyframes dotPulseOdd {
          0%, 100% {
            transform: scale(1) translateX(-5px);
          }
          50% {
            transform: scale(1.3) translateX(5px);
          }
        }
        
        @keyframes dotPulseEven {
          0%, 100% {
            transform: scale(1) translateX(5px);
          }
          50% {
            transform: scale(1.3) translateX(-5px);
          }
        }
        
        /* Waterfall line animations */
        .waterfall-line {
          stroke-dasharray: 5 10;
          stroke-dashoffset: 0;
          animation: waterfallFlow 2s linear infinite;
        }
        
        .waterfall-1 { 
          animation-duration: 1.8s;
          animation-delay: 0s;
        }
        .waterfall-2 { 
          animation-duration: 2.2s;
          animation-delay: 0.3s;
        }
        .waterfall-3 { 
          animation-duration: 1.5s;
          animation-delay: 0.6s;
        }
        .waterfall-4 { 
          animation-duration: 2.5s;
          animation-delay: 0.9s;
        }
        
        @keyframes waterfallFlow {
          0% {
            stroke-dashoffset: 15;
            opacity: 0.3;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        /* Enhanced waterfall effect with glow */
        .waterfall-line {
          filter: drop-shadow(0 0 3px rgba(255, 220, 85, 0.6));
        }
        
        /* Waterfall line glow effect */
        .waterfall-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(255, 220, 85, 0.3) 0%, transparent 70%);
          animation: waterfallGlow 2s ease-in-out infinite;
        }
        
        @keyframes waterfallGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
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