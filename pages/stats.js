// pages/emoji-stats.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/stats.module.css';
import { calculateSavings } from '../components/calculateSavings';
import { usePrompt } from "../context/PromptContext";

export default function EmojiStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { promptNum } = usePrompt();
  const savings = calculateSavings(10);
  const emojiStats = [
    { emoji: "💡", label: "ENERGY SAVED", value: savings.energySavedWh },
    { emoji: "💧", label: "WATER SAVED", value: savings.waterSaved },
    { emoji: "🌍", label: "CO2 EMISSIONS SAVED", value: savings.co2Saved },
    { emoji: "🚗", label: "MILES SAVED", value: savings.milesSaved },
    { emoji: "📱", label: "SMARTPHONE HOURS SAVED", value: savings.smartphoneHoursSaved },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emojiStats.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + emojiStats.length) % emojiStats.length);
  };

  const handleSwipe = (e) => {
    const touchStartX = e.touches[0].clientX;
    
    const handleTouchMove = (e) => {
      const touchEndX = e.touches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    
    document.addEventListener('touchmove', handleTouchMove, { once: true });
  };

  const current = emojiStats[currentIndex];

  return (
    <div className={styles.container}>
      <Head>
        <title>Stats</title>
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
            🏠
        </Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Saving Stats</h1>
        
        <div 
          className={styles.carouselContainer}
          onTouchStart={handleSwipe}
        >
          <button 
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous emoji"
          >
            ←
          </button>
          
          <div className={styles.emojiCard}>
            <div className={styles.emoji}>
              {current.emoji}
            </div>
            <h2 className={styles.statLabel}>{current.label}</h2>
            <p className={styles.statValue}>{current.value}</p>
          </div>
          
          <button 
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next emoji"
          >
            →
          </button>
        </div>

        <div className={styles.indicators}>
          {emojiStats.map((item, index) => (
            <div 
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${item.label}`}
            ></div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}