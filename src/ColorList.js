import React, { useState, useEffect } from "react";
import colornames from "colornames";

const ColorList = () => {
    const [colorList, setColorList] = useState([]);

    useEffect(() => {
        setColorList(colornames.all());
    }, []);

    return (
        <div>
            <h2>List of Color Names</h2>
            <ul>
                {colorList.map((color, index) => (
                    <li key={index}>
                        {color.name}: {color.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorList;
