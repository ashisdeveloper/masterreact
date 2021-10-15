import React, { ReactChild } from 'react';
import classNames from 'classnames';
import { FaSpinner } from "react-icons/fa";
import styled from 'styled-components';

export interface FormInputProps {
    label?: string;
    required?: boolean;
    maxLength?: number;
    type?: string;
    placeholder?: string;
    wrapperClasses?: string;
    className?: string;
    style?: {};
    readOnly?: boolean;
    multiple?: boolean;
    register?: any;
    error?: string;
}
/**
 * Works with react-hook-form
 */
export const FormInput = ({ label = "", required = false, maxLength = 255, type = "text", placeholder = "", wrapperClasses = "", className = "form-control", style = {}, readOnly = false, multiple = false, register, error = "" }: FormInputProps) => {
    return (
        <div className={wrapperClasses != "" ? wrapperClasses : ""}>
            {label != "" && <label htmlFor={register?.name ? register.name : ""}>
                {label}
                {required ? <span className="text-danger ml-1">*</span> : ""}
            </label>}
            {type != "file" ? <input {...register} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} /> : <input {...register} multiple={multiple} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} maxLength={maxLength} />}
            <div className="invalid-feedback">{error}</div>
        </div>
    );
};

export interface FormTextareaProps {
    label?: string;
    required?: boolean;
    placeholder?: string;
    wrapperClasses?: string;
    className?: string;
    style?: {};
    rows?: number;
    readOnly?: boolean;
    register?: any;
    error?: string;
}
/**
 * Works with react-hook-form
 */
export const FormTextarea = ({ label = "", required = false, placeholder = "", wrapperClasses = "", className = "form-control", style = {}, rows = 4, readOnly = false, register, error = "" }: FormTextareaProps) => {
    return (
        <div className={wrapperClasses != "" ? wrapperClasses : ''}>
            {label != "" && <label htmlFor="">
                {label}
                {required ? <span className="text-danger ml-1">*</span> : ""}
            </label>}
            <textarea {...register} style={style} rows={rows} id={register?.name ? register.name : ""} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} placeholder={placeholder != "" ? placeholder : ''}></textarea>
            <div className="invalid-feedback">{error}</div>
        </div>
    );
};

export interface FormSelectProps {
    label?: string;
    required?: boolean;
    disabled?: boolean;
    wrapperClasses?: string;
    className?: string;
    style?: {};
    readOnly?: boolean;
    register?: any;
    error?: string;
    children?: ReactChild;
}
/**
 * Works with react-hook-form
 */
export const FormSelect = ({ label = "", required = false, disabled = false, wrapperClasses = "", className = "form-control custom-select", style = {}, readOnly = false, register, error = "", children }: FormSelectProps) => {
    return (
        <div className={wrapperClasses != "" ? wrapperClasses : ''}>
            {label != "" && <label htmlFor="">
                {label}
                {required ? <span className="text-danger ml-1">*</span> : ""}
            </label>}
            <select {...register} style={style} disabled={disabled} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })}>
                {children}
            </select>
            <div className="invalid-feedback">{error}</div>
        </div>
    );
};

export interface FormButtonProps {
    wrapperClasses?: string;
    className?: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    onClick?: any;
    style?: {};
    text?: string;
}
export const FormButton = ({ wrapperClasses = "", className = "btn", type = "submit", disabled = false, onClick = "", text = "Save Changes", style = {} }: FormButtonProps) => {
    return (
        <div className={wrapperClasses != "" ? wrapperClasses : ''}>
            {onClick != '' ? <ButtonStyle onClick={onClick} className={classNames(className)} style={style} type={type} disabled={disabled}>
                {disabled && <FaSpinner className="fa-spin mr-2" />} {text}
            </ButtonStyle> :
                <ButtonStyle className={classNames(className)} style={style} type={type} disabled={disabled}>
                    {disabled && <FaSpinner className="fa-spin mr-2" />} {text}
                </ButtonStyle>}

        </div>
    );
};

const ButtonStyle = styled.button`
.fa-spin {
  animation: fa-spin 2s infinite linear;
}

@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
`