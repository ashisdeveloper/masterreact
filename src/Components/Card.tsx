import React, { ReactChild } from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export interface CardProps {
  title?: string;
  buttons?: any;
  className?: string;
  minHeight?: string;
  children?: ReactChild;
}
export const Card = ({ title = "", buttons = "", className = "", minHeight = "", children }: CardProps) => {
  return (
    <CardStyle className={classNames(className)} style={{ minHeight: minHeight != "" ? minHeight + "px" : "auto" }}>
      {(title != '' && buttons != '') && <div className="content-card-top">
        <div className="left">
          <div className="main-info">{title}</div>
        </div>
        <div className="right">{buttons}</div>
      </div>}
      <div className="content-card">{children}</div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
 border: 1px solid #ededed;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  .content-card-top {
    background: #fff;
    padding: 12px 20px;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .left {
      .main-info {
        font-weight: bold;
        font-size: 20px;
      }
    }
    .right {
    }
  }
  .content-card {
    padding: 20px;
  }
`