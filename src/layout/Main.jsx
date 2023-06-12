import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/NavBar';

const Main = () => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet/>
            <div className='bg-slate-400 text-black'>

            <Footer/>
            </div>
        </div>
    );
};

export default Main;