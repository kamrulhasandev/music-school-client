import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import TopInstructor from '../TopInstructor/TopInstructor';
import TopClasses from './TopClasses/TopClasses';
import ContactUs from '../ContactUs/ContactUs';
import AboutPage from '../../AboutPage/AboutPage';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Educame | Home</title>
            </Helmet>
            <Banner/>
            <div className='bg-[#ECF2FF]'>
            <TopClasses/>
            </div>
            <TopInstructor/>
            <AboutPage/>
            <ContactUs/>
        </div>
    );
};

export default Home;