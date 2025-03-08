// pages/shop.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/shop.module.css';
import { usePrompt } from "../context/PromptContext";

export default function Shop() {
  const { tokens, setTokens } = usePrompt();
  const [availableFish, setAvailableFish] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const mockShopFish = [
      { id: 101, type: 'Goldfish', rarity: 'Common', color: '#FFD700', price: 50 },
      { id: 102, type: 'Betta', rarity: 'Uncommon', color: '#4169E1', price: 100 },
      { id: 103, type: 'Angelfish', rarity: 'Rare', color: '#C0C0C0', price: 200 },
      { id: 104, type: 'Guppy', rarity: 'Common', color: '#FF6347', price: 50 },
      { id: 105, type: 'Koi', rarity: 'Rare', color: '#FF4500', price: 250 },
      { id: 106, type: 'Neon Tetra', rarity: 'Uncommon', color: '#00BFFF', price: 120 },
      { id: 107, type: 'Clownfish', rarity: 'Rare', color: '#FF7F50', price: 300 },
      { id: 108, type: 'Molly', rarity: 'Common', color: '#32CD32', price: 75 }
    ];
    
    setAvailableFish(mockShopFish);
  }, []);

  const handlePurchase = (fish) => {
    if (tokens >= fish.price) {
      setTokens(tokens - fish.price);

      const userFish = JSON.parse(localStorage.getItem('userFish') || '[]');
      const newFish = {
        ...fish,
        id: Date.now(),
        size: fish.rarity === 'common' ? 30 + Math.random() * 10 : 
              fish.rarity === 'uncommon' ? 40 + Math.random() * 15 : 
              50 + Math.random() * 20,
        speed: fish.rarity === 'common' ? 2 + Math.random() * 2 : 
               fish.rarity === 'uncommon' ? 1.5 + Math.random() : 
               1 + Math.random()
      };
      userFish.push(newFish);
      localStorage.setItem('userFish', JSON.stringify(userFish));
      
      setNotification({
        type: 'success',
        message: `You purchased a ${fish.type} for ${fish.price} tokens!`
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } else {
      setNotification({
        type: 'error',
        message: 'Not enough tokens!'
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fish Shop</title>
        <meta name="description" content="Redeem tokens for fish" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navigation}>
          <Link href="/fishTank" className={styles.navLink}>
            Back to Tank
          </Link>
          <div></div>
        </div>
        <div className={styles.tokenBar}>
          <div className={styles.tokenCount}>
            <span className={styles.tokenIcon}>🪙</span>
            <span>{tokens} Tokens</span>
          </div>
        </div>
      </header>

      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}

      <main className={styles.main}>
        <div className={styles.shopIntro}>
          <h2>Welcome to the Fish Shop!</h2>
          <p>Spend your earned tokens on new fish for your tank. Rarer fish cost more tokens.</p>
          <p className={styles.earnTip}>
            <span className={styles.tipIcon}>💡</span>
            <span>Earn more tokens by using our AI search and saving energy!</span>
          </p>
        </div>
        
        <div className={styles.fishGrid}>
          {availableFish.map(fish => (
            <div key={fish.id} className={styles.fishCard}>
              <div className={styles.fishPreview} style={{ backgroundColor: fish.color }}>
                <div className={styles.tail}></div>
                <div className={styles.eye}></div>
              </div>
              <div className={styles.fishDetails}>
                <h3 className={styles.fishName}>{fish.type}</h3>
                <p className={`${styles.fishRarity} ${styles[fish.rarity]}`}>
                  {fish.rarity}
                </p>
                <div className={styles.fishPrice}>
                  <span className={styles.tokenIcon}>🪙</span>
                  <span>{fish.price}</span>
                </div>
              </div>
              <button 
                className={`${styles.buyButton} ${tokens < fish.price ? styles.disabled : ''}`}
                onClick={() => handlePurchase(fish)}
                disabled={tokens < fish.price}
              >
                {tokens >= fish.price ? 'Buy' : 'Not enough tokens'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}