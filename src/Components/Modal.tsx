import React, { ReactChild, useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Modal as ReactModal } from "react-bootstrap";
import styled from 'styled-components';
export interface ModalProps {
    show?: boolean;
    action(show: boolean): any;
    close?: boolean;
    headerStyle?: boolean;
    title?: string;
    size?: "lg" | "sm" | "xl";
    centered?: boolean;
    children?: ReactChild;
}

export const Modal = ({ show = true, action, close = true, headerStyle=true, title = "", size = "lg", centered = false, children }: ModalProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return <>
        {isLoaded && <ReactModal className="masterreact-modal" show={show} onHide={() => action(!show)} backdrop="static" size={size} centered={centered}>
            {(title != '' && headerStyle) && (
                <TopStyle>
                <div className="modal-header">
                    <div style={{ fontSize: '20px' }} className="modal-title">{title}</div>
                    {close && (
                        <button type="button" className="close" onClick={() => action(!show)}>
                            <AiOutlineClose />
                        </button>
                    )}
                </div>
                </TopStyle>
            )}
            {(title != '' && !headerStyle) && (
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
        </ReactModal>}
    </>;
};

const TopStyle = styled.div`
background: #444;
position: relative;
.modal-header{
    padding: 5px 20px;
}
.close {
    position: absolute;
    background: #fff;
    color: #000;
    opacity: 0.9;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 45px;
    right: 5px;
    border-radius: 100%;
    cursor: pointer;
    padding: 2px !important;
}
.modal-title {
    font-size: 20px;
    color: #fff;
}
`