import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const CookiePolicy = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Cookie Policy</title>
        </Helmet>
        <main className="md:p-24 md:pt-16 p-10 bg-gray-100 container mx-auto">
            <div>
                <h1 className="md:text-4xl text-2xl text-sky-950 font-bold">Cookie Notice</h1>
            </div>
            <hr className="h-1 my-1 bg-gray-100 border-0 rounded md:my-8 dark:bg-sky-500"></hr>
            
            <div className="flex flex-col gap-5">
                <div className="text-sky-950 font-medium">
                    <p className="md:text-lg text-base mt-5 text-sky-950 font-normal">CAZA Technology Solutions Inc. ("CAZA") is committed to safeguarding your personal information, and we wish to be transparent about how we handle the same.</p>
                </div>

                <div>
                    <p className="md:text-lg text-base text-sky-950 font-normal">Accordingly, we developed this Cookie Notice to inform you about our use of cookies across this website. We want you to understand what cookies are, how CAZA uses cookies, and what your choices are.</p>
                </div>

                <div>
                    <p className="md:text-lg text-base text-sky-950 font-normal">A cookie is a small piece of data (text file) that a website - when visited by a user - asks your browser to store on your device in order to remember information about you, such as your language preference or login information. 
                        Those cookies are set and called first-party cookies. 
                        We also use third-party cookies - which are cookies from a domain different than the domain of the website you are visiting - for our advertising and marketing efforts. 
                        More specifically, we use cookies and other tracking technologies for the following purposes:
                    </p>

                    <ul className="list-disc ml-10 mt-5">
                        <li className="md:text-lg text-base text-sky-950 font-medium"><b>Strictly Necessary Cookies.</b> These cookies are necessary for the website to function and cannot be switched off in our systems. CAZA embeds cookies that are essential for navigating and enabling functionalities such as local device authentication, animation, and image caching. These cookies are turned on by default. If you set your browser to block these cookies, some parts of the site will not work.</li>
                        <li className="md:text-lg text-base text-sky-950 font-medium"><b>Performance Cookies.</b>CAZA uses cookies to understand how visitors use the website and its services in order to improve the over-all performance. Performance cookies provide insights into trends and usage patterns that are used for business analysis, website and service improvements, and for determining performance metrics.</li>
                    </ul>
                </div>

                <div>
                    <p className="md:text-lg text-base text-sky-950 font-normal">The use of cookies also depends on the settings of the web browser you are using (e.g., Microsoft Edge, Google Chrome, Apple Safari, Mozilla Firefox). Most web browsers are preset to automatically accept certain types of cookies.  However, you can usually change this setting. You can delete stored cookies at any time. Web/DOM storage and local shared objects can be deleted separately. You can find out how this works in the browser or device you are using in the manual of the learner.</p>
                </div>

                <div>
                    <p className="md:text-lg text-base text-sky-950 font-normal">The consent to, and rejection or deletion of, cookies are tied to the device and also to the respective web browser you use. If you use multiple devices or web browsers, you can make decisions or settings differently.</p>
                </div>

                <div>
                    <p className="md:text-lg text-base text-sky-950 font-normal">If you choose to delete or refuse to accept cookies, you may not have access to some or all functions of our website or individual functions may be limited.</p>
                </div>

                <div>
                    <h2 className="md:text-lg text-base text-sky-950 font-medium"><b>WEBSITE, COOKIES & SIMILAR TECHNOLOGIES TRACKING POLICY</b></h2>
                    <p className="mt-3 text-sm text-sky-950 font-normal">When you visit our websites, cloud and online services, software products, or view our content on certain third-party websites, we collect information regarding your connection and your activity by using various online tracking technologies, such as cookies, web beacons, Local Storage, or HTML5. Information that is collected with these technologies may be necessary to operate the website or service, to improve performance, to help us understand how our online services are used, or to determine the interests of our users. We may use advertising partners to provide and assist in the use of such technologies on CAZA website and other sites.</p>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default CookiePolicy;