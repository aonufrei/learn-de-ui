import React from "react"
import Popup from "reactjs-popup"

import TopicModal from "./Modal"
import { Link } from "react-router-dom"

const TopicsTable = ({ data, onUpdate, onDelete }) => {
    return (
        <div className="grid border divide-y divide-clborder">
            <div className="grid grid-cols-5 [&>*]:px-1 divide-x divide-clfore bg-clback text-clfore font-bold text-xl">
                <span>ID</span>
                <span className="truncate">Name</span>
                <span className="truncate">Description</span>
                <span>Words</span>
                <span>Action</span>
            </div>
            {data.map((d) => (
                <TopicRow
                    key={d.id}
                    row={d}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

const TopicRow = ({ row, onUpdate, onDelete }) => {
    return (
        <div className="grid grid-cols-5 [&>*]:px-1 divide-x divide-clborder text-clback">
            <span>{row.id}</span>
            <span className="truncate">{row.name}</span>
            <span className="truncate">{row.description}</span>
            <span>
                <Link
                    className="underline cursor-pointer"
                    to={`/admin/topic/${row.id}/words`}
                >
                    See all
                </Link>
            </span>
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
                        <TopicModal
                            title={`Update topic [${row.name}]`}
                            showId={true}
                            data={row}
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

export default TopicsTable
