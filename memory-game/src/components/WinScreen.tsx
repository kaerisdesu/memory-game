const styles = {
    winOverlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        backdropFileter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    winCard: { 
        background: "linear-gradient(145deg, #1e1e3a, #2a2860)",
        border: "1px solid rgba(255,255,255, 0.15)",
        borderRadius: 24,
        padding: "40px 48px",
        textAlign: "center",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
    },
    winTitle: {
        fontSize: 32,
        fontWeight: 800,
        margin: "20px 0 8px",
        background: "linear-gradient(135deg, #f7c948, #ee5a24)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    winStat: {
        fontSize: 16,
        color: "#aaa",
        marginBottom: 24,
    },
    playAgaingBtn: {
        background: "linear-gradient(135deg, #f7c948, #ee5a24)",
        border: "none",
        color: "#1a1a2e",
        padding: "14px 36px",
        borderRadius: 14,
        fontSize: 17,
        fontWeight: 800,
        cursor: "pointer",
        letterSpacing: 0.3,
    },
} as const;

function WinScreen({moves, seconds, onRestart}) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return (
        <div style={styles.winOverlay}>
            <div style={styles.winCard}>
                <div style={{ fontSize: 52}}>🎉</div>
                <h2 style={styles.winTitle}>Победа!</h2>
                <p style={styles.winStat}>
                    {moves} ходов за {mins}:{secs}
                </p>
                <button onClick={onRestart} style={styles.playAgaingBtn}>
                    Играть снова
                </button>
            </div>
        </div>
    );
}

export default WinScreen