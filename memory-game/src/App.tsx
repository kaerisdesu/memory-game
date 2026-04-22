import WinScreen from "./components/WinScreen";

function App() {
    return(
        <>
        <WinScreen moves={30} seconds={362} onRestart={console.log("restart")}></WinScreen>
        </>
    );
}

export default App;