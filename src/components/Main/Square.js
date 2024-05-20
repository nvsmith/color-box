const Square = ({ colorValue, hexValue, isDarkText }) => {
    // Checks that hexValue is not undefined
    const isValidColor = hexValue !== undefined;

    return (
        <section className="display-container">
            <div
                className="square"
                style={{
                    backgroundColor: isValidColor ? hexValue : "#fff",
                    // color: isDarkText ? "#000" : "#fff",
                    color: "#fff",
                }}
            >
                <p>{colorValue ? colorValue : "🎨"}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>

            <div
                className="square--dark"
                style={{
                    backgroundColor: isValidColor ? hexValue : "#000",
                    // color: isDarkText ? "#000" : "#fff",
                    color: "#000",
                }}
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
