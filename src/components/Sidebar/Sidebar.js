const Sidebar = ({ isSidebarOpen, colorList, handleColorListSelection }) => {
    return (
        <section className={`sidebar${isSidebarOpen ? "--open" : ""}`}>
            <div className="color-list">
                <h3>Color List</h3>
                <ul>
                    {colorList.map((color, index) => (
                        <li key={index}>
                            <button
                                className="color-list__btn"
                                onClick={() => {
                                    handleColorListSelection(color);
                                }}
                            >
                                {color.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;
