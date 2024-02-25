import React, { useEffect, useState } from "react"
import {
    createTopic,
    deleteTopic,
    getAllTopics,
    updateTopic,
} from "../../../../service/AdminAPIService"
import Page from "../../../basic/Page"

import Popup from "reactjs-popup"

import { useNavigate } from "react-router-dom"

import TopicsTable from "./Tables"
import TopicModal from "./Modal"

import "../../basic/modal.css"
import "../../basic/basic.css"

const ManageTopicsPage = () => {
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])

    useEffect(() => {
        refreshTopics()
    }, [])

    const refreshTopics = () => {
        getAllTopics().then((res) => res === undefined || setTopics(res))
    }

    const onCreate = (data) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        console.log(data)
        createTopic(
            { name: data.name, description: data.description },
            token
        ).then((_) => refreshTopics())
    }
    const onUpdate = (current) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        updateTopic(
            current.id,
            { name: current.name, description: current.description },
            token
        ).then((_) => refreshTopics())
    }

    const onDelete = (id) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        deleteTopic(id, token).then((isDeleted) => isDeleted && refreshTopics())
    }

    return (
        <Page>
            <div>
                <div className="manage-page__header">
                    <h1 className="manage-page__header-title">Topics: </h1>
                    <Popup
                        trigger={
                            <button className="manage-page__create-btn">
                                Create topic
                            </button>
                        }
                        modal
                        nested
                    >
                        {(close) => (
                            <TopicModal
                                title={`Create new Topic`}
                                onClose={(_) => close()}
                                onSubmit={(d) => onCreate(d)}
                            />
                        )}
                    </Popup>
                </div>
                <div>
                    <TopicsTable
                        data={topics}
                        colms={5}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                </div>
            </div>
        </Page>
    )
}

export default ManageTopicsPage
