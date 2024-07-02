import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const NotFound1 = () => {
    return (
        <main className="bg-gray-200 h-screen flex flex-col items-center justify-center p-6">
            <div className="text-center">
                <h1 className="md:text-6xl text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
                <p className="md:text-xl text-lg text-gray-600 mb-8">The page you are looking for was moved, removed, renamed, or might never have existed.</p>
                <Link to="/" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">Go to Homepage</Link>
            </div>
            <div className="mt-10">
                <img className="w-96 mx-auto" src="/images/ErrorPage/error4.webp" alt="error" />
            </div>
        </main>
    );
}

export default NotFound1;
