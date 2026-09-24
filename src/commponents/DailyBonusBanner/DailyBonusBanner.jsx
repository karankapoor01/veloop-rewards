import { useState } from "react";
import {
  FiGift,
  FiCalendar,
  FiCheck,
  FiArrowUpRight,
  FiZap,
  FiStar,
} from "react-icons/fi";

import styles from "./DailyBonusBanner.module.css";

function DailyBonusBanner() {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);

    setTimeout(() => {
      setClaimed(false);
    }, 2200);
  };

  return (
    <section className={styles.banner}>
      <div className={styles.backgroundGlow}></div>

      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <FiGift />
          <span>DAILY BONUS</span>
        </div>

        <h2 className={styles.title}>
          Your Daily Bonus
          <span> Is Waiting.</span>
        </h2>

        <p className={styles.description}>
          Check in regularly and claim your available daily reward before
          the bonus resets.
        </p>

        {/* STREAK */}
        <div className={styles.streakRow}>
          <div className={styles.streakIcon}>
            <FiZap />
          </div>

          <div>
            <strong>7 Day Streak</strong>
            <span>Keep your streak going</span>
          </div>
        </div>

        {/* PROGRESS */}
        <div className={styles.progressSection}>
          <div className={styles.progressTop}>
            <span>Weekly Progress</span>
            <strong>5 / 7</strong>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>

        {/* CTA */}
        <button
          className={`${styles.cta} ${claimed ? styles.claimed : ""}`}
          onClick={handleClaim}
        >
          {claimed ? (
            <>
              <FiCheck />
              Bonus Claimed
            </>
          ) : (
            <>
              Claim Bonus
              <FiArrowUpRight />
            </>
          )}
        </button>
      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.visual}>
        <div className={styles.visualGlow}></div>

        {/* Floating coins */}
        <div className={`${styles.coin} ${styles.coinOne}`}>VE</div>
        <div className={`${styles.coin} ${styles.coinTwo}`}>+</div>
        <div className={`${styles.coin} ${styles.coinThree}`}>25</div>

        {/* Gift Card */}
        <div className={styles.rewardCard}>
          <div className={styles.cardTop}>
            <div className={styles.cardLabel}>
              <FiCalendar />
              <span>TODAY'S BONUS</span>
            </div>

            <FiStar className={styles.star} />
          </div>

          <div className={styles.giftBox}>
            <div className={styles.giftRibbon}></div>
            <div className={styles.giftLid}></div>
            <div className={styles.giftBody}>
              <FiGift />
            </div>
          </div>

          <div className={styles.rewardInfo}>
            <span>Available Now</span>
            <strong>+25 Gems</strong>
          </div>

          <div className={styles.cardBottom}>
            <span>Daily Reward</span>
            <span className={styles.available}>
              <i></i> Available
            </span>
          </div>
        </div>

        {/* Small calendar */}
        <div className={styles.miniCalendar}>
          <FiCalendar />
          <span>DAY</span>
          <strong>24</strong>
        </div>
      </div>
    </section>
  );
}

export default DailyBonusBanner;