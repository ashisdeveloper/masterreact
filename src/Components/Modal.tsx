import React, { ReactChild } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Modal as ReactModal } from "react-bootstrap";
import styled from 'styled-components';

export interface ModalProps {
    show?: boolean;
    modalAction(show: boolean): any;
    closeButton?: boolean;
    title?: string;
    modalSize?: "lg" | "sm" | "xl";
    centered?: boolean;
    children?: ReactChild;
}
export const Modal = ({ show = true, modalAction, closeButton = true, title = "", modalSize = "lg", centered = false, children }: ModalProps) => {
    return <>
        <ReactModal className="masterreact-modal" show={show} onHide={() => modalAction(!show)} backdrop="static" size={modalSize} centered={centered}>
            <ModalStyle>
                {title && (
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        {closeButton && (
                            <button type="button" className="close" onClick={() => modalAction(!show)}>
                                <AiOutlineClose />
                            </button>
                        )}
                    </div>
                )}
                <ReactModal.Body>{children}</ReactModal.Body>
            </ModalStyle>
        </ReactModal>
    </>;
};

const ModalStyle = styled.div`
.modal-title{font-size:20px;}
`