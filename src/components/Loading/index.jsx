import { motion } from "framer-motion"
import {useSpring,animated} from "@react-spring/web"
export function Loader() {
    const { bg } = useSpring({
        from: { bg: '#000' },
        to: async next => {
            await next({ bg: '#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6,'0') })
        },
        config: { duration: 1000 },
      });
    // const { progress } = useProgress()
    return <animated.div style={{ background: bg }} className="bg-[#2272FF] w-screen h-screen flex flex-col justify-center items-center">
        <motion.p className="scroll not-italic font-[600] text-[26px] md:text-7xl text-white font-clash-display text-center">tobi.card</motion.p>
    </animated.div>
}