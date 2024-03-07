import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
        <Helmet>
            <title>CAZA | Not Found</title>
        </Helmet>
        <main className="h-screen flex flex-col md:flex-row items-center justify-center bg-sky-100 md:p-32 p-10">
            <div className="flex flex-col gap-3">
                <h1 className="md:text-8xl text-6xl font-bold text-blue-400">404 Not Found</h1>
                <p className="md:text-sm text-xs">The page you are looking for was moved, removed, renamed, or might never existed</p>
                <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-gray-100 rounded-md w-1/4 md:text-sm text-xs">Go Back</button>
            </div>

            <div className="flex items-center justify-center order-first md:order-last">
                <img className="md:w-3/5 w-auto" src="/images/ErrorPage/error.png" alt="error" />
            </div>
        </main>
        </>
    )
}

export default NotFound;