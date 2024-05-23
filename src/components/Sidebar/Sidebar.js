import ColorGrid from "./ColorGrid";
const Sidebar = ({ isSidebarOpen, colorList, handleColorListSelection }) => {
    return (
        <section className={`sidebar${isSidebarOpen ? "--open" : ""}`}>
            <ColorGrid
                colorList={colorList}
                handleColorListSelection={handleColorListSelection}
            />
        </section>
    );
};

export default Sidebar;
