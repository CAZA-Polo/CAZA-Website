import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { motion,AnimatePresence } from 'framer-motion';
import animateHook from '../hooks/animateHook';
import { GlobalContext } from '../helpers/GlobalContext';

const cookieVariant = {
    initial: { opacity:0, scale: 0, transition: { duration: 1 } },
    animate: { opacity:1, scale: 1, transition: { duration: 1 }},
    exit: { opacity:0, scale: 0, transition: { duration: 1 } }
}

const CookiePop = () => {

    const { ref,controls } = animateHook(cookieVariant.animate,cookieVariant.initial);

    const privacyPolicyPage = <Link className="font-bold underline" to='/privacy-policy'>Data Privacy Policy</Link>;
    const cookiePolicy = <Link className="font-bold underline" to='/cookie-policy'>Cookie Policy</Link>;

    const { cookieAgree,cookieUserResponse,cookiePop } = useContext(GlobalContext);
    const { setAgree: setCookieAgree } = cookieAgree;

    const { showCookiePop,setShowCookiePop } = cookiePop;

    const userCookieAgree = () => {
        // Will hide the cookie popup
        setShowCookiePop(false);
        window.localStorage.setItem("CAZACookieConsent", true);
    }

    const userDeclineCookie = () => {
        // Will hide the cookie popup
        setShowCookiePop(false);
        window.localStorage.setItem("CAZACookieConsent", false);
    }

     // If user is not yet clicking agree or decline, always show cookie popup 
    const checkIfAgreeCookies = () => cookieUserResponse === null && controls

    return (
        <div className="fixed bottom-10 w-full z-50">
            <div className="container mx-auto justify-center flex items-center">
                <AnimatePresence>
                    { showCookiePop && 
                        <motion.div
                            ref={ref} 
                            key={showCookiePop}
                            variants={cookieVariant}
                            animate={checkIfAgreeCookies()}
                            initial="initial"
                            exit="exit"
                            className={`bg-black text-gray-100 bg-opacity-80 p-4 rounded-md w-3/4 md:grid md:grid-cols-3 grid grid-cols-1`}>
                            <div className="md:col-span-2 cols-span-1">
                                <h1 className="md:text-xl text-lg font-semibold">Cookie Notice</h1>
                                <p className="md:text-sm text-sm">We use cookies to ensure you receive the best experience from our website. By clicking "I AGREE" or continuing to use the website, 
                                you accept the use of cookies. Your data will be processed in accordance with our {privacyPolicyPage} and {cookiePolicy}.</p>
                            </div>

                            <div className="md:flex md:flex-col flex flex-row items-center justify-center md:gap-2 gap-4 text-sm md:mt-3 mt-5">
                                <button onClick={userDeclineCookie} className="border border-gray-100 rounded-md text-white p-2 w-3/4 text-xs md:text-sm">DECLINE</button>
                                <button onClick={userCookieAgree} className="bg-blue-500 text-gray-100 rounded-md p-2 w-3/4 text-xs md:text-sm">I AGREE</button>
                            </div>  
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CookiePop;