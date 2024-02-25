import React, { useEffect, useState } from "react"
import Page from "../../../basic/Page"
import WordsTable from "./Tables"
import WordModal from "./Modal"
import Popup from "reactjs-popup"
import "./styles.css"

import {
    getWordsForTopic,
    addWordToTopic,
    updateWordOfTopic,
    deleteWord,
    getTopicInfoById,
} from "../../../../service/AdminAPIService"

import { useParams } from "react-router-dom"

import "../../basic/basic.css"

const ManageWordsPage = () => {
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

    const fetchTopicInfo = () => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        getTopicInfoById(topicid, token).then((r) => {
            if (r !== undefined) {
                setTopicInfo(r)
            }
        })
    }

    const onCreate = (data) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        addWordToTopic(parseInt(topicid), data, token).then((r) => {
            if (r !== undefined) {
                refreshWords()
            }
        })
    }

    const onUpdate = (data) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        updateWordOfTopic(parseInt(topicid), data, token).then((r) => {
            if (r !== undefined) {
                refreshWords()
            }
        })
    }

    const onDelete = (id) => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            navigate("/admin/login")
            return
        }
        deleteWord(id, token).then((r) => {
            if (r !== undefined) {
                refreshWords()
            }
        })
    }

    return (
        <Page>
            <div>
                <div>
                    <div>
                        <div className="manage-page__header">
                            <h1 className="manage-page__header-title">
                                Words:
                            </h1>
                            <Popup
                                trigger={
                                    <button className="manage-page__create-btn">
                                        Add New Word
                                    </button>
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
                        </div>
                        <div className="manage-words__topic-info">
                            <p>{`Topic name: "${topicInfo?.name || ""}"`}</p>
                            <p>{`Topic description: "${
                                topicInfo?.description || ""
                            }"`}</p>
                        </div>
                    </div>
                </div>
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
            </div>
        </Page>
    )
}

export default ManageWordsPage
