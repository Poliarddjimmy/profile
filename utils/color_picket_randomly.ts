export const ColorPicketRamdomly = () => {
    const colors = [
        // "#FF0000",
        // "#00FF00",
        // "#0000FF",
        // "#FFFF00",
        // "#00FFFF",
        // "#FF00FF",
        // "#C0C0C0",
        "#808080",
        // "#800000",
        // "#808000",
        // "#008000",
        // "#800080",
        "#008080",
        // "#000080",
        // "#FFFFFF",
        "#000000",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
};