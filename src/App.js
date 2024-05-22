import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import colornames from "colornames";

function App() {
    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [colorList, setColorList] = useState([]);

    // Defines colors from the colornames API
    useEffect(() => {
        setColorList(colornames.all());
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            <Header />
            <div className="content-container">
                <Sidebar isSidebarOpen={isSidebarOpen} colorList={colorList} />
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
