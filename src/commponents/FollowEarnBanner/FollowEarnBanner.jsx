import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";
import styles from "./FollowEarnBanner.module.css";

function FollowEarnBanner() {
  const socialPlatforms = [
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaFacebookF />, label: "Facebook" },
    { icon: <FaYoutube />, label: "YouTube" },
    { icon: <FaLinkedinIn />, label: "LinkedIn" },
    { icon: <FaTelegramPlane />, label: "Telegram" },
  ];

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <FiUsers />
          FOLLOW & EARN
        </div>

        <h2>
          Stay Connected.
          <span>Get Rewarded.</span>
        </h2>

        <p>
          Follow our official channels, stay updated with the latest VELOOP
          Rewards news, and participate in eligible social campaigns.
        </p>

        <div className={styles.socialList}>
          {socialPlatforms.map((platform) => (
            <div className={styles.socialItem} key={platform.label}>
              <div className={styles.socialIcon}>{platform.icon}</div>
              <span>{platform.label}</span>
            </div>
          ))}
        </div>

        <button className={styles.cta}>
          Explore Channels
          <FiArrowUpRight />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow}></div>

        <div className={styles.phone}>
          <div className={styles.phoneTop}>
            <span>VELOOP</span>
            <span className={styles.liveDot}></span>
          </div>

          <div className={styles.profile}>
            <div className={styles.profileAvatar}>V</div>

            <div>
              <strong>VELOOP Rewards</strong>
              <small>@velooprewards</small>
            </div>
          </div>

          <div className={styles.followCard}>
            <div className={styles.instagramIcon}>
              <FaInstagram />
            </div>

            <div>
              <strong>Follow & Connect</strong>
              <small>Stay updated with rewards</small>
            </div>

            <FiArrowUpRight />
          </div>

          <div className={styles.followCard}>
            <div className={styles.youtubeIcon}>
              <FaYoutube />
            </div>

            <div>
              <strong>Latest Updates</strong>
              <small>Discover new campaigns</small>
            </div>

            <FiArrowUpRight />
          </div>

          <div className={styles.rewardBubble}>
            <strong>+500</strong>
            <span>SVEs</span>
          </div>
        </div>

        <div className={`${styles.floatingIcon} ${styles.iconOne}`}>
          <FaInstagram />
        </div>

        <div className={`${styles.floatingIcon} ${styles.iconTwo}`}>
          <FaYoutube />
        </div>

        <div className={`${styles.floatingIcon} ${styles.iconThree}`}>
          <FaTelegramPlane />
        </div>
      </div>
    </section>
  );
}

export default FollowEarnBanner;