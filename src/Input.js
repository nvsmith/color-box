import colorNames from "colornames";

const Input = ({
    colorValue,
    setColorValue,
    setHexValue,
    isDarkText,
    setIsDarkText,
}) => {
    console.log(`colorNames: `, colorNames.all());
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Add Color Name</label>
            <input
                type="text"
                required
                autoFocus
                placeholder="Add Color Name"
                value={colorValue}
                onChange={(e) => {
                    const inputColor = e.target.value.toLowerCase(); // Convert to lowercase for consistent lookup
                    setColorValue(inputColor);
                    // Gets HEX code for a name from colornames API.
                    const colorHex = colorNames(inputColor);
                    setHexValue(colorHex);
                }}
            />
            <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
                Toggle Text Color
            </button>
        </form>
    );
};

export default Input;
