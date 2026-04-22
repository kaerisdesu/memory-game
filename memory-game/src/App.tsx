import DifficultyPicker from "./components/DifficultyPicker";

function App() {
    return(
        <>
        <DifficultyPicker onSelect={console.log("DifficultyPicker")}></DifficultyPicker>
        </>
    );
}

export default App;