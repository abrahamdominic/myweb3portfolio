import {
    RouterProvider,
} from "react-router-dom";
import { router } from "../router"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Loader } from '../components/Loading';


export const Layout = () => {

    const { scrollYProgress } = useScroll()
    return (
        <>
            {false ? <Loader /> : (
                <>
                    <motion.div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "10px",
                            background: "blue",
                            transformOrigin: "0%",
                            scaleX: scrollYProgress,
                            zIndex: 9999999999999
                        }}
                    />
                    <motion.div initial={{ x: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDuration: 3000 }} animate={{ x: 0 }}>
                        <Navbar />
                        <RouterProvider router={router} />
                        {/* <ScrollTop /> */}
                        <Footer />
                    </motion.div>
                </>)}
        </>
    )
}