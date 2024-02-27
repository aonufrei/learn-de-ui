import React, { useEffect, useState } from "react"
import {
    createTopic,
    deleteTopic,
    getAllTopics,
    updateTopic,
} from "../../../../service/AdminAPIService"


import Popup from "reactjs-popup"

import { useNavigate } from "react-router-dom"

import TopicsTable from "./Tables"
import TopicModal from "./Modal"

import "../../basic/modal.css"
import "../../basic/basic.css"

import ManagePage from "../../basic/ManagePage"


const ManageTopicsPage = () => {
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])
            
    useEffect(() => {
        refreshTopics()
    }, [])

    const refreshTopics = () => {
        getAllTopics().then((res) => res === undefined || setTopics(res))
    }

    const onUnauthorized = () => navigate("/admin/login")

    const onCreate = (data) => {
        const token = localStorage.getItem("token")
        createTopic(
            { name: data.name, description: data.description },
            token,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onUpdate = (data) => {
        const token = localStorage.getItem("token")
        updateTopic(
            data.id,
            { name: data.name, description: data.description },
            token,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onDelete = (id) => {
        const token = localStorage.getItem("token")
        deleteTopic(id, token, onUnauthorized).then(
            (isDeleted) => isDeleted && refreshTopics()
        )
    }

    const CreateTopicButton = (
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
    )

    return (
        <ManagePage title="Topics: " rightButton={CreateTopicButton}>
            <TopicsTable
                data={topics}
                colms={5}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </ManagePage>
    )
}

export default ManageTopicsPage
