import { Link } from 'react-router-dom';
import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import { MdArrowRight } from "react-icons/md";

const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false);
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
            icon: <IoIosArrowDown className="md:group-hover:rotate-180 transition"/>
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

    const navigate = useNavigate();

    const onScrollEvent = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll < 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
            setShowMenu(false)
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
        <nav className={`p-2 bg-gray-100 w-full ${!isVisible && 'fixed bg-opacity-55'} z-50 md:block hidden`}>
            <div className="container mx-auto">
                {/* <div className={`bg-gray-300 absolute top-0 left-0 w-full p-1 ${!isVisible && 'hidden'}`}>
                    <div className="flex items-center container mx-auto justify-around">
                        <div className="text-xs flex gap-3 text-gray-500 font-light">
                            <span>Email: inquiry@cazatechnology.com</span>
                            <span>Hotline: +632 8805 8476</span>
                        </div>

                        <div className="flex gap-3">
                            <FaSquareFacebook className="text-blue-700" />    
                            <FaSquareTwitter className="text-blue-500" />
                            <FaSquareGooglePlus className="text-red-500" />
                        </div>
                    </div>
                </div> */}

                {/* For Desktop */}
                <div className={`w-full ${!isVisible ? 'mt-0' : ''} z-50 flex justify-between items-center `}>
                    <img onClick={() => navigate('/') } className="w-[128px] cursor-pointer h-[65px] mx-5 object-fit" src="./images/CAZA_Transparent.png" alt="CAZA Logo" />
                    <ul className="flex justify-center items-center gap-8 font-normal text-gray-700 text-sm">
                        { paths?.map((path,id) => (
                            <li onClick={ (path.link !== '/about' && pathName !== 'About') ? scrollToTop : undefined } key={id}>
                                { path.name !== 'About' ? 
                                    <Link className={`${path.name === 'Contact Us' && 'caza__blue p-2 rounded-full text-gray-100' } hover:border-b hover:border-gray-700 hover:transition flex items-center gap-1`} to={path.link}>{path.name}</Link> 
                                        :
                                    <button onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="hover:border-b hover:border-gray-700 hover:transition flex items-center gap-1 group relative">{path.name} {path.icon}
                                        <AnimatePresence>
                                        { isHover && 
                                            <motion.div
                                            key={isHover}
                                            initial={{ opacity:0, y: -15 }}
                                            animate={{ opacity:1, y: 1 }}
                                            exit={{ opacity:0, y:-50 }}
                                            transition={{ duration:0.3 }}
                                            className="group-hover:flex hidden absolute w-[200px] z-50 bg-gray-100 top-5 p-2 rounded-md flex-col items-start">
                                                { aboutChildren?.map(child => (
                                                    <Link key={child.id} className="text-sm border border-gray-300 w-full text-start p-2 hover:bg-blue-500 hover:text-white transition" to={child.link}>{child.name}</Link>
                                                )) }
                                            </motion.div>
                                        }
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
        <nav className="md:hidden flex items-center justify-around bg-gray-200 p-2 border-b-2 border-gray-400">
            <img className="w-[80px] h-[45px]" src="./images/CAZA_Transparent.png" alt="CAZA Logo" />
            <div className="relative">
                <Hamburger size={25} duration={0.5} toggled={showMenu} toggle={() => setShowMenu(!showMenu)} />
                <>
                <AnimatePresence>
                { showMenu &&
                    <motion.ul 
                    key={showMenu}
                    initial={{ opacity:0, x:500 }}
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, x:500 }}
                    transition={{ duration: 0.3 }}
                    className="flex-col justify-center items-center gap-5 font-normal text-gray-700 text-sm fixed w-full h-full p-1 bg-gray-200 left-0 top-[4.1rem] z-50">
                        { paths?.map((path,id) => (
                            <li onClick={ (path.link !== '/about' && pathName !== 'About') ? scrollToTop : undefined } key={id}>
                                { path.name !== 'About' ? 
                                    <Link onClick={() => setShowMenu(!showMenu)} className={`${path.name === 'Contact Us' ? 'caza__blue px-5 mx-3 py-3 rounded-full text-gray-100 w-fit'  : 'p-4'} flex items-center gap-1`} to={path.link}>{path.name}{ path.name !== 'Contact Us' && <FaLongArrowAltRight className="caza__text--blue"/> }</Link> 
                                        :
                                    <>
                                    <button onClick={() => setIsHover(!isHover)} className="p-4 flex items-center gap-1">{path.name} {path.icon !== undefined && <span className={`${isHover && 'rotate-180 transition'}`}>{path.icon}</span>}</button> 
                                    <AnimatePresence>
                                    { isHover && 
                                        <motion.div
                                        key={isHover}
                                        initial={{ opacity:0, y: -15 }}
                                        animate={{ opacity:1, y: 1 }}
                                        exit={{ opacity:0, y:-15 }}
                                        className="p-2 -mt-5 rounded-md flex flex-col">
                                            { aboutChildren?.map(child => (
                                                <Link onClick={() => setShowMenu(!showMenu)} key={child.id} className="text-sm w-full p-2 ml-6 hover:bg-blue-500 hover:text-white transition flex items-center" to={child.link}><MdArrowRight className="caza__text--blue" /> {child.name}</Link>
                                            )) }
                                        </motion.div>         
                                    }
                                    </AnimatePresence>
                                    </>
                                }
                            </li> 
                        )) }
                    </motion.ul>
                }
                </AnimatePresence>
                </>
            </div>                       
        </nav>
        </>
    )
}

export default Navbar;