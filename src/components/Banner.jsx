import { motion } from "framer-motion"
import { useRef } from "react"
import { useEffect } from "react"
import { useAsyncObserver, useObserver } from "../hooks/useObserver"
import { useScroll, useSpring } from "framer-motion"
import { useState } from "react"
export const Banner = () => {
    /**
     * function startDrag(event) {
  dragControls.start(event, { snapToCursor: true })
}
    */
    // const [scaleX, setScaleX] = useState()
    const element = useRef()
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        // damping: 30,
        // restDelta: 0.001,
        // velocity: 5
    })

    return scaleX ? (
        <motion.div ref={element} className="mt-10 w-full text-center overflow-x-hidden">
            <div className=" flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center h-fit md:h-[80px]">
                <motion.p animate={{ translateX: scaleX }} className="[transform-origin:_0%] text not-italic font-[600] text-sm md:text-2xl text-white font-clash-display text-center">Web2 Developement</motion.p>
                <motion.p animate={{ translateX: scaleX }} className="[transform-origin:_0%] text not-italic font-[600] text-sm md:text-2xl text-white font-clash-display text-center">Web3 Developement</motion.p>
                <motion.p animate={{ translateX: scaleX }} className="[transform-origin:_0%] text not-italic font-[600] text-sm md:text-2xl text-white font-clash-display text-center">Community Management</motion.p>
                <motion.p animate={{ translateX: scaleX }} className="[transform-origin:_0%] text not-italic font-[600] text-sm md:text-2xl text-white font-clash-display text-center">Technical Writing</motion.p>
            </div>
        </motion.div>
    ) : null
}