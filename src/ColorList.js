import React, { useState, useEffect } from "react";
import colornames from "colornames";

const ColorList = () => {
    const [colorList, setColorList] = useState([]);

    useEffect(() => {
        setColorList(colornames.all());
    }, []);

    return (
        <div className="color-list">
            <h2>List of Color Names</h2>
            <table>
                <thead>
                    <tr>
                        <th>Color Name</th>
                        <th>Hex Value</th>
                    </tr>
                </thead>
                <tbody>
                    {colorList.map((color, index) => (
                        <tr key={index}>
                            <td className="col--left">{color.name}</td>
                            <td className="col--right">{color.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ColorList;
