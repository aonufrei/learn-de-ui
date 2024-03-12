import React from "react"

import { ActionButton } from "./Inputs"

export const Modal = ({ children, className }) => {
    return (
        <div
            className={`bg-clfore px-4 py-5 rounded-md border shadow-lg border-clfont ${
                className ?? ""
            }`}
        >
            {children}
        </div>
    )
}

export const BasicModal = ({
    children,
    className,
    title,
    submitText,
    onCancel,
    onSubmit,
}) => {
    return (
        <Modal className={className ?? ""}>
            <ModalHeader>
                <span>{title}</span>
            </ModalHeader>
            <hr />
            <ModalContent>{children}</ModalContent>
            <hr />
            <ModalFooter
                className={"flex flex-row justify-between items-center"}
            >
                <ActionButton
                    className="bg-clfore text-clfont"
                    onClick={onCancel}
                >
                    Cancel
                </ActionButton>
                <ActionButton
                    className="bg-clbtn text-clfont2"
                    onClick={onSubmit}
                >
                    {submitText}
                </ActionButton>
            </ModalFooter>
        </Modal>
    )
}

export const ModalHeader = ({ children, className }) => {
    return (
        <div
            className={`text-clfont text-2xl font-bold pb-4 ${className ?? ""}`}
        >
            {children}
        </div>
    )
}

export const ModalFooter = ({ children, className }) => {
    return <div className={`pt-4 ${className ?? ""}`}>{children}</div>
}

export const ModalContent = ({ children, className }) => {
    return <div className={`${className ?? ""}`}>{children}</div>
}
