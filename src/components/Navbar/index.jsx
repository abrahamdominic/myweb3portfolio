import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from 'react-scroll';
import { personal } from "../../utils/emails";
// import tobi from "../../assets/tobi_eth.png"


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)
    const variants = {
        open: { x: 0, opacity: 1, transition: { ease: "easeInOut" } },
        closed: { x: "100%", opacity: 0 },
    }
    // }
    return (
        <>
            <motion.div className="fixed z-[99999] bg-[#111]/40 w-screen grid place-self-center md:px-10 h-20 !text-[#fff]">
                <motion.div className="px-4 py-6 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-1">
                        <img src={"/images/tobi-logo.png"} alt="logo" className="object-contain" style={{
                            height: "40px",
                            width: "40px",
                            color: "transparent"
                        }} />
                        <motion.h1 className="text-xl text-white font-bricolage lg:text-3xl uppercase font-bricolage">$Defiiboy</motion.h1>
                    </div>
                    <motion.div>
                    </motion.div>
                    <motion.div className="flex flex-row gap-12 justify-center items-center">
                        <a href={`mailto:${personal}`} className="flex flex-row items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                            <motion.h1 className="text-xl ffont-bricolage font-medium">Talk to me</motion.h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                <path d="M20 7.50001L20 1.50001M20 1.50001H14M20 1.50001L11 10.5M9 1.5H6.8C5.11984 1.5 4.27976 1.5 3.63803 1.82698C3.07354 2.1146 2.6146 2.57354 2.32698 3.13803C2 3.77976 2 4.61984 2 6.3V14.7C2 16.3802 2 17.2202 2.32698 17.862C2.6146 18.4265 3.07354 18.8854 3.63803 19.173C4.27976 19.5 5.11984 19.5 6.8 19.5H15.2C16.8802 19.5 17.7202 19.5 18.362 19.173C18.9265 18.8854 19.3854 18.4265 19.673 17.862C20 17.2202 20 16.3802 20 14.7V12.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
                            <div>
                                <motion.svg
                                    className="w-[35px] h-[35px] !bg-transparent transition-all ease-[ease] group-hover:hidden"
                                    transition={{ type: "just", stiffness: 400, damping: 17 }}
                                    initial={{ y: -50 }} animate={{ y: 0 }} whileTap={{ scale: 0.9 }}
                                    xmlns="http://www.w3.org/2000/svg" width="60" height="19" viewBox="0 0 60 19" fill="none">
                                    <line x1="2" y1="2" x2="57.9756" y2="2" stroke="white" stroke-width="4" stroke-linecap="round" />
                                    <line x1="2.02441" y1="17" x2="58" y2="17" stroke="white" stroke-width="4" stroke-linecap="round" />
                                </motion.svg>
                            </div>

                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants} ref={ref}
                className="flex flex-col-reverse md:flex-row justify-evenly items-center transition-all duration-500 px-5 font-bricolage text-2xl h-screen overflow-hidden w-screen fixed top-0 z-[999999] bg-[#191919]/80"
            >
                <motion.div className="flex flex-row space-x-6">
                    <a href="https://facebook.com/tobithealpha">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            data-color="#0165E1"
                            className="nav_li hover:pt-2 hover:text-[#0165E1] text-gray-300 w-10 h-10" viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/realtobi_eth">
                        <svg
                            className="nav_li hover:pt-2 hover:text-[#111] text-gray-300 w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 1227"
                            fill="none"
                        >
                            <path
                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                fill="currentColor"
                            />
                        </svg>

                    </a>
                    <a href="https://instagram.com/realtobi_eth">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            data-color="#8a3ab9"
                            className="nav_li hover:pt-2 hover:text-[#8a3ab9] text-gray-300 w-10 h-10" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/tobithealpha">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            data-color="#0A66C2"
                            className="nav_li hover:pt-2 hover:text-[#0A66C2] text-gray-300 w-10 h-10" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                </motion.div>
                <motion.div className="relative">
                    <motion.div>
                        <button onClick={() => setIsOpen(isOpen => !isOpen)} className="hover:[transform:rotate(45deg)] transition-all ease-[ease] opacity-[0.8] text-white text-center px-3 py-3 fixed right-10 z-[999] top-10 text-7xl rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white text-2xl">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                    <motion.div>
                        <ul className="text-white flex flex-col space-y-4 justify-end items-center font-circular-std-book font-medium nav">
                            <li className="nav-li s-link" data-text="HOME">
                                <Link
                                    activeClass="active"
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                    duration={500}
                                    href="#"
                                    offset={-100}
                                    smooth={true}
                                    spy={true}
                                    to="#">Home</Link>
                            </li>
                            <li className="nav-li s-link" data-text="ABOUT">
                                <Link activeClass="active"
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                    duration={500}
                                    href="about"
                                    offset={-100}
                                    smooth={true}
                                    spy={true}
                                    to="about">About</Link>
                            </li>
                            <li className="nav-li s-link" data-text="PROJECT">
                                <Link activeClass="active"
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                    duration={500}
                                    href="project"
                                    offset={-100}
                                    smooth={true}
                                    spy={true}
                                    to="projects">Projects</Link>
                            </li>
                            <li className="nav-li s-link" data-text="BLOG">
                                <a href="https://blog.heistobi.xyz" target="_blank">Blog</a>
                            </li>
                            <li className="nav-li s-link" data-text="INTERVIEW">
                                <Link activeClass="active"
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                    duration={500}
                                    href="interview"
                                    offset={-100}
                                    smooth={true}
                                    spy={true}
                                    to="interviews">Interview</Link>
                            </li>
                            <li className="nav-li s-link" data-text="CONTACT ME">
                                <Link activeClass="active"
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                    duration={500}
                                    href="contact"
                                    offset={-100}
                                    smooth={true}
                                    spy={true}
                                    to="contact">Contact Me</Link>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}