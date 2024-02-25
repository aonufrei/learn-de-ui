import React from "react"

import { determineArticle } from "../../service/APIService"
import { capitalize } from "../../service/utils"

import "./quiz.css"

const WordCard = ({
    wordNumber,
    wordsAmount,
    word,
    ended,
    article,
    onOptionSel,
    onEnded,
    onResponse,
}) => {
    const createFinal = (word) =>
        `${capitalize(determineArticle(word.article))} ${capitalize(word.text)}`

    const onArticleSelected = (selectedArticle) => {
        if (ended) {
            return
        }
        onResponse({
            final: createFinal(word),
            translation: word.translation,
            expected: word.article,
            actual: selectedArticle,
        })
        onOptionSel(selectedArticle)
        onEnded(true)
    }

    const getAddBtnStyle = (id) => {
        if (!ended) return " word-card__btn-active"
        if (word.article === id) {
            return " word-card__btn-success"
        }
        if (article === id) {
            return " word-card__btn-failed"
        }
        return ""
    }

    return (
        <div className="word-card">
            <div className="word-card__right">
                <span className="word-card__counter">
                    {wordNumber}/{wordsAmount}
                </span>
            </div>
            <div>
                <p className="word-card__title">
                    {ended ? createFinal(word) : word.text}
                </p>
                {ended && (
                    <p className="word-card__translation">{word.translation}</p>
                )}
            </div>

            <div style={{ width: "100%" }}>
                <p className="word-card__explanation">
                    Select correct article:
                </p>
                <div className="word-card__cnt-button">
                    <button
                        className={"word-card__button" + getAddBtnStyle(0)}
                        onClick={(_) => onArticleSelected(0)}
                    >
                        Der
                    </button>
                    <button
                        className={"word-card__button" + getAddBtnStyle(1)}
                        onClick={(_) => onArticleSelected(1)}
                    >
                        Die
                    </button>
                    <button
                        className={"word-card__button" + getAddBtnStyle(2)}
                        onClick={(_) => onArticleSelected(2)}
                    >
                        Das
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WordCard
