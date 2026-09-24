import {
  Play,
  Coins,
  CheckCircle2,
  Wallet,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import styles from "./WatchAdBanner.module.css";

const steps = [
  {
    number: "01",
    title: "Watch",
    icon: Play,
  },
  {
    number: "02",
    title: "Complete",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Earn",
    icon: Coins,
  },
];

function WatchAdBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Play size={15} fill="currentColor" />
          <span>WATCH & EARN</span>
        </div>

        <h2>
          Watch Ads.
          <span> Earn VEs.</span>
        </h2>

        <p className={styles.description}>
          Watch eligible ads, complete the activity, and earn available
          rewards while discovering new offers.
        </p>

        <div className={styles.steps}>
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className={styles.step} key={step.number}>
                <div className={styles.stepIcon}>
                  <Icon size={17} />
                </div>

                <div>
                  <small>{step.number}</small>
                  <strong>{step.title}</strong>
                </div>
              </div>
            );
          })}
        </div>

        <button className={styles.cta}>
          Watch & Earn
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.backgroundGlow}></div>

<div className={`${styles.coin} ${styles.coinOne}`}>VE</div>
<div className={`${styles.coin} ${styles.coinTwo}`}>VE</div>
<div className={`${styles.coin} ${styles.coinThree}`}>+</div>

<div className={styles.videoCard}>
          <div className={styles.videoTop}>
            <span>REWARD VIDEO</span>

            <div className={styles.liveDot}></div>
          </div>

          <div className={styles.videoScreen}>
            <div className={styles.playButton}>
              <Play size={30} fill="currentColor" />
            </div>

            <div className={styles.videoLine}></div>
            <div className={styles.videoLineSmall}></div>
          </div>

          <div className={styles.videoBottom}>
            <div className={styles.rewardInfo}>
              <div className={styles.rewardIcon}>
                <Coins size={19} />
              </div>

              <div>
                <span>Available Reward</span>
                <strong>+38 VEs</strong>
              </div>
            </div>

            <Wallet size={21} />
          </div>
        </div>

        <div className={styles.spark}>
          <Sparkles size={20} />
        </div>
      </div>
    </section>
  );
}

export default WatchAdBanner;