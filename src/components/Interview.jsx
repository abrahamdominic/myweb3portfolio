import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "./Card"

export const Interview = () => {
    const [interview] = useState([
        {
            name: "Tech Teens: Here are 4 Nigerian Teen Software Developers Doing Amazing Things in Tech",
            // link: "https://youtu.be/akDbmEEds5Q",
            embed: "https://www.youtube.com/embed/akDbmEEds5Q",
        },
        {
            name: "Young People Doing Big Things - Interview with Emeka Uche",
            embed: "https://www.youtube.com/embed/EJ5qcVCHhgU" ,
        },
    ])
    return (
        <>
            <motion.div id="interviews" className="mt-24 mb-10 overflow-hidden flex flex-col items-center font-bricolage h-full md:h-screen">
                <motion.h1 initial={{ y: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDelay: "initial" }} animate={{ y: 0, transitionProperty: "all", transitionTimingFunction: "ease" }} className="text-5xl mb-10 text-white">Interviews</motion.h1>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-11 px-5">
                    {interview.map((data, i) => (
                        // <Card h={true}>
                            <motion.div className="md:px-6 py-4 flex flex-col gap-y-2">
                                <motion.iframe className="w-[290px] md:w-[560px] h-[315px]" src={data.embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></motion.iframe>
                                <motion.div className="font-normal font-bricolage text-white w-[290px] md:w-fit text-xl mb-2">{data.name}</motion.div>
                            </motion.div>
                        // </Card>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}