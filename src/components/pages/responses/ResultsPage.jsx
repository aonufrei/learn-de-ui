import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./styles.css"
import Page from "../../basic/Page"
import ResultsTable from "../../ResultsTable/ResultsTable"

const ResultsPage = () => {
    const { state } = useLocation()
    const responses = state.responses
    const sourceUrl = state.sourceUrl

    useEffect(() => {
        console.log(responses)
    }, [])

    return (
        <Page title={responses ? "Your results:" : undefined}>
            <div className="results-page-layout">
                <div className="response-container">
                    <ResultsTable data={responses} />
                </div>

                <div className="nav-btns-container">
                    <Link to={sourceUrl}>
                        <button className="nav-btn nav-btn__try-again">
                            Try again
                        </button>
                    </Link>
                    <Link to={"/topics"}>
                        <button className="nav-btn nav-btn__to-topics">
                            Other Topics
                        </button>
                    </Link>
                </div>
            </div>
        </Page>
    )
}

export default ResultsPage
