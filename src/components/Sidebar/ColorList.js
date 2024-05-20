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
                        <th className="col--left">Color Name</th>
                        <th className="col--right">Hex Value</th>
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
