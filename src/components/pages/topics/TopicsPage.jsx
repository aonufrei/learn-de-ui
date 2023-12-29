import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import { getAllTopics } from "../../../service/APIService"
import BasicPage from "../BasicPage/BasicPage"
import { Card } from "react-bootstrap"

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
        <BasicPage>
            <p>Select topic of words:</p>
            <div className="topics-container">
                {topics.map((it, index) => (
                    <Link key={index} to={it.url}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <span className="topic__name">
                                        {it.name}
                                    </span>
                                </Card.Title>
                                <Card.Text>
                                    <span className="topic__description">
                                        {it.description}
                                    </span>
                                </Card.Text>
                                <span className="topic__amount">
                                    {it.amount}
                                </span>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </BasicPage>
    )
}

export default TopicsPage
