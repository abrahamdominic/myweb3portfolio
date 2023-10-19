import genz from "../assets/genz.png"
import zendmart from "../assets/zendmart.jpg"
import sendtokens from "../assets/sendtokens.jpg"
import telos from "../assets/telos.jpg"
import lest from "../assets/lest.svg"
import bg from "../assets/bg1.svg"
// import { Banner } from './Banner';

export const About = () => {

    return (
        <>
            <div className='flex flex-col bg-cover bg-no-repeat justify-center items-center overflow-hidden' style={{
                backgroundImage: `url(${bg})`
            }} id="about">
                <div className="relative overflow-hidden flex flex-col justify-center gap-12 md:gap-20 items-center font-clash-display md:h-screen pb-10 bg-[#111111] !text-white">
                    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:items-center gap-1 mt-24 md:px-12">
                            {/* <h1 className="text-4xl md:text-6xl font-Recoleta-black font-normal !text-transparent text-outline">About Me</h1> */}
                            <img src="/images/tobi-logo.png" alt="logo" className="object-contain" style={{
                                height: "500px",
                                width: "500px",
                                color: "transparent"
                            }} />
                            <span className="mt-10 text-xl !font-bricolage md:text-2xl text-[#ffffffff] md:w-1/2 px-5">
                                I am a software developer based in Nigeria. I am a software developer with 4+ years of experience building cool products/projects.
                                I'm also a web3 developer, blockchain developer and a community manager. I'm a 3x Founder building products around blockchain. I'm the <b>Defiiboy</b> :)
                                <br />
                                I've built projects like <a className="underline" target="_blank" href="https://dativejs.js.org">Dativejs</a>. You like my works/projects or me 😉😉 show it on my <a className="underline" href="https://www.buymeacoffee.com/tobithealpha" target="_blank" rel="noopener noreferrer">Buymeacoffe</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden flex flex-col justify-center gap-12 md:gap-20 items-center font-clash-display pt-10 pb-10 md:h-screen w-screen bg-black !text-white">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-10">

                        <h1 className="text-3xl md:text-[80px] text-center !font-bricolage uppercase font-bold">Brands i/i've worked for</h1>
                        <div className="px-10 md:px-0 grid grid-cols-4 gap-4 md:grid-cols-4 place-items-center">
                            {/* <img src={genz} alt="genz" className="object-contain w-[200px] grayscale hover:grayscale-0 md:h-[200px]" /> */}
                            <img src={zendmart} alt="zendmart" className="object-contain w-[200px] grayscale hover:grayscale-0 md:h-[200px]" />
                            <img src={sendtokens} alt="sendtokens" className="object-contain w-[200px] grayscale hover:grayscale-0 md:h-[200px]" />
                            <img src={lest} alt="lest" className="object-contain w-[200px] grayscale hover:grayscale-0 md:h-[200px]" />
                            <img src={telos} alt="telos" className="object-contain w-[200px] grayscale hover:grayscale-0 md:h-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}