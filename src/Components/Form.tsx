import React from 'react';
import classNames from 'classnames';


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
    register?: any;
    error?: string;
}
/**
 * Works with react-hook-form
 */
export const FormInput = ({ label = "", required = false, maxLength = 255, type = "text", placeholder = "", wrapperClasses = "", className = "form-control", style = {}, readOnly = false, register, error = "" }: FormInputProps) => {
    return (
        <div className={wrapperClasses != "" ? wrapperClasses : ""}>
            {label != "" && <label htmlFor={register?.name ? register.name : ""}>
                {label}
                {required ? <span className="text-danger ml-1">*</span> : ""}
            </label>}
            {type != "file" ? <input {...register} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} /> : <input {...register} multiple type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} maxLength={maxLength} />}

            <div className="invalid-feedback">{error}</div>
        </div>
    );
};