import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;