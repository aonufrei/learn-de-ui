import React, { useEffect, useState } from "react"
import { deleteTopic, getAllTopics } from "../../../../service/AdminAPIService"
import Page from "../../../basic/Page"

import "./styles.css"

const ManageTopicsPage = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics().then((res) => res === undefined || setTopics(res))
    }, [])

    const onUpdate = (current) => {}

    const onDelete = (id) => {
        deleteTopic(id).then((res) => true === res && console.log("Deleted"))
    }

    return (
        <Page>
            <div>
                <div className="management">
                    <h1 className="management__title">Topics: </h1>
                    <button className="management__create-btn">
                        Create topic
                    </button>
                </div>
                <div>
                    <TopicsTable
                        data={topics}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                </div>
            </div>
        </Page>
    )
}

const TopicsTable = ({ data, onUpdate, onDelete }) => {
    return (
        <div className="t-table">
            <div className="t-table-row table-header">
                <span>ID</span>
                <span>Name</span>
                <span>Description</span>
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
        <div className="t-table-row">
            <span>{row.id}</span>
            <span>{row.name}</span>
            <span>{row.description}</span>
            <span>
                <a
                    className="t-action"
                    onClick={(_) =>
                        onUpdate({
                            id: row.id,
                            name: row.name,
                            description: row.description,
                        })
                    }
                >
                    Update
                </a>
                <a> / </a>
                <a className="t-action" onClick={(_) => onDelete(row.id)}>
                    Delete
                </a>
            </span>
        </div>
    )
}

const TopicDialog = ({ topic }) => {
    return {}
}

export default ManageTopicsPage
