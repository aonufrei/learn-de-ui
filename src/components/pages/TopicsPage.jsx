import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllTopics } from "../../service/APIService"
import Page from "../basic/Page"

import { getRandomArbitrary } from "../../service/utils"

const TopicsPage = () => {
    const [topics, setTopics] = useState([])

    const getTopics = () => {
        getAllTopics()
            .then((r) => {
                const data = r.map((o) => ({
                    ...o,
                    url: `/topic/${o.id}/quiz?seed=${getRandomArbitrary(1000, 8000)}&qe=${0}`,
                }))
                data.sort((f, s) => (f.name > s.name ? 1 : -1))
                setTopics(data)
            })
            .catch((err) => {
                console.error(`Failed to fetch topics from the server`, err)
            })
    }

    useEffect(() => {
        getTopics()
    }, [])

    return (
        <Page title={"Words by Topics"}>
            <h2 className="pb-5">Select the topic you are interested in:</h2>
            <div className="grid gap-2 grid-rows-[auto]">
                {topics.map((it, index) => (
                    <Link
                        className="block bg-clfore text-clfont border border-[#00000067] py-2.5 px-5 text-base transition-all duration-300 rounded-md hover:rounded-2xl hover:text-clfore hover:bg-clbtn"
                        key={index}
                        to={it.url}
                    >
                        {it.name}
                    </Link>
                ))}
            </div>
        </Page>
    )
}

export default TopicsPage
