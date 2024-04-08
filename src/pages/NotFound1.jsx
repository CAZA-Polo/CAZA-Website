const NotFound1 = () => {
    return (
        <main className="bg-sky-700 md:p-6 p-14 h-screen bg-gradient-to-b from-sky-800 to-gray-100">
            <div className="flex-col justify-center ">
                <img className="md:mx-auto md:h-96 md:w-auto" src="public\images\ErrorPage\error4.webp" alt="error" />   
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <h1 className="md:text-6xl text-6xl mt-7 text-center font-medium text-sky-950">Oops!</h1>
                <h2 className="md:text-2xl text-2xl text-center font-normal text-sky-950">Page Not Found</h2>
                <p className="md:text-xl text-sm font-normal text-center mt-5 text-sky-950">The page you are looking for was moved, removed, renamed, or might never existed</p>
            </div>
            
        </main>
    )
}
export default NotFound1 