import ColorList from "./ColorList";
const Sidebar = ({ isSidebarOpen }) => {
    return (
        <section className={`sidebar${isSidebarOpen ? "--open" : ""}`}>
            <ColorList />
        </section>
    );
};

export default Sidebar;
