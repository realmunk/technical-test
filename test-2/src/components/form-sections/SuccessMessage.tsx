import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'


interface SuccessMessageProps {
  message: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (message) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5s
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!message) return null;

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          aria-hidden="true"
        />
      )}
      <div 
        role="status" 
        aria-live="polite"
        aria-atomic="true"
        className="relative z-50 rounded-lg bg-green-50 p-4 shadow-sm"
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg 
              className="h-5 w-5 text-green-400"
              viewBox="0 0 20 20" 
              fill="currentColor" 
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          <p className="ml-3 text-sm font-medium text-green-800">{message}</p>
        </div>
      </div>
    </>
  );
}; 