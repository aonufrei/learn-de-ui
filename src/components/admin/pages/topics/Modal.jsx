import React, { useState } from "react"

import { BasicModal } from "../../../ui/Dialog"
import { TextAreaInput, TextInput } from "../../../ui/Inputs"

const TopicModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [name, setName] = useState(data?.name || "")
    const [desc, setDesc] = useState(data?.description || "")

    return (
        <BasicModal
            title={title}
            submitText={"Save"}
            onCancel={(_) => onClose()}
            onSubmit={(_) => {
                onSubmit({
                    id: data?.id,
                    name: name || "",
                    description: desc || "",
                })
                onClose()
            }}
        >
            {showId === true && (
                <TextInput
                    label="Id: "
                    value={data?.id || ""}
                    onChange={() => {}}
                    readonly={true}
                />
            )}
            <TextInput
                label="Name: "
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextAreaInput
                label="Description: "
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
        </BasicModal>
    )
}

export default TopicModal
