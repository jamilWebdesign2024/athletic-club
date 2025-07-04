import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Shared/Navbar';
import errordoc from '../../assets/errordoc.jpg';

const ErrorPage = () => {
    return (
       <div className='min-h-screen flex flex-col bg-white'>
            <Navbar/>
            <div className='flex-grow flex items-center flex-col py-5'>
               <img src={errordoc} alt="Page not found" className="w-4/12" />
                <h1 className="text-3xl font-bold text-red-500 mt-4">Page Not Found</h1>
                <Link to='/'><button className='bg-primary rounded-4xl px-4 py-2 cursor-pointer text-white mt-6'>Back Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;