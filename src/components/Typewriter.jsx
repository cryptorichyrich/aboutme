import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const texts = [" a Full Stack Developer", " a DevOps", " a Project Manager"," an Entrepreneur", " a Trader"]; // Add your typewriting texts here
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  
  useEffect(() => {
    const currentText = texts[textIndex];
    
    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing mode
        setDisplayText((prev) => {
          const newText = currentText.slice(0, prev.length + 1);
          if (newText === currentText) {
            // Full text typed out, pause before deleting
            clearInterval(interval);
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
          }
          return newText;
        });
      } else {
        // Deleting mode
        setDisplayText((prev) => {
          const newText = prev.slice(0, prev.length - 1);
          if (newText === '') {
            // Fully deleted, move to next text
            clearInterval(interval);
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
          return newText;
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [isDeleting, textIndex]);

  return (
      <><span className="text-xl font-medium h-10">
          {displayText}
          <span className="animate-blink">|</span>
      </span><style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style></>      
  );
};

export default Typewriter;
