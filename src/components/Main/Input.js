import React, { useEffect } from "react";
import colornames from "colornames";

const Input = ({
    colorValue,
    setColorValue,
    setHexValue,
    selectedColorName,
}) => {
    // Updates the input field when selectedColorName changes
    useEffect(() => {
        if (selectedColorName) {
            handleColorChange(selectedColorName);
        }
    }, [selectedColorName]);

    const handleColorChange = (inputColor) => {
        const lowerCaseColor = inputColor.toLowerCase();
        setColorValue(lowerCaseColor);
        const colorHex = colornames(lowerCaseColor); // Gets HEX code for a name from colornames API.
        setHexValue(colorHex);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="colorInput">Type Color Name Here</label>
            <input
                id="colorInput"
                type="text"
                required
                autoFocus
                placeholder="Type Color Name Here"
                value={colorValue} // Updates the input field when colorValue changes
                onChange={(e) => handleColorChange(e.target.value)}
            />
        </form>
    );
};

export default Input;
