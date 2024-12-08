import React, { useEffect, useState } from 'react';
import FilterAndSort from '../components/FilterAndSort';
import EquipmentDisplay from '../components/EquipmentDisplay';
import HeroSection from '../components/HeroSection';

const AllEquipments = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://equi-sports-server-chi.vercel.app/all-equipments")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setProducts(data)
            setLoading(false)
        })
    },[])
    return (
        <div>
            <HeroSection/>
            <FilterAndSort setProducts={setProducts} />
            <EquipmentDisplay loading={loading} products={products} />
        </div>
    );
};

export default AllEquipments;