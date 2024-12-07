import React from 'react';
import FilterAndSort from '../components/FilterAndSort';
import EquipmentDisplay from '../components/EquipmentDisplay';
import HeroSection from '../components/HeroSection';

const AllEquipments = () => {
    return (
        <div>
            <HeroSection/>
            <FilterAndSort/>
            <EquipmentDisplay/>
        </div>
    );
};

export default AllEquipments;