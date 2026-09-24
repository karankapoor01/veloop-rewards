import {
  Crown,
  Trophy,
  Medal,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import styles from "./LeaderboardBanner.module.css";

const players = [
  { rank: 1, name: "Alex Morgan", xp: "12,450", icon: "👑" },
  { rank: 2, name: "Sarah Wilson", xp: "11,280", icon: "🥈" },
  { rank: 3, name: "Ryan Cooper", xp: "10,940", icon: "🥉" },
];

function LeaderboardBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Trophy size={16} />
          <span>REWARDS LEADERBOARD</span>
        </div>

        <h1>
          Rank Higher.
          <span> Earn More.</span>
        </h1>

        <p className={styles.description}>
          Complete activities, earn VEs, gain XP, and climb the leaderboard
          to see your progress rise.
        </p>

        <div className={styles.stats}>
          <div>
            <strong>12,450</strong>
            <span>Top XP</span>
          </div>

          <div>
            <strong>#1</strong>
            <span>Top Rank</span>
          </div>

          <div>
            <strong>+18%</strong>
            <span>This Week</span>
          </div>
        </div>

        <button className={styles.cta}>
          Check Rankings
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow}></div>

        <div className={styles.floatingCoin}>VE</div>
        <div className={styles.floatingSpark}>
          <Sparkles size={20} />
        </div>

        <div className={styles.trophyCircle}>
          <Crown className={styles.crown} size={38} />
          <Trophy size={88} strokeWidth={1.4} />
        </div>

        <div className={styles.podium}>
          {players.map((player) => (
            <div
              className={`${styles.player} ${
                player.rank === 1 ? styles.first : ""
              }`}
              key={player.rank}
            >
              <div className={styles.playerIcon}>{player.icon}</div>

              <div className={styles.playerInfo}>
                <strong>
                  #{player.rank} {player.name}
                </strong>
                <span>{player.xp} XP</span>
              </div>

              {player.rank === 1 && (
                <TrendingUp
                  className={styles.trending}
                  size={20}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.medal}>
          <Medal size={24} />
        </div>
      </div>
    </section>
  );
}

export default LeaderboardBanner;