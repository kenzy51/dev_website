import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ProductsList from '../../components/Products/ProductsList';
import Footer from '../../components/_App/Footer';

const Products = ({ user }) => {
  return (
    <div>
      <Navbar
        userRole={user}
      />
      <PageBanner
        pageTitle='Products'
        pageName='Products'
      />
      <ProductsList />
      <Footer />

    </div>
  );
};
export default Products
