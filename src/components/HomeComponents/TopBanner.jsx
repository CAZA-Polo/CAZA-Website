import { Carousel } from "react-responsive-carousel";
import { useState } from 'react';

const TopBanner = () => {

    const [images,setImages] = useState([
        {
            photo: '/images/banking-banner.jpg'
        },
        {
            photo: '/images/DSC0114.jpg'
        },
        {
            photo: '/images/ten-reasons-internet-banking_opt.jpg'
        }
    ])

    return (
        <Carousel className="" showThumbs={false} autoPlay={true} interval={1500} showArrows={false} swipeable={true} showIndicators={true} infiniteLoop showStatus={false}>
            { images?.map((image,id) => (
                <img key={id} className="md:h-[600px] h-[300px] object-cover" src={image.photo} alt="banners" />
            )) }
        </Carousel>
    )
}

export default TopBanner;