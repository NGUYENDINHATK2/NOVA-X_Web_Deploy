// components/BlinkingStar.tsx
import React from 'react';

const BlinkingStar = ({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .blink {
          animation: blink 1.2s infinite ease-in-out;
        }
      `}</style>
      <span
        className={`inline-block text-white blink ${className}`}
        style={{ fontSize: '1.25rem', lineHeight: 1, ...style }}
      >
        ✦
      </span>
    </>
  );
};

export default BlinkingStar;
