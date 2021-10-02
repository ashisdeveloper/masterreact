import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FaCloudUploadAlt } from 'react-icons/fa'
import noImage from "../assets/no-image-icon.png";

export interface SinglePhotoUploadProps {
  id?: string;
  info?: string;
  src?: string;
  uploadFile(e: any): any;
}
export const SinglePhotoUpload = ({ id = "", info = "", src = "", uploadFile }: SinglePhotoUploadProps) => {
  const [imgSrc, setImgSrc] = useState('')
  const handleImageChange = (e: any) => {
    uploadFile(e)
    setImgSrc(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <SinglePhotoUploadStyle>
      <img className="img-thumbnail rounded mr-2" src={src != '' ? src : imgSrc != '' ? imgSrc : noImage} alt="Photo" />
      <div className="d-flex flex-column">
        <label className="upload-btn btn btn-warning" htmlFor={id}>
          <FaCloudUploadAlt className="mr-1" /> <span>Upload Photo</span>
          <input onChange={(e) => handleImageChange(e)} type="file" id={id} accept="image/*" />
        </label>
        {info != "" && <div className="info text-muted">{info}</div>}
      </div>
    </SinglePhotoUploadStyle>
  );
};

const SinglePhotoUploadStyle = styled.div`
 display: flex;
  img {
    width: 80px;
    height: max-content;
  }
  .info {
    font-size: 12px;
    line-height: 20px;
  }
  .upload-btn {
    border-radius: 20px;
    width: max-content;
    display: flex;
    align-items: center;
    input {
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
 
`