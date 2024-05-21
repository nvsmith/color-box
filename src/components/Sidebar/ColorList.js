import React, { useState, useEffect } from "react";
import colornames from "colornames";

const ColorList = () => {
    const [colorList, setColorList] = useState([]);

    useEffect(() => {
        setColorList(colornames.all());
    }, []);

    return (
        <div className="color-list">
            <table>
                <thead>
                    <tr>
                        <th className="col--left">Hex Value</th>
                        <th className="col--right">Color Name</th>
                    </tr>
                </thead>
                <tbody>
                    {colorList.map((color, index) => (
                        <tr key={index}>
                            <td className="col--left">{color.value}</td>
                            <td className="col--right">{color.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ColorList;
