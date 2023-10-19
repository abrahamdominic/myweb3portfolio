import React from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { animated } from '@react-spring/web'
import bg from "../../assets/bg.jpg"
import { Link } from 'react-scroll';
import { management, personal } from '../../utils/emails';



export const Hero = () => {

    return (
        <>
            <div className='flex flex-col bg-cover bg-no-repeat justify-center items-center overflow-hidden' style={{
                backgroundImage: `url(${bg})`
            }} id="hero">
                <div className={`h-full pb-20 pt-40 w-full flex flex-col justify-center space-y-56 items-center`}>
                    <div className="px-9 md:px-20 gap-20 flex md:flex-row md:justify-between flex-col justify-center items-center w-screen">
                        <div className="flex flex-col justify-center items-center">
                            <animated.h1 className='!font-bricolage uppercase md:text-[130px] text-white md:leading-[150px] font-[900] md:text-left text-[60px] leading-[63px] transition-all ease-[ease]'>
                                Web3 
                                <br />
                               <span>Software</span>
                                <br />
                               <span>developer</span>
                            </animated.h1>

                            <a href={`mailto:${personal}`} className="py-2 px-5 !mt-10 hover:bg-white/20 hover:border-bg-white hover:backdrop-blur-lg hover:text-white duration-100 border-white border-2 text-white rounded-lg">Reach out to me!</a>
                        </div>
                        <Link
                            activeClass="active"
                            duration={500}
                            href="about"
                            offset={-100}
                            smooth={true}
                            spy={true}
                            to="about"
                        >
                            <div className="relative flex flex-col items-center justify-center group">
                                <svg className="absolute animate-spin-slow duration-75" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                                    <circle cx="95" cy="95" r="94.25" stroke="white" stroke-width="2.5" stroke-dasharray="15 18" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="119" height="110" viewBox="0 0 119 126" fill="none" className="group-hover:transform group-hover:rotate-180 transition-all">
                                    <path d="M60 4L60 116" stroke="white" stroke-width="10" stroke-linecap="round" />
                                    <path d="M4 72L60 120.5L115 72" stroke="white" stroke-width="10" stroke-linecap="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}