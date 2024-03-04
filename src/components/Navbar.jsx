import { Link } from 'react-router-dom';
import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    const [isVisible,setIsVisible] = useState(true);
    const [isHover,setIsHover] = useState(false);
    const [paths,setPaths] = useState([
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/about',
            name: 'About',
            icon: <IoIosArrowDown className="group-hover:rotate-180 transition"/>
        },
        {
            id: 3,
            link: '/services',
            name: 'Services'
        },
        {
            id: 4,
            link: '/products',
            name: 'Products'
        },
        {
            id: 5,
            link: '/contact',
            name: 'Contact Us'
        }
    ])

    const [aboutChildren,setAboutChildren] = useState([
        {
            id: 1,
            link: '/about',
            name: 'About Us'
        },
        {
            id: 2,
            link: '/career',
            name: 'Career Opportunity',
        },
        {
            id: 3,
            link: '/team',
            name: 'Meet Our Team'
        },
        {
            id: 4,
            link: '/faq',
            name: 'FAQ'
        },
        {
            id: 5,
            link: '/testimonials',
            name: 'Testimonials'
        }
    ])

    const onScrollEvent = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll < 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }
    }

    const pathName = window.location.pathname;
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(() => {
        window.addEventListener('scroll',onScrollEvent)

        return () => window.removeEventListener('scroll',onScrollEvent); 
    },[])

    return (
        <>
        {/* For Desktop */}
        <nav className={`p-2 bg-gray-200 w-full ${!isVisible && 'fixed bg-opacity-55'} z-50 md:block hidden`}>
            <div className="container mx-auto">
                <div className={`bg-gray-300 absolute top-0 left-0 w-full p-1 ${!isVisible && 'hidden'}`}>
                    <div className="flex items-center container mx-auto justify-around">
                        <div className="text-sm flex gap-3 text-gray-500 font-light">
                            <span>Email: inquiry@cazatechnology.com</span>
                            <span>Hotline: +632 8805 8476</span>
                        </div>

                        <div className="flex gap-3">
                            <FaSquareFacebook className="text-blue-700" />    
                            <FaSquareTwitter className="text-blue-500" />
                            <FaSquareGooglePlus className="text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Hide this element when in mobile */}
                <div className={`w-full ${!isVisible ? 'mt-0' : 'mt-8'} z-50 flex justify-around items-center `}>
                    <img className="w-[128px] h-[65px] mx-5 object-fit" src="./images/CAZA_Transparent.png" alt="CAZA Logo" />
                    <ul className="flex justify-center items-center gap-5 font-normal text-gray-700">
                        { paths?.map((path,id) => (
                            <li onClick={ (path.link !== '/about' && pathName !== 'About') ? scrollToTop : undefined } key={id}>
                                { path.name !== 'About' ? 
                                    <Link className={`${path.name === 'Contact Us' && 'caza__blue p-2 rounded-full text-gray-100' } hover:border-b-2 hover:border-gray-700 hover:transition flex items-center gap-1`} to={path.link}>{path.name}</Link> 
                                        :
                                    <button onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)} className="hover:border-b-2 hover:border-gray-700 hover:transition flex items-center gap-1 group relative">{path.name} {path.icon}
                                        <AnimatePresence>
                                            <motion.div
                                            key={isHover}
                                            initial={{ opacity:0, y: -15 }}
                                            animate={{ opacity:1, y: 1 }}
                                            className="group-hover:flex hidden absolute w-[200px] bg-gray-100 top-6 p-2 rounded-md flex-col items-start">
                                                { aboutChildren?.map(child => (
                                                    <Link key={child.id} className="text-sm border border-gray-300 w-full text-start p-2 hover:bg-blue-500 hover:text-white transition" to={child.link}>{child.name}</Link>
                                                )) }
                                            </motion.div>
                                        </AnimatePresence>
                                    </button> 
                                }
                            </li> 
                        )) }
                    </ul>
                </div>
            </div>
        </nav>

        {/* For mobile */}
        <nav className="md:hidden flex items-center justify-around bg-gray-200 p-2">
            <img className="w-[70px] h-[45px]" src="./images/CAZA_Transparent.png" alt="CAZA Logo" />
            <div className="">
                <button className="cursor-pointer border border-gray-400 p-1 rounded-md"><RxHamburgerMenu /></button>
            </div>                       
        </nav>
        </>
    )
}

export default Navbar;