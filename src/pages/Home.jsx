import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import ProductsSection from '../components/ProductsSection';
import Testimonial from '../components/Testomonial';
import SportsBlog from '../components/SportsBlog';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductsSection/>
            <Testimonial/>
            <SportsBlog/>
        </div>
    );
};

export default Home;