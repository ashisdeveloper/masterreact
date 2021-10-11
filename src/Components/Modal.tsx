import React, { ReactChild } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Modal as ReactModal } from "react-bootstrap";
export interface ModalProps {
    show?: boolean;
    action(show: boolean): any;
    close?: boolean;
    title?: string;
    size?: "lg" | "sm" | "xl";
    centered?: boolean;
    children?: ReactChild;
}

export const Modal = ({ show = true, action, close = true, title = "", size = "lg", centered = false, children }: ModalProps) => {
    return <>
        <ReactModal className="masterreact-modal" show={show} onHide={() => action(!show)} backdrop="static" size={size} centered={centered}>
            {title != '' && (
                <div className="modal-header">
                    <div style={{ fontSize: '20px' }} className="modal-title">{title}</div>
                    {close && (
                        <button type="button" className="close" onClick={() => action(!show)}>
                            <AiOutlineClose />
                        </button>
                    )}
                </div>
            )}
            <ReactModal.Body>{children}</ReactModal.Body>
        </ReactModal>
    </>;
};
