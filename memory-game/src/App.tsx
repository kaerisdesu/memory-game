import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    return(
        <>
        <ScoreBoard 
        moves="25" 
        matchedCount={10} 
        totalPair={24} 
        seconds={184} 
        onRestart={null}>

        </ScoreBoard>

        <Card emoji="🐼" isFliped={false} isMatched={false} onClick= {()=> console.log()}></Card>
        </>
    );
}

export default App;