import React from 'react';
import Banner from '../../Banner/Banner';
import Demo from '../../Services/Services/Demo';
import Footer from '../../Shared/Footer/Footer';

import Homes from './Homes';
import ExtraPart from './Extra/Extra/ExtraPart';
import LoadAddService from '../../Services/Services/LoadAddService';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Demo></Demo>
            <Homes></Homes>
            <ExtraPart></ExtraPart>
            <LoadAddService></LoadAddService>
            <Footer />
        </>
    );
};

export default Home;