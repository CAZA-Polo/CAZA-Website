import Banner from "../components/CareerComponents/Banner";
import BusinessProcess from "../components/CareerComponents/BusinessProcess";
import JoinUs from "../components/CareerComponents/JoinUs";
import Footer from "../components/Footer";
import Message from "../components/Message";
import { Helmet } from "react-helmet";
const Career = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Career Opportunity</title>
        </Helmet>
        <main>
            <Banner />
            <JoinUs />
            <BusinessProcess />
            {/* <Message /> */}
            <Footer />
        </main>
        </>
    )
}

export default Career;