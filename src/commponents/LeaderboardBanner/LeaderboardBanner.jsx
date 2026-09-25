import {
  Trophy,
  Crown,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Medal,
} from "lucide-react";
import styles from "./LeaderboardBanner.module.css";

const players = [
  {
    rank: "02",
    name: "User B",
    score: "11,820 VEs",
    className: "second",
  },
  {
    rank: "01",
    name: "User A",
    score: "12,450 VEs",
    className: "first",
  },
  {
    rank: "03",
    name: "User C",
    score: "10,970 VEs",
    className: "third",
  },
];

function LeaderboardBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.gridLines}></div>

      <div className={styles.number}>01</div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <Trophy size={15} />
          <span>COMPETITION STAGE ACTIVE</span>
        </div>

        <h1>
          Rank Higher.
          <span>Earn More.</span>
        </h1>

        <p className={styles.description}>
          Complete activities, earn rewards, gain XP, and compete with other
          users to climb the leaderboard.
        </p>

        <div className={styles.poolCard}>
          <div className={styles.poolIcon}>
            <Trophy size={20} />
          </div>

          <div className={styles.poolText}>
            <span>Current pool</span>
            <strong>50,000 VEs</strong>
          </div>

          <div className={styles.poolSuffix}>
            <span>in prizes</span>
          </div>
        </div>

        <button className={styles.cta}>
          <span>Check Rankings</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.graph}>
          <svg
            viewBox="0 0 700 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className={styles.graphLine}
              d="M0 235 L70 205 L125 225 L190 165 L250 195 L320 115 L385 150 L450 92 L510 125 L575 65 L630 95 L700 25"
            />

            <path
              className={styles.graphLineSecondary}
              d="M0 270 L80 255 L145 260 L210 215 L280 235 L350 185 L420 195 L490 145 L555 165 L620 125 L700 105"
            />
          </svg>

          <span className={`${styles.graphDot} ${styles.dot1}`}></span>
          <span className={`${styles.graphDot} ${styles.dot2}`}></span>
          <span className={`${styles.graphDot} ${styles.dot3}`}></span>
          <span className={`${styles.graphDot} ${styles.dot4}`}></span>
          <span className={`${styles.graphDot} ${styles.dot5}`}></span>
        </div>

        <div className={styles.particles}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.trophyArea}>
          <div className={styles.trophyGlow}></div>

          <div className={styles.crown}>
            <Crown size={46} strokeWidth={1.5} />
          </div>

          <div className={styles.trophyCup}>
            <Trophy size={145} strokeWidth={1.15} />
            <div className={styles.trophyStar}>★</div>
          </div>

          <div className={styles.trophyBase}></div>

          <div className={styles.medalRing}>
            <Medal size={20} />
          </div>
        </div>

        <div className={styles.podium}>
          {players.map((player) => (
            <div
              key={player.rank}
              className={`${styles.podiumCard} ${styles[player.className]}`}
            >
              <div className={styles.rankCircle}>{player.rank}</div>

              <div className={styles.userAvatar}>
                {player.name.charAt(5)}
              </div>

              <strong>{player.name}</strong>

              <span>{player.score}</span>

              {player.rank === "01" && (
                <div className={styles.winnerCrown}>
                  <Crown size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.platformGlow}></div>

        <div className={styles.floatingCoin}>
          <span>VE</span>
        </div>

        <div className={styles.floatingSpark}>
          <Sparkles size={20} />
        </div>

        <div className={styles.trendLabel}>
          <TrendingUp size={14} />
          <span>TOP RANKING</span>
        </div>
      </div>
    </section>
  );
}

export default LeaderboardBanner;