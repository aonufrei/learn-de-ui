import React, { useState } from "react"

import { determineArticle } from "../../../../service/APIService"
import { capitalize } from "../../../../service/utils"
import { BasicModal } from "../../../ui/Dialog"
import { SelectInput, TextInput } from "../../../ui/Inputs"

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
    return articleOptions.find((it) => it.value === id) || undefined
}

const WordModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [text, setText] = useState(data?.text || "")
    const [article, setArticle] = useState(data?.article || "")
    const [translation, setTranslation] = useState(data?.translation || "")

    return (
        <BasicModal
            title={title}
            submitText={"Save"}
            onCancel={(_) => onClose()}
            onSubmit={(_) => {
                onSubmit({
                    id: data?.id,
                    text: text || "",
                    article: article?.value || 0,
                    translation: translation || "",
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
                label="Text: "
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <SelectInput
                label={"Article: "}
                value={articleToOption(data?.article)}
                options={articleOptions}
                onChange={(v) => setArticle(v)}
            />
            <TextInput
                label="Translation: "
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
            />
        </BasicModal>
    )
}

export default WordModal
