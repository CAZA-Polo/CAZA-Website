import { useState } from 'react';
import { Link } from 'react-router-dom';

const CookiePop = () => {

    const privacyPolicyPage = <Link className="font-bold underline" to='/privacy-policy'>Data Privacy Policy</Link>;
    const cookiePolicy = <Link className="font-bold underline" to='/cookie-policy'>Cookie Policy</Link>;

    return (
        <div className="fixed bottom-10 justify-center flex items-center">
            <div className="bg-black text-gray-100 bg-opacity-80 p-4 rounded-md w-3/4 grid grid-cols-3">
                <div className="col-span-2">
                    <h1 className="text-xl font-semibold">Cookie Notice</h1>
                    <p className="text-sm">We use cookies to ensure you receive the best experience from our website. By clicking "I AGREE" or continuing to use the website, 
                    you accept the use of cookies. Your data will be processed in accordance with our {privacyPolicyPage} and {cookiePolicy}.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 text-sm mt-3">
                    <button className="border border-gray-100 rounded-md text-white p-2 w-3/4">Decline</button>
                    <button className="bg-blue-500 text-gray-100 rounded-md p-2 w-3/4">Accept</button>
                </div>  
            </div>
        </div>
    )
}

export default CookiePop;