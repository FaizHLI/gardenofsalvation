// pages/fish-tank.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/FishTank.module.css';
import { usePrompt } from "../context/PromptContext";

export default function FishTank() {
  const { tokens } = usePrompt();
  const [userFish, setUserFish] = useState([]);
  
  useEffect(() => {
    const savedFish = localStorage.getItem('userFish');
    
    if (savedFish && JSON.parse(savedFish).length > 0) {
      setUserFish(JSON.parse(savedFish).map(fish => ({
        ...fish,
        posX: Math.random() * 80 + 10,
        posY: Math.random() * 80 + 10,
        dirX: Math.random() > 0.5 ? 1 : -1,
        dirY: Math.random() > 0.5 ? 1 : -1,
      })));
    } else {
      const defaultFish = [
      ];
      
      setUserFish(defaultFish.map(fish => ({
        ...fish,
        posX: Math.random() * 80 + 10, 
        posY: Math.random() * 80 + 10,
        dirX: Math.random() > 0.5 ? 1 : -1,
        dirY: Math.random() > 0.5 ? 1 : -1,
      })));

      localStorage.setItem('userFish', JSON.stringify(defaultFish));
    }
  }, []);

  useEffect(() => {
    if (userFish.length === 0) return;
    
    const interval = setInterval(() => {
      setUserFish(prevFish => prevFish.map(fish => {
        let newPosX = fish.posX + (fish.dirX * fish.speed * 0.2);
        let newPosY = fish.posY + (fish.dirY * fish.speed * 0.1);
        let newDirX = fish.dirX;
        let newDirY = fish.dirY;
        
        if (newPosX < 0 || newPosX > 95) {
          newDirX = -fish.dirX;
          newPosX = fish.posX;
        }
        
        if (newPosY < 0 || newPosY > 90) {
          newDirY = -fish.dirY;
          newPosY = fish.posY;
        }

        if (Math.random() < 0.01) {
          newDirX = Math.random() > 0.5 ? 1 : -1;
        }
        if (Math.random() < 0.01) {
          newDirY = Math.random() > 0.5 ? 1 : -1;
        }
        
        return {
          ...fish,
          posX: newPosX,
          posY: newPosY,
          dirX: newDirX,
          dirY: newDirY
        };
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, [userFish]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Fish Tank</title>
        <meta name="description" content="View your collection of fish" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navigation}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <h1 className={styles.title}>Your Fish Tank</h1>
          <Link href="/shop" className={styles.shopButton}>
            Shop
          </Link>
        </div>
        <div className={styles.tokenBar}>
          <div className={styles.tokenCount}>
            <span className={styles.tokenIcon}>🪙</span>
            <span>{tokens} Tokens</span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.tankContainer}>
          <div className={styles.fishTank}>
            {/* Sand and decorations */}
            <div className={styles.sand}></div>
            <div className={`${styles.plant} ${styles.plant1}`}></div>
            <div className={`${styles.plant} ${styles.plant2}`}></div>
            <div className={styles.castle}></div>
            
            {/* Fish */}
            {userFish.map(fish => (
              <div 
                key={fish.id}
                className={styles.fish}
                style={{
                  left: `${fish.posX}%`,
                  top: `${fish.posY}%`,
                  backgroundColor: fish.color,
                  width: `${fish.size}px`,
                  height: `${fish.size / 2}px`,
                  transform: `scaleX(${fish.dirX > 0 ? 1 : -1})`,
                  transition: 'top 0.5s ease, left 0.5s ease',
                }}
                title={`${fish.type} (${fish.rarity})`}
              >
                <div className={styles.tail}></div>
                <div className={styles.eye}></div>
              </div>
            ))}
            
            {/* Bubbles */}
            <div className={styles.bubbleStream}>
              <div className={`${styles.bubble} ${styles.bubble1}`}></div>
              <div className={`${styles.bubble} ${styles.bubble2}`}></div>
              <div className={`${styles.bubble} ${styles.bubble3}`}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.fishCollection}>
          <h2>Your Collection</h2>
          <div className={styles.fishList}>
            {userFish.map(fish => (
              <div key={fish.id} className={styles.fishCard}>
                <div 
                  className={styles.fishIcon} 
                  style={{ backgroundColor: fish.color }}
                ></div>
                <div className={styles.fishInfo}>
                  <p className={styles.fishName}>{fish.type}</p>
                  <p className={`${styles.fishRarity} ${styles[fish.rarity]}`}>
                    {fish.rarity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className={styles.shopPrompt}>
        <p>Earn tokens by using our product to save energy on AI costs!</p>
        <Link href="/shop" className={styles.shopLink}>
          Visit Shop to Add More Fish →
        </Link>
      </div>

    </div>
  );
}