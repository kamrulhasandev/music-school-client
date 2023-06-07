import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Educame | Home</title>
            </Helmet>
            <Banner/>
        </div>
    );
};

export default Home;