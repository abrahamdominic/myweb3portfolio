import { useState } from "react"
import cns from "../assets/cns.jpg"
export const useProjects = () => {
    const [projects] = useState([
        {
            img: "",
            title: "Zendmart",
            description: "Zendmart is a decentralized online marketplace",
            link: "https://www.zendmart.xyz/"
        },
        {
            img: "",
            title: "Lest Protocol",
            description: "Lestprotocol web 3 ecosystem",
            link: "https://www.lestprotocol.xyz/"
        },
        {
            img: "",
            title: "Sendtokens",
            description: "Sendtokens web 3 ecosystem",
            link: "https://www.sendtokens.xyz/"
        },
        {
            img: "",
            title: "Telos Nigeria",
            description: "",
            link: "https://www.telosnigeria.xyz/"
        },
    ])
    return projects
}
