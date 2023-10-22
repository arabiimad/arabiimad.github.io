import React, { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [text, setText] = useState('Imadev');
  const phrases = ["I'madev", "I'm a dev", "I'm a developer !"];
  let phraseIndex = 0;

  useEffect(() => {
    let intervalId;

    const startAnimation = () => {
      intervalId = setInterval(() => {
        if (phraseIndex === phrases.length - 1) {
          clearInterval(intervalId);
          // Let "I'm a developer" stay for 5 seconds
          setTimeout(() => {
            setText('Imadev'); // Reset to "Imadev"
            // Pause for another 10 seconds on "Imadev"
            setTimeout(() => {
              phraseIndex = 0; // Reset phraseIndex to start from the beginning
              startAnimation();  // Restart the animation
            }, 10000);
          }, 5000);
        } else {
          phraseIndex += 1;
          setText(phrases[phraseIndex]);
        }
      }, 1500);
    }

    startAnimation();

    // Cleanup function to clear any intervals or timeouts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="text-4xl font-bold">
      {text.split(' ').map((word, index) => {
        if (word === "Imadev") {
          return (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
              {word}
            </span>
          );
        } else if (word === "I'madev") {
          return (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
                I
              </span>
              {'\''}
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
                madev
              </span>
            </span>
          );
        } else if (word === "I'm") {
          return (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
                I
              </span>
              {'\''}
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-800 via-yellow-600 to-yellow-400">
                m
              </span>
            </span>
          );
        } else if (word === "a") {
          return (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-500 via-yellow-500 to-yellow-200">
              {word}
            </span>
          );
        } else if (word === "dev") {
          return (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-500 via-yellow-500 to-yellow-200">
              {word}
            </span>
          );
        } else if (word === "developer") {
          return (
            <span key={index}>
              <span className="text-transparent bg-clip-text bg-gradient-to-br  from-orange-500 via-yellow-500 to-yellow-200">
                dev
              </span>
              eloper
            </span>
          );
        } else if (word === "!") {
          return word;
        }
      })}
    </div>
  );
};

export default AnimatedLogo;
