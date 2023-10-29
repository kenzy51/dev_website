import React from 'react';

import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ProductsList from '../../components/Products/ProductsList';
import Footer from '../../components/_App/Footer';
import ProductDetail from '../../components/Products/productDetail/ProductDetail';

const ProductPage = () => {
    return (
        <div>
            <Navbar
            />
            <PageBanner
                pageTitle='Product detail'
                pageName='Product detail'
            />
            <ProductDetail />
            <Footer />
        </div>
    );
};

export default ProductPage;