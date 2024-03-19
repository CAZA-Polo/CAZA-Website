import { useEffect } from 'react';
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

const animateHook = (animate,initial) => {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if(inView) {
            controls.start(animate)
        } else {
            controls.start(initial)
        }
    },[controls,inView])

    return { ref, inView, controls }
}

export default animateHook;