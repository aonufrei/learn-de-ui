import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Page from "../../basic/Page"
import ResultsTable from "../../ResultsTable/ResultsTable"

const ResultsPage = () => {
    const { state } = useLocation()
    const responses = state.responses
    const sourceUrl = state.sourceUrl

    useEffect(() => {
    }, [])

    return (
        <Page title={responses ? "Your results:" : undefined}>
            <div>
                <div className="grid gap-y-1">
                    <ResultsTable data={responses} />
                </div>

                <div className="flex sticky text-center justify-center gap-2 bottom-7 mt-8 mb-16">
                    <Link to={sourceUrl}>
                        <button className="text-clfore bg-clbtn py-5 px-12 border-none rounded-full transition-all duration-300 hover:scale-[1.1]">
                            Try again
                        </button>
                    </Link>
                    <Link to={"/topics"}>
                        <button className="text-clfore bg-clbtn py-5 px-12 border-none rounded-full transition-all duration-300 hover:scale-[1.1]">
                            Other Topics
                        </button>
                    </Link>
                </div>
            </div>
        </Page>
    )
}

export default ResultsPage
