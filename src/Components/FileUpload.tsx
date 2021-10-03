import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FaCloudUploadAlt } from 'react-icons/fa'

export interface FileUploadProps {
  id?: string;
  info?: string;
  count?: number;
  btnText?: string;
  accept?: string;
  uploadFile(e: any): any;
  multiple?: boolean;
}
export const FileUpload = ({ id, info = "", count = 0, btnText = "Upload File(s)", accept = "image/*, application/pdf", uploadFile, multiple = false }: FileUploadProps) => {
  const [countFiles, setCountFiles] = useState(count);
  const onFileChange = (e: any) => {
    const files = [...e.target.files];
    setCountFiles(files.length);
    uploadFile(files)
  }

  return (
    <FileUploadStyle>
      <div className="d-flex flex-column">
        <label className="upload-btn btn btn-warning" htmlFor={id}>
          <FaCloudUploadAlt className="mr-1" /> <span>{btnText}</span>
          {multiple ? <input onChange={(e) => onFileChange(e)} type="file" id={id} accept={accept} multiple /> : <input onChange={(e) => onFileChange(e)} type="file" id={id} accept={accept} />}
        </label>
        {countFiles > 0 && (
          <div className="files-count">
            {countFiles} {countFiles > 1 ? "Files" : "File"} selected
          </div>
        )}
        {info != "" && (
          <div className="info text-muted">
            <small>{info}</small>
          </div>
        )}
      </div>
    </FileUploadStyle>
  );
};

export interface ImageUploadProps {
  id?: string;
  info?: string;
  src?: any;
  noImage?: string;
  uploadFile(e: any): any;
}
export const ImageUpload = ({ id = "", info = "", src = "", noImage = "", uploadFile }: ImageUploadProps) => {
  const [imgSrc, setImgSrc] = useState('')
  const handleImageChange = (e: any) => {
    uploadFile(e.target.files[0])
    setImgSrc(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <FileUploadStyle>
      <img className="img-thumbnail rounded mr-2" src={src != '' ? src : imgSrc != '' ? imgSrc : noImage} alt="Photo" />
      <div className="d-flex flex-column">
        <label className="upload-btn btn btn-warning" htmlFor={id}>
          <FaCloudUploadAlt className="mr-1" /> <span>Select Photo</span>
          <input onChange={(e) => handleImageChange(e)} type="file" id={id} accept="image/*" />
        </label>
        {info != "" && <div className="info text-muted">{info}</div>}
      </div>
    </FileUploadStyle>
  );
};

const FileUploadStyle = styled.div`
 display: flex;
 .files-count{font-size: 14px;}
  img {
    width: 80px;
    height: max-content;
  }
  .info {
    font-size: 12px;
    line-height: 20px;
  }
  .upload-btn {
    /* border-radius: 20px; */
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