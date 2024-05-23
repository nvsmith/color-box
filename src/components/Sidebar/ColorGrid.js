const ColorGrid = ({ colorList, handleColorListSelection }) => {
    return (
        <div className="color-list">
            <table>
                <thead>
                    <tr>
                        {/* <th className="col--left">Hex Value</th> */}
                        <th className="col--right">Color Name</th>
                    </tr>
                </thead>
                <tbody>
                    {colorList.map((color, index) => (
                        <tr key={index}>
                            {/* <td className="col--left">{color.value}</td> */}
                            <td className="col--right">
                                <button
                                    className="color-list__btn"
                                    onClick={() =>
                                        handleColorListSelection(color)
                                    }
                                >
                                    {color.name}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ColorGrid;
