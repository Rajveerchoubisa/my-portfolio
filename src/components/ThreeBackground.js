import React from 'react';

const SpaceBackground = () => {
  const starCount = 150; // Number of stars
  const circleCount = 10; // Number of circles for the background

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Animated Background Layer: Alternates from Black to Dark Blue */}
      <div className="w-full h-full bg-black animate-background"></div>

      {/* Render stars */}
      {[...Array(starCount)].map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            opacity: Math.random() * 0.5 + 0.5, // Ensures stars have a minimum opacity
          }}
        />
      ))}

      {/* Render background circles */}
      {[...Array(circleCount)].map((_, index) => (
        <div
          key={index}
          className="background-circle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            width: `${Math.random() * 100 + 50}px`, // Random width between 50 and 150px
            height: `${Math.random() * 100 + 50}px`, // Random height between 50 and 150px
            opacity: Math.random() * 0.2 + 0.1, // Minimum opacity for circles
          }}
        />
      ))}

      <style jsx>{`
        .star {
          position: absolute;
          background: rgba(255, 255, 255, 0.8); // Soft white for stars
          border-radius: 50%;
          width: 2px;
          height: 2px;
          animation: twinkle 1.5s infinite alternate;
        }
        .background-circle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1); // Soft white for background circles
          border-radius: 50%;
          animation: pulse 4s infinite alternate; // Optional animation for background circles
        }
        @keyframes twinkle {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          100% { transform: scale(1.3); opacity: 0.3; }
        }
        @keyframes backgroundAnimation {
          0%, 100% {
            background-color: #000000; // Black
          }
          50% {
            background-color: #0f172f; // Dark Blue
          }
        }
        .animate-background {
          animation: backgroundAnimation 9s ease infinite; 
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
