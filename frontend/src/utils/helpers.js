export const formattedPrice = (price) => {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    }).format(price);
}