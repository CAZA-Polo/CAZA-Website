import Banner from "../components/ProductComponents/Banner";
import { Helmet } from "react-helmet";
const Product = () => {
    return (
        <>
        <Helmet>
            <title>CAZA | Products</title>
        </Helmet>
        <main>
            <Banner />
        </main>
        </>
    )
}

export default Product;