import React, { useEffect, ReactChild } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export interface MultiTabFormContentProps {
  children?: ReactChild;
}
export const MultiTabFormContent = ({ children }: MultiTabFormContentProps) => {
  return <MultiTabFormContentStyle>{children}</MultiTabFormContentStyle>;
};

export interface MultiTabFormHeaderProps {
  title: string;
  subTitle: string;
  buttons?: any;
}
export const MultiTabFormHeader = ({
  title = '',
  subTitle = '',
  buttons = '',
}: MultiTabFormHeaderProps) => {
  return (
    <MultiTabFormHeaderStyle>
      <div className="info">
        {title != '' && <div className="title">{title}</div>}
        {subTitle != '' && <div className="subtitle">{subTitle}</div>}
      </div>
      {buttons && <div className="buttons">{buttons}</div>}
    </MultiTabFormHeaderStyle>
  );
};

export interface MultiTabFormProps {
  tabs?: any;
  defaultTab: number;
  allowedTabs?: any;
  changeTab?: any;
  verticalTab?: boolean;
}
export const MultiTabForm = ({
  tabs,
  defaultTab,
  changeTab,
  allowedTabs = [0],
  verticalTab = true,
}: MultiTabFormProps) => {
  const chnageMultiTab = (id: number) => {
    if (allowedTabs.includes(id)) changeTab(id - 1);
  };
  useEffect(() => {
    chnageMultiTab(defaultTab);
  }, []);

  return (
    <MultiTabFormStyle>
      <div
        className={classNames(
          'multi-tab-form',
          { vertical: verticalTab },
          { horizontal: !verticalTab }
        )}
      >
        <div className="left-side">
          <ul>
            {tabs.map((item: any, key: number) => (
              <li
                key={key}
                className={classNames({ active: key == defaultTab })}
                onClick={() => chnageMultiTab(key)}
              >
                {item.tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side">
          {tabs
            .filter(
              (item: any, key: number) => key == defaultTab && item.tab != ''
            )
            .map((item: any, key: number) => (
              <div key={key}>{item.content}</div>
            ))}
        </div>
      </div>
    </MultiTabFormStyle>
  );
};

const MultiTabFormStyle = styled.div`
  .multi-tab-form {
    display: flex;
    justify-content: space-between;

    .left-side {
      background: #fff;
      flex: 0 0 230px;
      margin-right: 20px;
      border: 1px solid #e8e8e8;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        overflow: hidden;
        li {
          &::before {
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            width: 3px;
            height: 0;
            background: green;
            transition: all 0.2s ease-in-out;
          }
          &.active {
            &::before {
              height: 100%;
            }
          }
          &:last-of-type {
            border-bottom: 0;
          }
          position: relative;
          padding: 10px 20px;
          border-bottom: 1px solid #e8e8e8;
          cursor: pointer;
        }
      }
    }
    .right-side {
      background: #fff;
      border: 1px solid #e8e8e8;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
      width: 100%;
      border-radius: 5px;
      overflow: hidden;
      height: max-content;
    }
  }
`;

const MultiTabFormContentStyle = styled.div`
  padding: 30px 20px;
`;
const MultiTabFormHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 20px;
  border-bottom: 1px solid #e1e1e1;
  .info {
    .title {
      font-size: 18px;
    }
    .subtitle {
      color: #919191;
    }
  }
  .buttons {
    margin-left: 20px;
    display: flex;
  }
`;
