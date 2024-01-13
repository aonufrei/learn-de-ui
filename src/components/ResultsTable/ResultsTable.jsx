import React from "react"

import { determineArticle } from "../../service/APIService"
import "./styles.css"

const ResultsTable = ({ data }) => {
    return (
        <div className="table">
            <div className="table-row table-header">
                <span>Word</span>
                <span>Translation</span>
                <span>Your response</span>
            </div>
            {data.map((d, i) => (
                <div
                    key={`res_${i}`}
                    className={
                        "table-row table-data-row " +
                        `${
                            d.expected == d.actual
                                ? "table-data-row__correct"
                                : "table-data-row__incorrect"
                        }`
                    }
                >
                    <span>{d.final}</span>
                    <span>{d.translation}</span>
                    <span>{determineArticle(d.actual)}</span>
                </div>
            ))}
        </div>
    )
}

export default ResultsTable
