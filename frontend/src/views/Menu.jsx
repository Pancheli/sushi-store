import React, { useState, useEffect, useMemo } from 'react';
import clientAxios from "../config/clientAxios";
import ProductCard from '../components/ProductCard';

export default function Menu() {
    const [ searchQuery, setSearchQuery ] = useState('');
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

    const productList = useMemo(() => {
        if( products.length ){
            if( searchQuery ){
                return products.filter(item => {
                    const name = item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
                    const query = searchQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
                    return name.includes(query);
                });
            }
            else{
                return products;
            }
        }
        return [];
    }, [searchQuery, products]);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container border my-5 text-center w-50 py-4 rounded bg-light bg-opacity-75 bg-gradient mx-auto w-100">
            <input
                placeholder="Busca tu roll!"
                onInput={(e) => setSearchQuery(e.target.value)}
                className=' rounded-5 border-1 mb-5 p-2 ps-3 d-flex  '
            />

            { productList.length ?
                <div className="row">
                    { productList.map((product, i) => 
                    <div className="col-12 col-sm-3 mb-3" key={i}>
                        <div className="border-1 card rounded overflow-hidden">
                            <ProductCard {...product} />
                        </div>
                    </div>
                    )}
                </div>
            :
            <p>No hay productos</p>
        }
        </div>
    )
}