import React, { useState } from "react"

import "../../basic/modal.css"

const TopicModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [name, setName] = useState(data?.name || "")
    const [desc, setDesc] = useState(data?.description || "")

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
                    <span className="modal-label">Name:</span>
                    <input
                        className="modal-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <span className="modal-label">Description:</span>
                    <textarea
                        row={10}
                        cols={40}
                        className="modal-input"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
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
                            name: name || "",
                            description: desc || "",
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

export default TopicModal
