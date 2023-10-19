import { useProjects } from "../hooks/useProjects"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { useParallex } from "../hooks/useParallax"
import { Card } from "./Card"
export const Projects = () => {
    const projects = useProjects()
    const ref = useRef()
    return (
        <>
            <div id="projects" className="mt-20 font-sans h-fit flex flex-col justify-center items-center">
                <div className="text-left text-3xl md:px-20">
                    <h1 className="text-[50px] w-full md:text-[140px] uppercase leading-[40.48px] font-bricolage text-white font-semibold">Recent Work</h1>
                </div>
                <div ref={ref} className="pb-10 grid grid-cols-1 md:grid-cols-2 px-10 py-10 place-items-start md:mt-10 gap-5 w-screen h-fit">
                    {
                        projects.map((data, i) => (
                            <Card h key={i}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center md:flex-row gap-12 w-full">
                                    {/* <img className="object-contain w-[340px] rounded-[16px]" src={data.img} alt={data.title} /> */}
                                    <div className="flex flex-row justify-between items-center gap-5 w-full">
                                        <motion.div className="flex flex-row justify-between items-center gap-5 !text-white">
                                            <h1 className="text-xl md:text-[70px] md:leading-[100.48px] font-semibold">{data.title}</h1>
                                            <p className="text-white text-base">
                                                <a href={data.link} target="_blank" rel="noopener noreferrer" className="stroke-indigo-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                                        <path d="M20 7.50001L20 1.50001M20 1.50001H14M20 1.50001L11 10.5M9 1.5H6.8C5.11984 1.5 4.27976 1.5 3.63803 1.82698C3.07354 2.1146 2.6146 2.57354 2.32698 3.13803C2 3.77976 2 4.61984 2 6.3V14.7C2 16.3802 2 17.2202 2.32698 17.862C2.6146 18.4265 3.07354 18.8854 3.63803 19.173C4.27976 19.5 5.11984 19.5 6.8 19.5H15.2C16.8802 19.5 17.7202 19.5 18.362 19.173C18.9265 18.8854 19.3854 18.4265 19.673 17.862C20 17.2202 20 16.3802 20 14.7V12.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </p>
                                        </motion.div>
                                    </div>
                                </a>
                            </Card>
                        ))
                    }
                </div>
                {/* <div className="px-20 flex flex-col space-y-10">
                    <h1 className="text-2xl font-clash-display"> I already worked with some techonologies, and here they are:</h1>
                    <ul className="flex flex-col md:flex-row gap-10 text-2xl font-semibold">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript (w/Typescript)</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Axios</li>
                        <li>Express</li>
                        <li>Prisma</li>
                        <li>Node.js</li>
                        <li>React Native</li>
                        <li>Expo</li>
                    </ul>
                    <button>

                    </button>
                </div> */}
            </div>
        </>
    )
}