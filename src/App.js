import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
    const [colorValue, setColorValue] = useState("");
    const [hexValue, setHexValue] = useState("");
    // const [isDarkText, setIsDarkText] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        console.log("button clicked");
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            <Header />
            <div className="content-container">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <Main
                    colorValue={colorValue}
                    hexValue={hexValue}
                    setColorValue={setColorValue}
                    setHexValue={setHexValue}
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                    // isDarkText={isDarkText}
                    // setIsDarkText={setIsDarkText}
                />
            </div>
        </div>
    );
}

export default App;
