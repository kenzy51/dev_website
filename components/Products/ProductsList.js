import React from 'react';
import Link from 'next/link';
import {array} from "./arrayItems";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <section className='blog-area bg-f9f9f9 ptb-100'>
            <div className='container'>
                <div className='row'>
                    {array.map((item)=>(
                        <ProductCard productName={item.productName} description={item.description} date={item.date} imageUrl={item?.imageUrl}/>
                    ))}
                </div>
            </div>
        </section>
        );
};
export default ProductsList;

