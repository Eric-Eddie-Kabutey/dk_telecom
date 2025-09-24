"use client";

import React from "react";

interface GlowingRotatingBorderProp {
    children: React.ReactNode;
    className: string;
}

export default function GlowingRotatingBorder({ children, className = "" }: GlowingRotatingBorderProp) {
  return (
    <div className={`glowing-border-container ${className}`}>
      <div className="glowing-border">
        <div className="content">
          {children}
        </div>
      </div>
      
      <style jsx>{`
        .glowing-border-container {
          display: inline-block;
          position: relative;
          padding: 0px;
          border-radius: 10px;
        }
        
        .glowing-border {
          position: relative;
          padding: 0px;
          background: transparent;
          border-radius: 8px;
        }
        
        .glowing-border::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: linear-gradient(45deg, #ffb923, #3538ff, #ffb923, #3538ff);
          background-size: 400% 400%;
          border-radius: 12px;
          animation: rotateGlow 4s ease-in-out infinite;
          opacity: 0.4;
          z-index: 0;
          filter: blur(1px);
        }
        
        .content {
          position: relative;
          z-index: 1;
          background: transparent;
          border-radius: 6px;
          padding: 0px;
        }
        
        @keyframes rotateGlow {
          0%, 100% {
            background-position: 0% 50%;
            opacity: 0.3;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}