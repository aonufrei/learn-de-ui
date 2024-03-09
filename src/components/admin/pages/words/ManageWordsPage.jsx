import React, { useEffect, useState } from "react"
import WordsTable from "./Tables"
import WordModal from "./Modal"
import Popup from "reactjs-popup"

import {
    getWordsForTopic,
    addWordToTopic,
    updateWordOfTopic,
    deleteWord,
    getTopicInfoById,
} from "../../../../service/AdminAPIService"

import { useNavigate, useParams } from "react-router-dom"

import ManagePage from "../../basic/ManagePage"

import { ActionButton } from "../../../ui/Inputs"

const ManageWordsPage = () => {
    const navigate = useNavigate()
    const { topicid } = useParams()
    const [words, setWords] = useState([])
    const [topicInfo, setTopicInfo] = useState({})

    useEffect(() => {
        fetchTopicInfo()
        refreshWords()
    }, [])

    const refreshWords = () => {
        getWordsForTopic(topicid).then((r) =>
            setWords(r === undefined ? [] : r)
        )
    }

    const onUnauthorized = () => navigate("/admin/login")

    const fetchTopicInfo = () => {
        const token = localStorage.getItem("token")
        getTopicInfoById(topicid, token, onUnauthorized).then((r) => {
            if (r !== undefined) {
                setTopicInfo(r)
            }
        })
    }

    const onCreate = (data) => {
        const token = localStorage.getItem("token")
        addWordToTopic(parseInt(topicid), data, token, onUnauthorized).then(
            (r) => {
                if (r !== undefined) {
                    refreshWords()
                }
            }
        )
    }

    const onUpdate = (data) => {
        const token = localStorage.getItem("token")
        updateWordOfTopic(parseInt(topicid), data, token, onUnauthorized).then(
            (r) => {
                if (r !== undefined) {
                    refreshWords()
                }
            }
        )
    }

    const onDelete = (id) => {
        const token = localStorage.getItem("token")
        deleteWord(id, token, onUnauthorized).then((r) => {
            if (r !== undefined) {
                refreshWords()
            }
        })
    }

    const CreateWordBtn = (
        <Popup
            trigger={
                <ActionButton className="bg-clbtn text-clfont2">
                    Add New Word
                </ActionButton>
            }
            modal
            nested
        >
            {(close) => (
                <WordModal
                    data={{}}
                    title={`Create new Word`}
                    onClose={(_) => close()}
                    onSubmit={(d) => onCreate(d)}
                />
            )}
        </Popup>
    )

    const WordsInfo = (
        <div className="mb-4">
            <p>{`Topic name: ${topicInfo?.name || ""}`}</p>
            <p>{`Topic description: ${topicInfo?.description || ""}`}</p>
        </div>
    )

    return (
        <ManagePage
            title="Words: "
            rightButton={CreateWordBtn}
            info={WordsInfo}
        >
            {words.length >= 1 ? (
                <WordsTable
                    data={words}
                    colms={5}
                    onUpdate={(data) => onUpdate(data)}
                    onDelete={(id) => onDelete(id)}
                />
            ) : (
                <div>No words in the topic</div>
            )}
        </ManagePage>
    )
}

export default ManageWordsPage
