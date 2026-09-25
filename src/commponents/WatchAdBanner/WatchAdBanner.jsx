import {
  Play,
  ArrowRight,
  ShieldCheck,
  Zap,
  WalletCards,
  Sparkles,
  Coins,
} from "lucide-react";
import styles from "./WatchAdBanner.module.css";

function WatchAdBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.blueGlow}></div>
      <div className={styles.grid}></div>

      <div className={styles.number}>02</div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <Play size={12} fill="currentColor" />
          <span>ON-DEMAND REWARDS</span>
        </div>

        <h2>
          Watch Ads.
          <span>Earn VEs.</span>
        </h2>

        <p className={styles.description}>
          Watch eligible advertisements and earn VEs for completing available
          ad activities.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={16} />
            </div>
            <span>No Daily Cap</span>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Zap size={16} />
            </div>
            <span>Instant Credits</span>
          </div>
        </div>

        <button className={styles.cta}>
          <span>Watch &amp; Earn</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.lightBeam}></div>

        <div className={`${styles.coin} ${styles.coinOne}`}>
          <span>VE</span>
        </div>

        <div className={`${styles.coin} ${styles.coinTwo}`}>
          <span>VE</span>
        </div>

        <div className={`${styles.coin} ${styles.coinThree}`}>
          <span>VE</span>
        </div>

        <div className={`${styles.coin} ${styles.coinFour}`}>
          <span>VE</span>
        </div>

        <div className={styles.sparkOne}>
          <Sparkles size={16} />
        </div>

        <div className={styles.sparkTwo}>
          <Sparkles size={12} />
        </div>

        <div className={styles.videoPlatform}>
          <div className={styles.videoGlow}></div>

          <div className={styles.videoCard}>
            <div className={styles.videoTop}>
              <div className={styles.videoTitle}>
                <div className={styles.videoDot}></div>
                <span>ELIGIBLE AD</span>
              </div>

              <span className={styles.videoTime}>00:30</span>
            </div>

            <div className={styles.videoScreen}>
              <div className={styles.screenLines}></div>
              <div className={styles.screenGlow}></div>

              <button className={styles.playButton} aria-label="Play advertisement">
                <Play size={29} fill="currentColor" />
              </button>

              <div className={styles.videoProgress}>
                <span></span>
              </div>
            </div>

            <div className={styles.videoBottom}>
              <div className={styles.videoControls}>
                <span>▶</span>
                <span>Ⅱ</span>
              </div>

              <div className={styles.videoTrack}>
                <span></span>
              </div>

              <div className={styles.videoSound}>⌁</div>
            </div>
          </div>

          <div className={styles.platformRing}></div>
        </div>

        <div className={styles.wallet}>
          <div className={styles.walletTop}>
            <WalletCards size={18} />
            <span>VE WALLET</span>
          </div>

          <div className={styles.walletAmount}>2,840</div>

          <div className={styles.walletBottom}>
            <span>Available VEs</span>
            <Coins size={14} />
          </div>

          <div className={styles.walletButton}></div>
        </div>

        <div className={styles.rewardBurst}>
          <span>+VE</span>
        </div>

        <div className={styles.rewardLabel}>
          <Zap size={12} />
          <span>REWARD EARNED</span>
        </div>
      </div>
    </section>
  );
}

export default WatchAdBanner;