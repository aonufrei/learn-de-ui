import React, { useState } from "react"

import "../../basic/modal.css"
import Select from "react-select"
import { determineArticle } from "../../../../service/APIService"
import { capitalize } from "../../../../service/utils"

const articleOptions = [
    {
        value: 0,
        label: capitalize(determineArticle(0)),
    },
    {
        value: 1,
        label: capitalize(determineArticle(1)),
    },
    {
        value: 2,
        label: capitalize(determineArticle(2)),
    },
]

const articleToOption = (id) => {
    return articleOptions.find(it => it.value === id) || undefined
}

const WordModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [text, setText] = useState(data?.text || "")
    const [article, setArticle] = useState(data?.article || "")
    const [translation, setTranslation] = useState(data?.translation || "")
    return (
        <div className="modal">
            <div className="modal-header">
                <span>{title}</span>
            </div>
            <hr />
            <div className="modal-content">
                {showId === true && (
                    <div>
                        <span className="modal-label">Id:</span>
                        <input
                            className="modal-input"
                            value={data?.id || ""}
                            readOnly
                        />
                    </div>
                )}

                <div>
                    <span className="modal-label">Text:</span>
                    <input
                        className="modal-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <span className="modal-label">Article:</span>
                    <Select
                        className="modal-input"
                        value={articleToOption(data?.article)}
                        options={articleOptions}
                        onChange={(v) => setArticle(v)}
                    />
                </div>
                <div>
                    <span className="modal-label">Translation:</span>
                    <input
                        className="modal-input"
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                    />
                </div>
            </div>
            <hr />
            <div className="modal-footer">
                <button className="modal-btn" onClick={(_) => onClose()}>
                    Cancel
                </button>
                <button
                    className="modal-btn__submit"
                    onClick={(_) => {
                        onSubmit({
                            id: data?.id,
                            text: text || "",
                            article: article?.value || 0,
                            translation: translation || "",
                        })
                        onClose()
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default WordModal
