import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus,FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {

    const [paths,setPaths] = useState ([
        {
            id: 1,
            pathName: 'About Us',
            link: '/about'
        },
        {
            id: 2,
            pathName: 'Products',
            link: '/products'
        },
        {
            id: 3,
            pathName: 'Career',
            link: '/career'
        },
        {
            id: 4,
            pathName: 'FAQ',
            link: '/faq'
        },
        {
            id: 5,
            pathName: 'Contact Us',
            link: '/contact',
        }
    ])

    return (
        <footer className="bg-sky-700 bg-gradient-to-b from-sky-950 to-gray-950">
            <div className="md:grid md:grid-cols-6 flex-row gap-10 md:px-8 m:p-10 p-4 items-stretch justify-items-start text-gray-300 container mx-auto">
                <div className="md:block flex-row">
                    <img className="md:w-32 w-24 md:mt-4 mt-1 mx-auto" src="/images/CAZA_Transparent.png" alt="CAZA Logo" />
                </div>
                <div className="md:col-span-1 md:ml-10 md:mt-6">
                    <h1 className="font-semibold text-center text-lg md:ml-7 md:contents hidden">COMPANY</h1>
                    <ul className="text-sm md:mt-10 md:text-sm md:grid md:justify-items-start grid justify-items-center mt-5">
                        { paths?.map(path => (
                            <li key={path.id} className="hover:underline transition cursor-pointer w-fit mt-2">
                                <Link to={path.link}>{path.pathName}</Link>
                            </li>
                        )) }
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-2 md:px-10 md:ml-10 md:mt-6 mt-14">
                    <h2 className="font-semibold text-start text-lg md:contents hidden ">CONTACT</h2>
                    <div className="md:text-sm font-light text-xs md:flex md:flex-col md:gap-3 md:mt-10 grid justify-items-center">
                        {/* <p>CAZA Technology Solutions Inc.</p> */}
                        <p className="md:flex md:items-center flex col gap-4 mt-5 md:mt-auto md:mr-40 mr-40"><FaPhone className="text-sky-600 size-4"/>   +632 8805 8476</p>
                        <p className="md:flex md:items-center flex col gap-4 mt-5 md:mt-auto md:mr-40 mr-20"><MdMarkEmailRead className="text-sky-600 size-4"/> inquiry@cazatechnology.com</p>
                    </div>
                </div>
                <div className="nd:col-span-2 md:col-span-2 md:ml-1 md:mt-6">
                    <h3 className="font-semibold text-start text-lg md:contents hidden">LOCATION</h3>
                    <div className="md:text-sm font-light text-xs md:flex md:flex-col md:gap-3 md:mt-10 mt-3 grid justify-items-center">
                        {/* <p>CAZA Technology Solutions Inc.</p> */}
                        <p className="md:flex md:items-center md:gap-4 flex col gap-4 md:px-0 px-9 md:ml-auto md:mt-auto ml-1 mt-2"><FaLocationDot className="text-sky-600 size-6"/> Unit 707 Antel Corporate Center 121 Valero St. Salcedo Village Makati City, Philippines 1227</p>
                    </div>
                </div>
            </div>
            <hr className="h-px my-3 mx-auto w-5/6 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="col-span-2">
                    <div className="flex gap-3 justify-center md:mt-6 mt-1 text-xl">
                        <FaSquareFacebook className="text-blue-700" />    
                        <FaSquareTwitter className="text-blue-500" />
                        <FaSquareGooglePlus className="text-red-500" />
                    </div>
                </div>

            <div className="md:p-3 p-5 md:mt-8 mt-5 flex justify-around items-center">
                <div>
                    <p className="text-gray-100 md:text-sm text-xs text-start font-light md:mr-56 mr-3">Copyright &copy; 2024 All Rights Reserved | CAZA Technology Solutions Inc.</p>
                </div>
                <div className="text-gray-100 md:text-sm text-xs flex items-end gap-2">
                    <Link to="/privacy-policy"><p className="cursor-pointer font-light">Privacy Policy</p></Link>
                    <p>|</p>
                    <p className="cursor-pointer font-light">Terms of Services</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;