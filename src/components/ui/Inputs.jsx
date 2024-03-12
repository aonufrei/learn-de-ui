import React from "react"

import Select from "react-select"

export const TextInput = ({
    className,
    label,
    value,
    onChange,
    type,
    errorMessage,
    readonly,
}) => {
    return (
        <div className={`${className ?? ""}`}>
            <span className="block text-clfont text-lg p-1.5">{label}</span>
            <input
                className="block text-clfont bg-clfore border border-clfont text-lg p-1.5"
                value={value}
                type={!type ? "text" : type}
                onChange={(e) => onChange(e)}
                readOnly={!!readonly}
            />
            <span className="block text-clfailure">{`${
                errorMessage ?? ""
            }`}</span>
        </div>
    )
}

export const TextAreaInput = ({ className, label, value, onChange }) => {
    return (
        <div className={`${className ?? ""}`}>
            <span className="block text-clfont text-lg p-1.5">{label}</span>
            <textarea
                row={10}
                cols={30}
                className="block text-clfont bg-clfore border border-clfont text-lg p-1.5"
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

export const SelectInput = ({ className, label, value, options, onChange }) => {
    return (
        <div className={`${className ?? ""}`}>
            <span className="block text-clfont text-lg p-1.5">{label}</span>
            <Select
                className="block text-clfont bg-clfore border border-clfont text-lg rounded-md"
                value={value}
                options={options}
                onChange={onChange}
            />
        </div>
    )
}

export const ActionButton = ({ children, className, onClick }) => {
    return (
        <button
            className={`${className ?? ""}`}
            onClick={onClick ?? (() => {})}
        >
            {children}
        </button>
    )
}
