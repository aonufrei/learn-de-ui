import React from "react"

export const BasicTable = ({ children}) => {
    return (
        <div className="grid divide-y divide-clfore">
            {children}
        </div>
    )
}

export const TableHeaderRow = ({ children, cols }) => {
    return (
        <div
            className={`grid grid-cols-${
                cols
            } divide-x divide-clfore bg-clback text-clfore font-bold text-xl`}
        >
            {children}
        </div>
    )
}

export const TableDataRow = ({ children, cols }) => {
    return (
        <div
            className={`grid grid-cols-${
                cols ?? 0
            } divide-x divide-clfore bg-clfore text-clfont font-bold text-xl`}
        >
            {children}
        </div>
    )
}
