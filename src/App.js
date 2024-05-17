import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setIsDarkText] = useState(true);

    return (
        <div className="App">
            <Header title="Color Box" />
            <Main
                colorValue={colorValue}
                hexValue={hexValue}
                isDarkText={isDarkText}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
                setIsDarkText={setIsDarkText}
            />
            <Sidebar />
        </div>
    );
}

export default App;
