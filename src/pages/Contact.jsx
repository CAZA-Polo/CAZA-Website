import Banner from "../components/ContactComponents/Banner";
import CAZALocation from "../components/ContactComponents/CAZALocation";
import ExperiencedTeam from "../components/ContactComponents/ExperiencedTeam";
import Footer from "../components/Footer";
import Message from "../components/Message";
import { Helmet } from "react-helmet";
const Contact = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Contact Us</title>
        </Helmet>
        <main>
            <Banner />
            <Message />
            {/* <ExperiencedTeam /> */}
            <CAZALocation />
           
            <Footer />
        </main>
        </>
    )
}

export default Contact;