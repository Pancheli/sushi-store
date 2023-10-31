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
            <div class="group mb-4">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Busca tu roll!" type="search" class="input" onInput={(e) => setSearchQuery(e.target.value)} />
            </div>

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