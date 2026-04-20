const styles = {
  card: {
    position: "relative",
    aspectRatio: "1",
    borderRadius: 14,
    border: "2px solid rgba(255, 255, 255, 0.12)",
    background: "linear-gradient(145deg, #2d2b55, #3b3875)",
    fontSize: 36,
    display: "flex",
    alignItems: "center",
    TransformStyle: "preserve-3d",
    transition: "transform 0.45s cubic-bezier(.4, .0, .2, 1), box-shadow 0.3s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
    outline: "none",
    padding: 0,
  },
  cardMatched: {
    border: "2px solid rgba(72, 219, 143, 0.5)",
    background: "linear-gradient(145deg, #1a3a2a, #1e4d35)",
    boxShadow: "0 0 18px rgba(72, 219, 143, 0.2)"
  },
  cardBack: {
    position: "absolute",
    backfaceVisibility: "hidden",
    fontSize: 28,
    color: "rgba(255,255,255, 0.25)",
    userSelect: "none",
  },
  cardFront: {
    position: "absolute",
    backfaceVisibility: "hidden",
    transform: "rotateY(180)",
    userSelect: "none",
  }
} as const;

function Card({ emoji, isFliped, isMatched, onClick }) {
  return (
      <button
        onClick={onClick}
        disabled={isFliped || isMatched}
        style={{
          ...styles.card,
          ...(isMatched ? styles.cardMatched : {}),
          cursor: isFliped || isMatched ? "default" : "pointer",
          transform: isFliped || isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <span style={styles.cardBack}>?</span>
        <span style={styles.cardFront}>{emoji}</span>
      </button>
  );
}

export default Card;