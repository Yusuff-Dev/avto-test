import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col gap-5'>
            <h1 className='text-6xl font-bold text-blue-900'>Ooops!</h1>
            <p className='text-4xl font-bold'>404 - Page Not Found.</p>
            <Link to="/" className='btn btn-neutral btn-outline'>Return Home</Link>
        </div>
    );
};

export default NotFound;