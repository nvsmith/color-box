import ColorGrid from "./ColorGrid";
const Sidebar = ({
    isSidebarOpen,
    colorList,
    handleColorListSelection,
    handleClearInput,
}) => {
    return (
        <section className={`sidebar${isSidebarOpen ? "--open" : ""}`}>
            <ColorGrid
                colorList={colorList}
                handleColorListSelection={handleColorListSelection}
                handleClearInput={handleClearInput}
            />
        </section>
    );
};

export default Sidebar;
