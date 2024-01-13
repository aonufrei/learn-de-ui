import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../../basic/basic.css"
import "./styles.css"
import { getAllTopics } from "../../../service/APIService"
import Page from "../../basic/Page"

const TopicsPage = () => {
    const [topics, setTopics] = useState([])

    const getTopics = () => {
        getAllTopics()
            .then((r) => {
                const data = r.map((o) => ({
                    ...o,
                    url: `/topic/${o.id}/quiz`,
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
            <h2 className="article">Select the topic you are interested in:</h2>
            <div className="topics-container">
                {topics.map((it, index) => (
                    <Link className="topic" key={index} to={it.url}>
                        {it.name}
                    </Link>
                ))}
            </div>
        </Page>
    )
}

export default TopicsPage
