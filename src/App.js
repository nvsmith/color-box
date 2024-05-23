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
        console.log(color.name);
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
                    hexValue={hexValue}
                    setColorValue={setColorValue}
                    setHexValue={setHexValue}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
            </div>
        </div>
    );
}

export default App;
