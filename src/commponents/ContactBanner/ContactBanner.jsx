import {
  Headphones,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import styles from "./ContactBanner.module.css";

function ContactBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Headphones size={15} />
          <span>VELOOP SUPPORT</span>
        </div>

        <h2>
          Need Help?
          <span>We're Here.</span>
        </h2>

        <p className={styles.description}>
          Have a question or concern? Our support team is here to help you
          with your VELOOP Rewards experience.
        </p>

        <div className={styles.supportOptions}>
          <div className={styles.option}>
            <div className={styles.optionIcon}>
              <MessageCircle size={18} />
            </div>

            <div>
              <strong>Talk to Us</strong>
              <span>Get help from our support team</span>
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.optionIcon}>
              <Mail size={18} />
            </div>

            <div>
              <strong>Email Support</strong>
              <span>velooprewardsofficial@gmail.com</span>
            </div>
          </div>
        </div>

        <button className={styles.cta}>
          Contact Support
          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow}></div>

        <div className={styles.supportCard}>
          <div className={styles.cardHeader}>
            <div className={styles.agentAvatar}>
              <Headphones size={27} />
            </div>

            <div>
              <strong>VELOOP Support</strong>

              <span className={styles.status}>
                <span className={styles.statusDot}></span>
                Available to help
              </span>
            </div>
          </div>

          <div className={styles.chatArea}>
            <div className={styles.message}>
              <div className={styles.miniAvatar}>
                <Headphones size={14} />
              </div>

              <div className={styles.messageBubble}>
                Hi! How can we help you today?
              </div>
            </div>

            <div className={`${styles.message} ${styles.userMessage}`}>
              <div className={styles.messageBubble}>
                I need help with my rewards.
              </div>
            </div>

            <div className={styles.typing}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.inputFake}>
              <span>Type your message...</span>
            </div>

            <div className={styles.sendButton}>
              <ArrowRight size={17} />
            </div>
          </div>
        </div>

        <div className={styles.floatingIcon}>
          <CheckCircle2 size={21} />
        </div>

        <div className={styles.sparkle}>
          <Sparkles size={19} />
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;