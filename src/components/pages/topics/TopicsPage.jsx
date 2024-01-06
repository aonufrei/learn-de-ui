import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../../Basic/basic.css"
import "./styles.css"
import { getAllTopics } from "../../../service/APIService"
import Page from "../../Basic/Page"

const TopicsPage = () => {
    const [topics, setTopics] = useState([])

    const getTopics = () => {
        getAllTopics()
            .then((r) => {
                const data = r.map((o) => ({
                    ...o,
                    url: `/words/${o.id}/quiz`,
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
            <p className="article">Select the topic you are interested in:</p>
            <ul style={{ color: "black" }}>
                {topics.map((it, index) => (
                    <li>
                        <Link className="link" key={index} to={it.url}>
                            {it.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Page>
    )
}

export default TopicsPage
