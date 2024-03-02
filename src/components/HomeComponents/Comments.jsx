import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Comments = () => {

    const [comments,setComments] = useState([
        {
            id: 1,
            description: 'We have ammassed unparalleled expertise in making software solutions go further, work harder and deliver more - for longer and at lower cost.',
            commentBy: 'CAZA Team'
        },
        {
            id: 2,
            description: 'Our expert services group offers both one-off tailored consultancy and also a wide range of packaged, or "productised" services.',
            commentBy: 'CAZA Team'
        }
    ])

    return (
        <section className="p-32 flex items-center justify-center thought-bg relative">
            <Carousel className="w-1/2" showThumbs={false} autoPlay={true} interval={3000} showArrows={true} swipeable={true} showIndicators={false} infiniteLoop showStatus={false}>
                { comments?.map(comment => (
                    <div className="flex flex-col gap-5 items-center text-gray-100" key={comment.id}>
                        <p>{comment.description}</p>
                        <p className="italic">{comment.commentBy}</p>
                    </div>
                )) }    
            </Carousel>
        </section>
    )
}

export default Comments;