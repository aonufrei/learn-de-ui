import React from "react"
import Popup from "reactjs-popup"

import "../../basic/table.css"
import "../../basic/basic.css"

import TopicModal from "./Modal"
import { Link } from "react-router-dom"

const TopicsTable = ({ data, colms, onUpdate, onDelete }) => {
    return (
        <div className="t-table">
            <div
                className="t-table-row table-header"
                style={{ gridTemplateColumns: `repeat(${colms}, 1fr)` }}
            >
                <span>ID</span>
                <span>Name</span>
                <span>Description</span>
                <span>Words</span>
                <span>Action</span>
            </div>
            {data.map((d) => (
                <TopicRow
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

const TopicRow = ({ row, colms, onUpdate, onDelete }) => {
    return (
        <div
            className="t-table-row"
            style={{ gridTemplateColumns: `repeat(${colms}, 1fr)` }}
        >
            <span>{row.id}</span>
            <span>{row.name}</span>
            <span>{row.description}</span>
            <span>
                <Link
                    className="manage-page__link"
                    to={`/admin/topic/${row.id}/words`}
                >
                    See all
                </Link>
            </span>
            <span>
                <Popup
                    modal
                    nested
                    trigger={<button className="t-action">Update</button>}
                >
                    {(close) => (
                        <TopicModal
                            title={`Update topic [${row.name}]`}
                            showId={true}
                            data={row}
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

export default TopicsTable
