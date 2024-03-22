import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Privacy Policy</title>
        </Helmet>
        <main className="md:p-14 p-16 h-screen bg-white">
            <div>
                <h1 className="text-4xl text-sky-950 font-bold">Privacy Policy</h1>
            </div>
                    <hr className="w-56 h-2 my-1 bg-gray-100 border-0 rounded md:my-8 dark:bg-sky-900"></hr>
            <div>
                <h1 className="mt-24 text-4xl text-sky-950 font-semibold">Lorem, ipsum.</h1>
                    <hr className="w-16 h-1 my-1 bg-gray-100 border-0 rounded md:my-1 dark:bg-sky-900"></hr>
                <p className="mt-7 text-xl text-sky-950 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio nemo corporis iste excepturi dicta officiis. Inventore delectus voluptatibus consequatur?</p>
            </div>
        </main>
        </>
    )
}

export default PrivacyPolicy;