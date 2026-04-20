const styles = {
  scoreBoard:{
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statBox:{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "rgba(255,255,255, 0.06)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: "8px 18px",
    minWidth: 72,
  },
  statLabel:{
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#999",
    marginBotom: 2,
  },
  statValue:{
    fontSize: 22,
    fontWeight: 700,
    color: "#f0ece2",
  },
  restartBtn:{
    background: "linear-gradient(135deg, #6c5ce7, #a855f7)",
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 12,
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: 0.3,
  },
} as const;

function ScoreBoard({ moves, matchedCount, totalPair, seconds, onRestart }) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div style={styles.scoreBoard}>
      <div style={styles.statBox}>
        <span style={styles.statLabel}>Ходы</span>
        <span style={styles.statValue}>{moves}</span>
      </div>
      <div style={styles.statBox}>
        <span style={styles.statLabel}>Пары</span>
        <span style={styles.statValue}>{matchedCount}/{totalPair}</span>
      </div>
      <div style={styles.statBox}>
        <span style={styles.statLabel}>Время</span>
        <span style={styles.statValue}>{mins}:{secs}</span>
      </div>
      <button onClick={onRestart} style={styles.restartBtn}>
        Заново ↺
      </button>
    </div>
  );
}

export default ScoreBoard;