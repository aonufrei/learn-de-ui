import React, { useState } from "react"

import { BasicModal } from "../../../ui/Dialog"
import { TextAreaInput, TextInput } from "../../../ui/Inputs"

const TopicModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [name, setName] = useState(data?.name || "")
    const [desc, setDesc] = useState(data?.description || "")

    const [nameErrorMessage, setNameErrorMessage] = useState("")

    const validateName = (value) => {
        const v = value.trim()
        if (v === "") {
            return "Name is required"
        }
        if (v.length < 5) {
            return "Name is too short"
        }
        if (v.length > 30) {
            return "Name is too long"
        }
        return ""
    }

    return (
        <BasicModal
            title={title}
            submitText={"Save"}
            onCancel={(_) => onClose()}
            onSubmit={(_) => {
                const errorMessage = validateName(name)
                setNameErrorMessage(errorMessage)
                if (errorMessage !== "") {
                    return
                }
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
                errorMessage={nameErrorMessage}
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
