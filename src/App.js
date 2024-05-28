import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import colornames from "colornames";

function App() {
    // *** Main State ***

    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // *** Sidebar State ***

    const [colorList, setColorList] = useState([]);
    const [selectedColorName, setSelectedColorName] = useState("");

    // *** Side Effects ***

    useEffect(() => {
        // Defines colors from the colornames API
        setColorList(colornames.all());
    }, []);

    useEffect(() => {
        // Updates the input field when user clicks a button from the Sidebar's color list
        if (selectedColorName) {
            handleColorChange(selectedColorName);
        }
    }, [selectedColorName]);

    // *** Interactions ***

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Passes clicked sidebar color to Main display
    const handleColorListSelection = (color) => {
        setSelectedColorName(color.name);
    };

    // Updates displayed color based on user input or clicked color
    const handleColorChange = (inputColor) => {
        const lowerCaseColor = inputColor.toLowerCase();
        setColorValue(lowerCaseColor);

        // Gets HEX code that matches the name from the colornames API
        const colorHex = colornames(lowerCaseColor);
        setHexValue(colorHex);
    };

    return (
        <div className="App">
            <Header />
            <div className="content-container">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    colorList={colorList}
                    handleColorListSelection={handleColorListSelection}
                />
                <Main
                    colorValue={colorValue}
                    setColorValue={setColorValue}
                    hexValue={hexValue}
                    setHexValue={setHexValue}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                    selectedColorName={selectedColorName}
                    setSelectedColorName={setSelectedColorName}
                    handleColorChange={handleColorChange}
                />
            </div>
        </div>
    );
}

export default App;
