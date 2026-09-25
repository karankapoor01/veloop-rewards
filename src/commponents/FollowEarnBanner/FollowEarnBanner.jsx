import {
  Users,
  Star,
  Gift,
  Heart,
  Megaphone,
  ArrowRight,
  Bell,
  Check,
} from "lucide-react";
import styles from "./FollowEarnBanner.module.css";

function FollowEarnBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.grid}></div>

      <div className={styles.number}>04</div>

      <div className={styles.content}>
        <div className={styles.label}>
          <Users size={14} />
          <span>FOLLOW &amp; EARN</span>
        </div>

        <h2>Follow &amp; Earn</h2>

        <p className={styles.description}>
          Follow VELOOP Rewards on our official channels and participate in
          eligible social campaigns to unlock rewards.
        </p>

        <button className={styles.cta} type="button">
          <span>Explore Our Channels</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.orbit + " " + styles.orbitOne}></div>
        <div className={styles.orbit + " " + styles.orbitTwo}></div>
        <div className={styles.orbit + " " + styles.orbitThree}></div>

        <div
          className={
            styles.socialBubble + " " + styles.peopleBubble
          }
        >
          <Users size={21} />
        </div>

        <div
          className={
            styles.socialBubble + " " + styles.starBubble
          }
        >
          <Star size={22} fill="currentColor" />
        </div>

        <div
          className={
            styles.socialBubble + " " + styles.giftBubble
          }
        >
          <Gift size={20} />
        </div>

        <div
          className={
            styles.socialBubble + " " + styles.megaphoneBubble
          }
        >
          <Megaphone size={20} />
        </div>

        <div
          className={
            styles.socialBubble + " " + styles.heartBubble
          }
        >
          <Heart size={20} fill="currentColor" />
        </div>

        <div className={styles.phone}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch}></div>

            <div className={styles.phoneTop}>
              <span>9:41</span>

              <div>
                <span className={styles.signal}></span>
                <span className={styles.battery}></span>
              </div>
            </div>

            <div className={styles.profile}>
              <div className={styles.profileLogo}>V</div>

              <strong>VELOOP Rewards</strong>

              <span>@velooprewards</span>

              <div className={styles.followRow}>
                <button type="button">
                  Following
                  <Check size={10} />
                </button>

                <button
                  type="button"
                  className={styles.bellButton}
                >
                  <Bell size={13} />
                </button>
              </div>
            </div>

            <div className={styles.phoneStats}>
              <div>
                <strong>128</strong>
                <span>Posts</span>
              </div>

              <div>
                <strong>24.5K</strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Following</span>
              </div>
            </div>

            <div className={styles.phoneCards}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rewardCard}>
        <div className={styles.rewardTop}>
          <div className={styles.rewardIcon}>
            <Gift size={20} />
          </div>

          <p>
            Participate in eligible
            <br />
            social campaigns to
            <br />
            unlock rewards.
          </p>
        </div>

        <div className={styles.rewardDivider}></div>

        <strong className={styles.rewardAmount}>
          +500 S VEs
        </strong>

        <span className={styles.rewardCaption}>
          Demo Campaign
        </span>
      </div>
    </section>
  );
}

export default FollowEarnBanner;