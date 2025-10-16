import React, { useState, useEffect } from 'react';
import './App.css';

// Array of inspirational quotes
const quotes = [
  "You are capable of amazing things! 🌟",
  "Every day is a fresh start! 🌅",
  "Believe in yourself and all that you are! ✨",
  "Your potential is limitless! 🚀",
  "Dream big, work hard, stay focused! 💪",
  "You're stronger than you think! 💎",
  "Every challenge is an opportunity! 🌈",
  "Success is a journey, not a destination! 🎯",
  "You have the power to change your world! 🌍",
  "Keep going, you're doing great! 🎉",
  "Your dreams are valid! 🌙",
  "Today is full of possibilities! 🌸",
  "You are worthy of all good things! 💖",
  "Trust the process! 🌊",
  "You're exactly where you need to be! 🎪"
];

function App() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Initialize with a random quote
  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  // Handle button click to get new quote
  const handleNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Smiley Animation */}
        <div className="smiley-container">
          <div className={`smiley ${isAnimating ? 'bounce' : ''}`}>
            <div className="smiley-face">
              <div className="eye left-eye"></div>
              <div className="eye right-eye"></div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>

        {/* Hello World Message */}
        <h1 className="hello-world">Hello World!</h1>

        {/* Inspirational Quote */}
        <div className={`quote-container ${isAnimating ? 'fade' : ''}`}>
          <p className="quote">{currentQuote}</p>
        </div>

        {/* Cat Button */}
        <button className="cat-button" onClick={handleNewQuote}>
          <div className="cat-face">
            <div className="cat-ear left-ear"></div>
            <div className="cat-ear right-ear"></div>
            <div className="cat-eye left-cat-eye"></div>
            <div className="cat-eye right-cat-eye"></div>
            <div className="cat-nose"></div>
            <div className="cat-mouth"></div>
            <div className="cat-whisker left-whisker-1"></div>
            <div className="cat-whisker left-whisker-2"></div>
            <div className="cat-whisker right-whisker-1"></div>
            <div className="cat-whisker right-whisker-2"></div>
          </div>
          <span className="button-text">New Quote</span>
        </button>
      </div>
    </div>
  );
}

export default App;
