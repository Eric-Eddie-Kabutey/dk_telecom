'use client';

export default function FooterDividerSVG() {
  return (
    <div className="footer-divider-animated absolute inset-x-0 bottom-0">
      <style jsx>{`
        .footer-divider-animated {
          display: flex;
          height: 1px;
          width: 100%;
          opacity: 0.3;
          background: linear-gradient(90deg, #ffb923, #3538ff 50%, #ffb923);
          background-size: 200% 100%;
          animation: gradientShift 4s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}