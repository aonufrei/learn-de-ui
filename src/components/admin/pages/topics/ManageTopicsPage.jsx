import React, { useContext, useEffect, useState } from "react"
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
import { AuthContext } from "../../AuthContext"
import { setToken } from "../../../../service/AuthService"

const ManageTopicsPage = () => {
    const accessToken = useContext(AuthContext)
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])

    useEffect(() => {
        refreshTopics()
    }, [])

    const refreshTopics = () => {
        getAllTopics().then((res) => res === undefined || setTopics(res))
    }

    const onUnauthorized = () => {
        setToken("")
        navigate("/login")
    }

    const onCreate = (data) => {
        createTopic(
            { name: data.name, description: data.description },
            accessToken,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onUpdate = (data) => {
        updateTopic(
            data.id,
            { name: data.name, description: data.description },
            accessToken,
            onUnauthorized
        ).then((_) => refreshTopics())
    }

    const onDelete = (id) => {
        deleteTopic(id, accessToken, onUnauthorized).then(
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
            trigger={<TriggerButton />}
            overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
            closeOnDocumentClick={false}
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
