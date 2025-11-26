import React from 'react';
import Slides from '../components/Slides';
import PopularSection from '../components/PopularSection';
import WinterCareTips from '../components/WinterCareTips';
import ExpertVets from '../components/ExpertVets';

const Home = () => {
    return (
        <div>
            <Slides></Slides>
            <PopularSection></PopularSection>
            <WinterCareTips></WinterCareTips>
            <ExpertVets></ExpertVets>
        </div>
    );
};

export default Home;