import { personal } from "../utils/emails"

export const Footer = () => {

    return (
        <>
            <div id="contact" className="relative overflow-hidden flex flex-col gap-10 px-2 md:px-24 font-bricolage h-[fit] bg-black !text-white">
                <div className="flex flex-row justify-between items-center gap-14 md:gap-20 mt-10">
                    <h1 className="text-3xl px-10 md:px-0 md:text-[60px] md:leading-[70.48px] font-bricolage font-semibold md:w-[509px]">Want me to work with you on your project?</h1>

                    <a href={`mailto:${personal}`} className="relative flex flex-col items-center justify-center group">
                        <svg className="absolute animate-spin-slow duration-[25ms]" xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
                            <circle cx="95" cy="95" r="94.25" stroke="white" stroke-width="2.5" stroke-dasharray="15 18" />
                        </svg>
                        <h1 className="text-3xl group-hover:rotate-0 transition-all md:text-[25px] leading-[31px] font-bricolage text-center rotate-[-29.5deg] font-semibold md:w-[509px]">Let's Talk</h1>

                    </a>
                </div>




                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10 mb-10">
                        <ul className="flex flex-row justify-between items-center gap-10">
                            <li><a className="font-bricolage font-[400] text-[16px]" href="/">Home</a></li>
                            <li><a className="font-bricolage font-[400] text-[16px]" href="/#about">About</a></li>
                            <li><a className="font-bricolage font-[400] text-[16px]" target="_blank" href="https://blog.heistobi.xyz">Blog</a></li>
                        </ul>


                        <p className="font-bricolage font-[400] text-[16px]">© 2023 Tobi</p>


                        <ul className="flex flex-row justify-between items-center gap-10">
                            <li><a className="font-bricolage font-[400] text-[16px]" href="https://twitter.com/defiboyszn">Twitter</a></li>
                            <li><a className="font-bricolage font-[400] text-[16px]" href="https://linkedin.com/in/tobithealpha">Linkedin</a></li>
                            <li><a className="font-bricolage font-[400] text-[16px]" href="https://github.com/tobithedev">Github</a></li>
                            {/* <li><a className="font-bricolage font-[400] text-[25px]" href="https://blog.realtobi.xyz">Blog</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}