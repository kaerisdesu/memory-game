import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import DifficultyPicker from "./DifficultyPicker";
import WinScreen from "./WinScreen";

const styles = {
  grid: {},
  wrapper: {},
  title: {},
  titleSmall: {},
  header: {},
  backBtn: {},
}

interface Difficulty {
  label: string;
  pairs: number;
  cols: number;
}

interface Card {
  id: number;
  emoji: string;
  pairId: number;
}


const EMOJIS = ["🐕", "🐈", "🦊", "🐹", "🐧", "🐙", "🧸", "🦄"];

function createDeck(pairCount = 8) {
  const selected = EMOJIS.slice(0, pairCount);
  const doubled = selected.flatMap((emoji, i) => [
    { id: i * 2, emoji, pairId: i},
    { id: i * 2 + 1, emoji, pairId: i},
  ]);
  return shuffle(doubled);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


function GameBoard() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [won, setWon] = useState(false);
  const totalPairs = difficulty ? difficulty.pairs : 0;

  const startGame = (level) => {
    setDifficulty(level);
    setCards(createDeck(level.pairs))
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setSeconds(0);
    setIsRunning(false);
    setWon(false);
  };

  /* timer */
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  /* check win */
  useEffect(() => {
    if (totalPairs > 0 && matched.length == totalPairs * 2) {
      setWon(true);
      setIsRunning(false);
    }
  }, [matched, totalPairs]);

  /* check match */
  useEffect(() => {
    if (flipped.length !== 2) return;

    const [a, b] = flipped;
    const cardA = cards.find((c) => c.id === a);
    const cardB = cards.find((c) => c.id === b);

    if (cardA?.pairId === cardB?.pairId) {
      setMatched((prev) => [...prev, a, b]);
      setFlipped([]);
      setMoves((m) => m + 1);
    } else {
      const timer = setTimeout(() => {
        setFlipped([]);
        setMoves((m) => m + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [flipped, cards]);

  const handleClick = useCallback(
    (id) => {
      if (flipped.length >= 2) return;
      if (flipped.includes(id)) return;
      if (!isRunning) setIsRunning(true);
      setFlipped((prev) => [...prev, id]);
    }, 
    [flipped, isRunning]
  );

  const restart = () => {
    startGame(difficulty);
  };

  const backToMenu = () => {
    setDifficulty(null);
    setWon(false);
  };

  /* render */
  if (!difficulty) {
    return(
      <div style={styles.wrapper}>
        <h1 style={styles.title}>🎴 Memory Game</h1>
        <DifficultyPicker onSelect={startGame} />
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <button onClick={backToMenu} style={styles.backBtn}>
          Меню
        </button>
        <h1 style={styles.titleSmall}>🎴 Memory Game</h1>
      </div>

      <ScoreBoard
        moves={moves}
        matchedCount={matched.length / 2}
        totalPair={totalPairs}
        seconds={seconds}
        onRestart={restart}
      />

      <div
        style={{
          ...styles.grid,
          gridTemplateColumns: `repeat(${difficulty.cols}, 1fr)`
        }}
      >
        {cards.map((card) => (
          <Card 
            key={card.id}
            emoji={card.emoji}
            isFliped={flipped.includes(card.id)}
            isMatched={matched.includes(card.id)}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </div>

      {won && (
        <WinScreen moves={moves} seconds={seconds} onRestart={restart} />
      )}
    </div>
  );


}

export default GameBoard;