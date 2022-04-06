import React from 'react';
import Banner from '../../Banner/Banner';
import Demo from '../../Services/Services/Demo';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Demo></Demo>
            <Footer />
        </>
    );
};

export default Home;