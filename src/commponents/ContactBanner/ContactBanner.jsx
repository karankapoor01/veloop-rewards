import {
  Headphones,
  MessageCircle,
  Mail,
  BookOpen,
  Ticket,
  Copy,
  Check,
  ArrowRight,
  UserRound,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import styles from "./ContactBanner.module.css";

function ContactBanner() {
  const [copied, setCopied] = useState(false);

  const email = "velooprewardsofficial@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.grid}></div>

      <div className={styles.number}>03</div>

      <div className={styles.content}>
        <div className={styles.label}>
          <Headphones size={14} />
          <span>CONTACT US</span>
        </div>

        <h2>
          Need Help?
          <span>We're Here.</span>
        </h2>

        <p className={styles.description}>
          Have a question, concern, or need assistance? Get in touch with the
          VELOOP Rewards team.
        </p>

        <button className={styles.cta} type="button">
          <span>Contact Support</span>
          <MessageCircle size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.visualGlow}></div>

        <div className={styles.chatBubble}>
          <MessageCircle size={18} fill="currentColor" />
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.messageBubble}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.supportPerson}>
          <div className={styles.headGlow}></div>

          <div className={styles.headphones}>
            <Headphones size={112} strokeWidth={2.1} />
          </div>

          <div className={styles.head}>
            <div className={styles.hair}></div>

            <div className={`${styles.ear} ${styles.left}`}></div>
            <div className={`${styles.ear} ${styles.right}`}></div>

            <div className={`${styles.eye} ${styles.left}`}></div>
            <div className={`${styles.eye} ${styles.right}`}></div>

            <div className={styles.nose}></div>

            <div className={styles.smile}></div>
          </div>

          <div className={styles.body}>
            <div className={styles.shirt}>
              <span>V</span>
            </div>

            <div className={styles.armLeft}></div>
            <div className={styles.armRight}></div>
          </div>

          <div className={styles.laptop}>
            <div className={styles.laptopScreen}>
              <div className={styles.laptopLogo}>V</div>
            </div>

            <div className={styles.laptopBase}></div>
          </div>

          <div className={styles.mic}>
            <div></div>
          </div>
        </div>

        <div className={styles.sparkOne}>
          <Sparkles size={16} />
        </div>

        <div className={styles.sparkTwo}>
          <Sparkles size={12} />
        </div>
      </div>

      <div className={styles.supportPanel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelIcon}>
            <UserRound size={15} />
          </div>

          <span>We're here to help</span>
        </div>

        <div className={styles.panelDivider}></div>

        <div className={styles.emailBlock}>
          <div className={styles.emailIcon}>
            <Mail size={16} />
          </div>

          <div className={styles.emailContent}>
            <span>Email Us</span>
            <strong>{email}</strong>
          </div>
        </div>

        <button
          className={styles.copyButton}
          onClick={copyEmail}
          type="button"
        >
          <span>{copied ? "Email Copied" : "Copy Email"}</span>
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>

        <button className={styles.panelLink} type="button">
          <div>
            <BookOpen size={17} />
            <span>Help Center</span>
          </div>

          <ArrowRight size={15} />
        </button>

        <button className={styles.panelLink} type="button">
          <div>
            <Ticket size={17} />
            <span>Submit a Ticket</span>
          </div>

          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}

export default ContactBanner;