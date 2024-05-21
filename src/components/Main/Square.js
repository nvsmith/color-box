const Square = ({ colorValue, hexValue, isDarkText }) => {
    // Checks that hexValue is not undefined
    const isValidColor = hexValue !== undefined;

    return (
        <section className="display-container">
            <div
                className="square"
                style={isValidColor ? { backgroundColor: hexValue } : {}}
            >
                <p>{colorValue ? colorValue : "🎨"}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>

            <div
                className="square--dark"
                style={isValidColor ? { backgroundColor: hexValue } : {}}
            >
                <p>{colorValue ? colorValue : "🎨"}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>
        </section>
    );
};

Square.defaultProps = {
    colorValue: "No Value Given",
};
export default Square;
