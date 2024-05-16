import Input from "./Input";
import Square from "./Square";
import Header from "./Header";
import { useState } from "react";
import ColorList from "./ColorList";

function App() {
    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setIsDarkText] = useState(true);

    return (
        <div className="App">
            <Header title="Color Box" />
            <Square
                colorValue={colorValue}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <Input
                colorValue={colorValue}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
            <ColorList />
        </div>
    );
}

export default App;
