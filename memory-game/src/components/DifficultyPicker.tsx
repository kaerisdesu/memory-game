const styles = {
    diffWrap: {
        textAlign: "center",
        marginTop: 32,
    },
    diffTitle: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 24,
        color: "#bbb"
    },
    diffBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: 16,
        padding: "24px 32px",
        cursor: "pointer",
        transition: "transform 0.2s, background 0.2s",
        color: "#e8e6f0",
    },
    diffEmoji: { fontSize: 36 },
    diffLabel: { fontSize: 17, fontWeight:700 },
    diffSub: { fontSize: 36, color: "#888"},
    diffRow: {
        display: "flex",
        gap: 16,
        justifyContent: "center",
        flexWrap: "wrap",
    }

} as const;


function DifficultyPicker({ onSelect }) {
    const levels = [
        { label: "Легко", pairs: 4, cols: 4},
        { label: "Средне", pairs: 6, cols: 4},
        { label: "Сложно", pairs: 8, cols: 4},
    ];

    return (
        <div style={styles.diffWrap}>
            <h2 style={styles.diffTitle}>Выбери сложность</h2>
            <div style={styles.diffRow}>

                {levels.map((l) => (
                    <button
                    key={l.pairs}
                    onClick={() => onSelect(l)}
                    style={styles.diffBtn}
                    onMouseEnter={(e) => 
                        (e.currentTarget.style.transform = "translateY(-3px)")
                    }
                    onMouseLeave={(e) => 
                        (e.currentTarget.style.transform = "translateY(0px)")
                    }
                    >
                        <span style={styles.diffEmoji}>
                            {l.pairs === 4 ? "🌱" : l.pairs === 6 ? "🌿" : "🌳"}
                        </span>
                        <span style={styles.diffLabel}>{l.label}</span>
                        <span style={styles.diffSub}>{l.pairs} пар</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DifficultyPicker