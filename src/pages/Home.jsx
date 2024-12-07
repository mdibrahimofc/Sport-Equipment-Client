import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductsSection/>
        </div>
    );
};

export default Home;