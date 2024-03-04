import Footer from "../components/Footer";
import Message from "../components/Message";
import Banner from "../components/TeamComponents/Banner";
import Growth from "../components/TeamComponents/Growth";
import { Helmet } from "react-helmet";
const Team = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Meet Our Team</title>
        </Helmet>
        <main>
            <Banner />
            <Growth />
            <Message />
            <Footer />
        </main>
        </>
    )
}

export default Team;