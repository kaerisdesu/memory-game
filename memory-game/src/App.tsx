import Card from "./components/Card";

function App() {
    return(
        <>
        <Card emoji="🐼" isFliped={false} isMatched={false} onClick= {()=> console.log()}></Card>
        </>
    );
}

export default App;