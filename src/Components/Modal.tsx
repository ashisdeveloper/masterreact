import React, { ReactChild } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Modal as ReactModal } from "react-bootstrap";
import styled from 'styled-components';

export interface ModalProps {
    visibility?: boolean;
    handleModal(visibility: boolean): any;
    closeButton?: boolean;
    title?: string;
    modalSize?: "lg" | "sm" | "xl";
    centered?: boolean;
    children?: ReactChild;
}
export const Modal = ({ visibility = true, handleModal, closeButton = true, title = "", modalSize = "lg", centered = false, children }: ModalProps) => {
    return <>
        <ReactModal className="masterreact-modal" show={visibility} onHide={() => handleModal(!visibility)} backdrop="static" size={modalSize} centered={centered}>
            <ModalStyle>
                {title && (
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                        {closeButton && (
                            <button type="button" className="close" onClick={() => handleModal(!visibility)}>
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