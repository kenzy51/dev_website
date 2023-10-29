import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

const StyledImage = styled.img`
    height:150px;
    object-fit:contain;
    max-width:200px;
    justify-content:center;
    display:flex;
    margin:0 auto;
`
const ProductCard = ({ description, imageUrl }) => {
    const productPageRoute = `/products/[id]`;
    return (
        <div className='col-lg-3 col-md-3'>
            <div className='single-blog-post' >
                <div className='post-image' >
                    <Link href={productPageRoute}>
                        <a className='d-block'>
                            <StyledImage src={imageUrl ? imageUrl : 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg'} />

                        </a>
                    </Link>
                </div>
                <div className='post-content'>
                    <h3>
                        <Link href={productPageRoute}>
                            <a>
                                {description}
                            </a>
                        </Link>
                    </h3>
                    <Link href={productPageRoute}>
                        <a className='link-btn'>
                            <i className='flaticon-right-arrow'></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default ProductCard
