import React from "react"
import Popup from "reactjs-popup"

import { determineArticle } from "../../../../service/APIService"
import { capitalize } from "../../../../service/utils"

import WordModal from "./Modal"

const WordsTable = ({ data, colms, onUpdate, onDelete }) => {
    return (
        <div className="grid border divide-y divide-clborder">
            <div className="grid grid-cols-5 [&>*]:px-1 divide-x divide-clfore bg-clback text-clfore font-bold text-xl">
                <span>ID</span>
                <span className="truncate">Text</span>
                <span>Article</span>
                <span className="truncate">Translation</span>
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

const WordRow = ({ row, onUpdate, onDelete }) => {
    return (
        <div className="grid grid-cols-5 [&>*]:px-1 divide-x divide-clborder text-clback">
            <span>{row.id}</span>
            <span className="truncate">{row.text}</span>
            <span>{capitalize(determineArticle(row.article))}</span>
            <span className="truncate">{row.translation}</span>
            <span>
                <Popup
                    modal
                    nested
                    trigger={
                        <button className="p-0 m-0 underline transition-all duration-300 hover:outline-1 hover:outline-clfont">
                            Update
                        </button>
                    }
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
                <span> / </span>
                <button
                    className="p-0 m-0 underline transition-all duration-300 hover:outline-1 hover:outline-clfont"
                    onClick={(_) => onDelete(row.id)}
                >
                    Delete
                </button>
            </span>
        </div>
    )
}

export default WordsTable
