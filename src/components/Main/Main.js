import Square from "./Square";
import Input from "./Input";

const Main = ({
    colorValue,
    setColorValue,
    setHexValue,
    isDarkText,
    setIsDarkText,
    hexValue,
    toggleSidebar,
    isSidebarOpen,
    selectedColorName,
}) => {
    return (
        <main>
            <button
                className="toggle-btn"
                type="button"
                onClick={() => {
                    toggleSidebar();
                }}
            >
                {isSidebarOpen ? "🙈" : "🎨"}
            </button>
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
                selectedColorName={selectedColorName}
            />
        </main>
    );
};
export default Main;
