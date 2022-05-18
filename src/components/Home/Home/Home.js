import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Product from '../Products/Product';

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <Footer />
        </div>
    );
};

export default Home;