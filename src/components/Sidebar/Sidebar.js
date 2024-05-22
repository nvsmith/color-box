import ColorGrid from "./ColorGrid";
const Sidebar = ({ isSidebarOpen, colorList }) => {
    return (
        <section className={`sidebar${isSidebarOpen ? "--open" : ""}`}>
            <ColorGrid colorList={colorList} />
        </section>
    );
};

export default Sidebar;
