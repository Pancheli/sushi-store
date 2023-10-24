import React from 'react';

export const ProductCard = (props) => {
    const { id, name, price, quantity, ingredients, image } = props;

    return (
        <div>
            <img src={`/img/menu/${image}`} alt={name} />
            <p>{ name }</p>
            <p>{ price }</p>
            <p>{ ingredients.join(',') }</p>
        </div>
    );
}

export default ProductCard;