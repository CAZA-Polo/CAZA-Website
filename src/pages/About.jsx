import Banner from "../components/AboutComponents/Banner";
import History from "../components/AboutComponents/History";
import Leaders from "../components/AboutComponents/Leaders";
import Vision from "../components/AboutComponents/Vision";
import Footer from "../components/Footer";
import Message from "../components/Message";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | About</title>
        </Helmet>
        <main>
            <Banner />
            <History />
            <Leaders />
            <Vision />
            <Message />
            <Footer />
        </main>
        </>
    )
}

export default About;