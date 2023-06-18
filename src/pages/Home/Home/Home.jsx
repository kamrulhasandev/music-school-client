import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import TopInstructor from '../TopInstructor/TopInstructor';
import TopClasses from './TopClasses/TopClasses';
import ContactUs from '../ContactUs/ContactUs';
import AboutPage from '../../AboutPage/AboutPage';
import MusicalInstrument from '../MusicalInstrument/MusicalInstrument';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music Universe | Home</title>
            </Helmet>
            <Banner/>
            <TopClasses />
            <TopInstructor/>
            <AboutPage data-aos="zoom-out"/>
            <MusicalInstrument/>
            <ContactUs/>
            
        </div>
    );
};

export default Home;