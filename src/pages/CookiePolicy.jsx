import { Helmet } from "react-helmet";

const CookiePolicy = () => {
    return (
        <main>
             <>
            <Helmet>
                <title>CAZA | Cookie Policy</title>
            </Helmet>
            <main className="md:p-14 p-16 h-screen bg-gray-100 container mx-auto">
                <div>
                    <h1 className="text-4xl text-sky-950 font-bold">Cookie Notice</h1>
                </div>
                <hr className="h-1 my-1 bg-gray-100 border-0 rounded md:my-8 dark:bg-sky-900"></hr>
                
                <div className="text-sky-950 font-medium">
                    <p className="text-lg text-sky-950 font-medium">CAZA Technology Solutions Inc. ("CAZA") is committed to safeguarding your personal information, and we wish to be transparent about how we handle the same.</p>

                    <p className="font-medium text-lg">Accordingly, we developed this Cookie Notice to inform you about our use of cookies across this website. We want you to understand what cookies are, how CAZA uses cookies, and what your choices are.</p>
                </div>
            </main>
            </>
        </main>
    )
}

export default CookiePolicy;