import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "+ 500 Bm3/Y", // tag
        "#000033",    //color
        (quantity) => quantity >= 500000, // en Mm3
        "white"  // text color
    ),
    new LegendItem(
        "100 - 500",
        "#0000b3",
        (quantity) => quantity >= 100000 && quantity <= 500000,
        "white"  // text color
    ),
    new LegendItem(
        "50 - 100",
        "#1a1aff",
        (quantity) => quantity >= 50000 && quantity <= 100000,
        "white"  // text color
    ), 
    new LegendItem(
        "15 - 50",
        "#6666ff",
        (quantity) => quantity >= 25000 && quantity <= 50000,
    ),
    new LegendItem(
        "10 - 25",
        "#b3b3ff",
        (quantity) => quantity >= 10000 && quantity <= 25000,
    ),
    new LegendItem(
        "1 - 10",
        "#e6e6ff",
        (quantity) => quantity >= 1000 && quantity <= 10000,
    ),
    new LegendItem("-1 Bm3/Y", "#ffffff", (quantity) => true)

];

export default legendItems;