import React from "react"

import { determineArticle } from "../../service/APIService"

const ResultsTable = ({ data }) => {
    return (
        <div className="grid divide-y divide-clfore">
            <div className="grid grid-cols-3 divide-x divide-clfore bg-clback text-clfore font-bold text-xl">
                <span className="px-2.5 py-1">Word</span>
                <span className="px-2.5 py-1">Translation</span>
                <span className="px-2.5 py-1">Your response</span>
            </div>
            {data.map((d, i) => (
                <div
                    key={`res_${i}`}
                    className={
                        `grid grid-cols-3 divide-x divide-clfore ${
                            d.expected == d.actual
                                ? "bg-clsuccess"
                                : "bg-clfailure"
                        }`
                    }
                >
                    <span className="px-2.5 py-1">{d.final}</span>
                    <span className="px-2.5 py-1">{d.translation}</span>
                    <span className="px-2.5 py-1">
                        {determineArticle(d.actual)}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ResultsTable
