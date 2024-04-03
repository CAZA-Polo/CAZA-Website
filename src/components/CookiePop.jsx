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

    const { cookieAgree,cookieUserResponse } = useContext(GlobalContext);
    const { setAgree: setCookieAgree } = cookieAgree;

    const userCookieAgree = () => {
        // Will hide the cookie popup
        setCookieAgree(false);

        window.localStorage.setItem("CAZACookieConsent", true);
    }

    const userDeclineCookie = () => {
        // Will hide the cookie popup
        setCookieAgree(false); 

        window.localStorage.setItem("CAZACookieConsent", false);
    }

    const checkIfAgreeCookies = () => {

        if(cookieUserResponse === true) {
            // Hide cookie banner if user agreed
            console.log(cookieUserResponse , 'true here')
            return null
        } else {
            // Always show cookie banner if user declines
            console.log(cookieUserResponse , 'false here')
            return controls;
        }
    }

    return (
        <div className="fixed bottom-10 justify-center flex items-center container mx-auto">
            <AnimatePresence>
                { cookieAgree.agree && 
                    <motion.div
                        ref={ref} 
                        key={cookieAgree.agree}
                        variants={cookieVariant}
                        animate={checkIfAgreeCookies()}
                        initial="initial"
                        exit="exit"
                        className={`bg-black text-gray-100 bg-opacity-80 p-4 rounded-md w-3/4 grid grid-cols-3 ${cookieUserResponse === true && 'hidden'}`}>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold">Cookie Notice</h1>
                            <p className="text-sm">We use cookies to ensure you receive the best experience from our website. By clicking "I AGREE" or continuing to use the website, 
                            you accept the use of cookies. Your data will be processed in accordance with our {privacyPolicyPage} and {cookiePolicy}.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2 text-sm mt-3">
                            <button onClick={userDeclineCookie} className="border border-gray-100 rounded-md text-white p-2 w-3/4">DECLINE</button>
                            <button onClick={userCookieAgree} className="bg-blue-500 text-gray-100 rounded-md p-2 w-3/4">I AGREE</button>
                        </div>  
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default CookiePop;