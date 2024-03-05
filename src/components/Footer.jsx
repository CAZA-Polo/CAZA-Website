import { FaSquareFacebook,FaSquareTwitter,FaSquareGooglePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {

    const [paths,setPaths] = useState([
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
            link: '/contact'
        }
    ])

    return (
        <footer className="bg-gray-900">
            <div className="grid grid-cols-3 gap-10 md:p-16 p-10 items-stretch justify-around text-gray-300 container mx-auto">
                <div className="hidden md:block">
                    <img className="object-fit md:w-64 w-32" src="/images/CAZA_Transparent.png" alt="CAZA Logo" />
                </div>

                <div>
                    <h1 className="font-semibold md:text-lg text-sm">Useful Links</h1>
                    <ul className="text-xs md:text-sm">
                        { paths?.map(path => (
                            <li key={path.id} className="hover:underline transition cursor-pointer w-fit">
                                <Link to={path.link}>{path.pathName}</Link>
                            </li>
                        )) }
                    </ul>
                </div>

                <div className="col-span-2 md:col-auto">
                    <h1 className="font-semibold md:text-lg text-sm">Get In Touch</h1>
                    <div className="md:text-sm text-xs">
                        <p>CAZA Technology Solutions Inc.</p>
                        <p>Unit 707 Antel Corporate Center 121 Valero St., Salcedo Village Makati City, Philippines 1227</p>
                        <p>Phone: +632 8805 8476</p>
                        <p>Email: inquiry@cazatechnology.com</p>

                        <div className="flex gap-3 md:mt-0 mt-3">
                            <FaSquareFacebook className="text-blue-700" />    
                            <FaSquareTwitter className="text-blue-500" />
                            <FaSquareGooglePlus className="text-red-500" />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="text-center bg-gray-800 p-5">
                <p className="text-gray-100 md:text-sm text-xs">Copyright &copy; 2018 All Rights Reserved | CAZA Technology Solutions Inc.</p>
            </div>
        </footer>
    )
}

export default Footer;