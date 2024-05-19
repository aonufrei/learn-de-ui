import React, { useEffect, useState } from "react"

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

const WordModal = ({ data, showId, title, onClose, onSubmit }) => {
    const [text, setText] = useState(data?.text || "")
    const [article, setArticle] = useState(data?.article || articleOptions[0])
    const [translation, setTranslation] = useState(data?.translation || "")

    const [textErrorMessage, setTextErrorMessage] = useState("")
    const [transErrorMessage, setTransErrorMessage] = useState("")

    useEffect(() => {
        console.log(article)
    }, [])


    const validateText = (text) => {
        const v = text.trim()
        if (v.length === 0) {
            return "Text is required"
        }
        if (v.length > 30) {
            return "Text cannot be longer that 30 symbols"
        }
        return ""
    }

    const validateTranslation = (translation) => {
        const v = translation.trim()
        if (v.length === 0) {
            return "Translation is required"
        }
        if (v.length > 30) {
            return "Translation cannot be longer that 30 symbols"
        }
        return ""
    }

    return (
        <BasicModal
            title={title}
            submitText={"Save"}
            onCancel={(_) => onClose()}
            onSubmit={(_) => {
                const textError = validateText(text)
                const transError = validateTranslation(translation)
                setTextErrorMessage(textError)
                setTransErrorMessage(transError)
                if (textError !== "") {
                    return
                }
                if (transError !== "") {
                    return
                }
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
                errorMessage={textErrorMessage}
            />
            <SelectInput
                label={"Article: "}
                value={article}
                options={articleOptions}
                onChange={(v) => setArticle(v)}
            />
            <TextInput
                label="Translation: "
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                errorMessage={transErrorMessage}
            />
        </BasicModal>
    )
}

export default WordModal
