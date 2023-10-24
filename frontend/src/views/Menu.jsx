import React, { useState, useEffect } from 'react';
import clientAxios from "../config/clientAxios";
import ProductCard from '../components/ProductCard';

export default function Menu() {
    const [ products, setProducts ] = useState([]);

    const getProducts = async () => {
        try{
            const { data } = await clientAxios('/products/all-products');
            setProducts(data);
        }
        catch(e){
            console.error('Error products');
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container border my-5 text-center w-50 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto">
            { products.length ?
                <div className="row">
                    { products.map((product, i) => 
                    <div className="col-12 col-sm-12" key={i}>
                        <ProductCard {...product} />
                    </div>
                    )}
                </div>
            :
            <p>No hay productos</p>
        }
        </div>
    )
}