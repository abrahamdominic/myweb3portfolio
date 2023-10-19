import { motion } from "framer-motion"
import { useEffect } from "react";
import { useState } from "react"

export const Blog = () => {
    const [blogs, setBlogs] = useState()
    const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "tobithealpha") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;
    async function gql(query, variables = {}) {
        const data = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        return data.json();
    }


    useEffect(() => {
        gql(GET_USER_ARTICLES, { page: 0 })
            .then(result => {
                const articles = result.data.user.publication.posts;
                setBlogs(articles)
            })
    }, [])
    return (
        <>
            <motion.div className="mt-24 mb-10 flex flex-col items-center font-clash-display h-full lg:h-screen">
                <motion.h1 initial={{ y: -1000, transitionProperty: "all", transitionTimingFunction: "ease", transitionDelay: "initial" }} animate={{ y: 0, transitionProperty: "all", transitionTimingFunction: "ease" }} className="text-5xl mb-10 font-Recoleta-black">Blogs</motion.h1>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                    {blogs?.map((blog, i) => (
                        <motion.div initial={{ y: -500 }} animate={{ y: 0 }} key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
                            <motion.img className="w-full" src={blog?.coverImage} alt={blog?.title} loading="lazy" />
                            <motion.div className="px-6 py-4">
                                <motion.a href={`https://tobithealpha.hashnode.dev/${blog?.slug}`} target="_blank" whileHover={{ scale: 1.1 }} className="font-circular-std-book text-base">
                                    <motion.div className="font-bold text-2xl mb-2">{blog?.title}</motion.div>
                                </motion.a>
                                <motion.div className="font-normal text-lg mb-2"> {blog?.brief}</motion.div>
                                <motion.a href={`https://tobithealpha.hashnode.dev/${blog?.slug}`} target="_blank" whileHover={{ scale: 1.1 }} className="font-circular-std-book text-base">
                                    Read More
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}