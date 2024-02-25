import React from "react"
import Popup from "reactjs-popup"

import { determineArticle } from "../../../../service/APIService"
import { capitalize } from "../../../../service/utils"

import WordModal from "./Modal"

const WordsTable = ({ data, colms, onUpdate, onDelete }) => {
    return (
        <div className="t-table">
            <div
                className="t-table-row table-header"
                style={{ gridTemplateColumns: `repeat(${colms}, 1fr)` }}
            >
                <span>ID</span>
                <span>Text</span>
                <span>Article</span>
                <span>Translation</span>
                <span>Actions</span>
            </div>
            {data.map((d) => (
                <WordRow
                    key={d.id}
                    row={d}
                    colms={colms}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

const WordRow = ({ row, colms, onUpdate, onDelete }) => {
    return (
        <div
            className="t-table-row"
            style={{ gridTemplateColumns: `repeat(${colms}, 1fr)` }}
        >
            <span>{row.id}</span>
            <span>{row.text}</span>
            <span>{capitalize(determineArticle(row.article))}</span>
            <span>{row.translation}</span>
            <span>
                <Popup
                    modal
                    nested
                    trigger={<button className="t-action">Update</button>}
                >
                    {(close) => (
                        <WordModal
                            data={row}
                            title={`Update word [${row.text}]`}
                            onClose={(_) => close()}
                            onSubmit={(d) => onUpdate(d)}
                        />
                    )}
                </Popup>
                <a> / </a>
                <button className="t-action" onClick={(_) => onDelete(row.id)}>
                    Delete
                </button>
            </span>
        </div>
    )
}

export default WordsTable
