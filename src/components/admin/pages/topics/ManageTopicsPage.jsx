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

import ManagePage from "../../basic/ManagePage"
import { getToken } from "../../../../service/AuthService"

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
        const token = getToken()
        createTopic(
            { name: data.name, description: data.description },
            token,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onUpdate = (data) => {
        const token = getToken()
        updateTopic(
            data.id,
            { name: data.name, description: data.description },
            token,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onDelete = (id) => {
        const token = getToken()
        deleteTopic(id, token, onUnauthorized).then(
            (isDeleted) => isDeleted && refreshTopics()
        )
    }

    
    const TriggerButton = React.forwardRef(({ open, ...props }, ref) => {
        return (
            <button className="bg-clbtn text-clfont2" ref={ref} {...props}>
                Add New Topic
            </button>
        )
    })

    const CreateTopicButton = (
        <Popup
            trigger={
                <TriggerButton />
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
            {topics.length >= 1 ? (
                <TopicsTable
                    data={topics}
                    colms={5}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ) : (
                <div>No topics exist</div>
            )}
        </ManagePage>
    )
}

export default ManageTopicsPage
