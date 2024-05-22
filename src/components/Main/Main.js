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
}) => {
    return (
        <main>
            <button
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
            />
        </main>
    );
};
export default Main;
