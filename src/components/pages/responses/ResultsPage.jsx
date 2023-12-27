import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { determineArticle } from "../../../service/words"
import './styles.css'

const ResultsPage = () => {
    const { state } = useLocation()
    const responses = state.responses

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

    return <div className="page-container">
        <p>Your results</p>
        {renderResponses()}
        <button>Retry</button>
        <button>To Topics</button>
    </div>
}

export default ResultsPage
