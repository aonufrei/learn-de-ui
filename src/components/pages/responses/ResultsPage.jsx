import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { determineArticle } from "../../../service/APIService"
import "./styles.css"
import Page from "../../Basic/Page"

const ResultsPage = () => {
    const { state } = useLocation()
    const responses = state.responses
    const sourceUrl = state.sourceUrl

    useEffect(() => {
        console.log(responses)
    }, [])

    const renderResponses = () => {
        if (responses === undefined) {
            return <div>Oops, cannot find your response</div>
        }
        return (
            <div className="response-container">
                {responses.map((r, i) => (
                    <div className="response-card" key={i}>
                        <p>{r.final}</p>
                        <p>{r.translation}</p>
                        <p
                            style={{
                                color:
                                    r.expected === r.actual ? "green" : "red",
                            }}
                        >
                            {determineArticle(r.actual)}
                        </p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <Page title={responses ? "Your results:" : undefined}>
            <div>
                {renderResponses()}
            </div>

            <div className="nav-btns-container">
                <Link to={sourceUrl}>
                    <button className="nav-btn nav-btn__try-again">
                        Try again
                    </button>
                </Link>
                <Link to={"/words"}>
                    <button className="nav-btn nav-btn__to-topics">
                        Back to Topics
                    </button>
                </Link>
            </div>
        </Page>
    )
}

export default ResultsPage
