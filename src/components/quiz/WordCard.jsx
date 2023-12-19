import React from "react"

import "./quiz.css"

const WordCard = ({
    word,
    final,
    translation,
    correct,
    ended,
    article,
    onOptionSel,
    onEnded,
    onResponse,
}) => {
    const onArticleSelected = (id) => {
        if (ended) {
            return
        }
        onResponse(final, correct, id)
        onOptionSel(id)
        onEnded(true)
    }

    const getAddBtnStyle = (id) => {
        if (!ended) return " word-card__btn-active"
        if (correct === id) {
            return " word-card__btn-success"
        }
        if (id === article && correct != id) {
            return " word-card__btn-failed"
        }
        return ""
    }

    return (
        <div className="word-card">
            <span></span>
            <div>
                <p className="word-card__title">{ended ? final : word}</p>
                {ended && (
                    <p className="word-card__translation">{translation}</p>
                )}
            </div>

            <div style={{ width: "100%" }}>
                <p className="word-card_explanation">Select correct article:</p>
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
