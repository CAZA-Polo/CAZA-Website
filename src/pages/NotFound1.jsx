const NotFound1 = () => {
    return (
        <main className="bg-sky-700 h-screen flex p-40">
            <div className="flex flex-col gap-3 justify-center">
                <h1 className="md:text-4xl text-lg font-bold text-slate-100">Oops! Page Not Found</h1>
                <p className="md:text-xl text-lg font-bold pr-64 text-sky-950" >The page you are looking for was moved, removed, renamed, or might never existed</p>
            </div>
            <div className="flex flex-col justify-center">
                <img className="w-auto" src="public\images\ErrorPage\error4.webp" alt="error" />   
            </div>
        </main>
    )
}
export default NotFound1 