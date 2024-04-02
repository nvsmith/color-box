const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#fff",
            }}
        >
            <p>{colorValue ? colorValue : "Color Box"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
};

Square.defaultProps = {
    colorValue: "No Value Given",
};
export default Square;
