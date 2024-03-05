import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
        <Helmet>
            <title>CAZA | Not Found</title>
        </Helmet>
        <main className="h-screen flex items-center justify-center bg-sky-100 p-32">
            <div className="flex flex-col gap-3">
                <h1 className="text-8xl font-bold text-blue-400">404 Not Found</h1>
                <p className="text-sm">The page you are looking for was moved, removed, renamed, or might never existed</p>
                <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-gray-100 rounded-md w-1/4 text-sm">Go Back</button>
            </div>

            <div className="flex items-center justify-center">
                <img className="w-3/5" src="/images/ErrorPage/error.png" alt="error" />
            </div>
        </main>
        </>
    )
}

export default NotFound;