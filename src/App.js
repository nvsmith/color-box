import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import colornames from "colornames";

function App() {
    // *** Manage Main state ***

    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // *** Manage Sidebar state ***

    const [colorList, setColorList] = useState([]);
    const [selectedColorName, setSelectedColorName] = useState("");

    // *** Manage side effects ***

    useEffect(() => {
        // Defines colors from the colornames API
        setColorList(colornames.all());
    }, []);

    // *** Manage interactions ***

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleColorListSelection = (color) => {
        setSelectedColorName(color.name);
    };

    const handleClearInput = () => {
        setColorValue("");
        setHexValue("");
    };

    return (
        <div className="App">
            <Header />
            <div className="content-container">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    colorList={colorList}
                    handleColorListSelection={handleColorListSelection}
                    handleClearInput={handleClearInput}
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
                />
            </div>
        </div>
    );
}

export default App;
