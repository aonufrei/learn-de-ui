import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { getAllTopics } from "../../../service/APIService"

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
        <div className="page-container">
            <h2>Words by Topics</h2>
            <hr />
            <p>Select the topic you are interested in:</p>
            <ul style={{ color: "black" }}>
                {topics.map((it, index) => (
                    <li>
                        <Link key={index} to={it.url}>
                            {it.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <div className="topics-container">
                {topics.map((it, index) => (
                    <Link key={index} to={it.url}>
                        <div className="topic">
                            <span className="topic__name">{it.name}</span>
                            <span className="topic__description">
                                {it.description}
                            </span>
                            <span className="topic__amount">{it.amount}</span>
                        </div>
                    </Link>
                ))}
            </div> */}
        </div>
    )
}

export default TopicsPage
