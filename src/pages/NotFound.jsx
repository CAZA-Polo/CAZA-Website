import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    console.log(navigate);

    return (
        <main className="h-screen flex items-center justify-center bg-sky-100 p-32">
            <div className="flex flex-col gap-3">
                <h1 className="text-7xl font-bold text-blue-400">404 Not Found</h1>
                <p className="text-lg">The page you are looking for was moved, removed, renamed, or might never existed</p>
                <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-gray-100 rounded-md w-1/4">Go Back</button>
            </div>

            <div className="flex items-center justify-center">
                <img className="w-3/5" src="/images/ErrorPage/error.png" alt="error" />
            </div>
        </main>
    )
}

export default NotFound;