import { Gift, CalendarDays, ArrowRight, Check } from "lucide-react";
import styles from "./DailyBonusBanner.module.css";

function DailyBonusBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.number}>05</div>

      <div className={styles.content}>
        <div className={styles.label}>
          <CalendarDays size={13} />
          <span>DAILY BONUS</span>
        </div>

        <h2>
          Your Daily Bonus
          <span>Is Waiting</span>
        </h2>

        <p className={styles.description}>
          Check in regularly and claim your available daily bonus before the
          opportunity resets.
        </p>

        <button className={styles.cta}>
          <span>Claim Bonus</span>
          <Gift size={17} />
          <ArrowRight size={15} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.visualGlow}></div>

        <div className={styles.particleOne}>◆</div>
        <div className={styles.particleTwo}>◆</div>
        <div className={styles.particleThree}>✦</div>
        <div className={styles.particleFour}>◆</div>
        <div className={styles.particleFive}>✦</div>

        <div className={styles.giftScene}>
          <div className={styles.giftLid}>
            <div className={styles.bowLeft}></div>
            <div className={styles.bowRight}></div>
            <div className={styles.bowCenter}></div>
          </div>

          <div className={styles.giftBase}>
            <div className={styles.innerLight}></div>
            <div className={styles.ribbonVertical}></div>
            <div className={styles.ribbonHorizontal}></div>
            <div className={styles.mainCoin}>VE</div>
          </div>

          <div className={styles.sideCoinLeft}>VE</div>
          <div className={styles.sideCoinRight}>VE</div>

          <div className={styles.smallCoinLeft}></div>
          <div className={styles.smallCoinRight}></div>
        </div>
      </div>

      <div className={styles.bonusCard}>
        <span className={styles.cardLabel}>TODAY&apos;S BONUS</span>

        <div className={styles.bonusAmount}>
          +25 <span>GEMS</span>
        </div>

        <div className={styles.available}>
          <span>Available Now</span>
          <i></i>
        </div>
      </div>

      <div className={styles.streakCard}>
        <div className={styles.streakTitle}>7-DAY STREAK</div>

        <div className={styles.days}>
          <div className={styles.day}>
            <span>1</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>2</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>3</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>4</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>5</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>6</span>
            <div className={styles.completedCircle}>
              <Check size={11} />
            </div>
          </div>

          <div className={styles.day}>
            <span>7</span>
            <div className={styles.emptyCircle}>7</div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <strong>6 Days Completed</strong>

        <span className={styles.comeBack}>
          Come back tomorrow!
        </span>
      </div>
    </section>
  );
}

export default DailyBonusBanner;