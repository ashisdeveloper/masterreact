import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import classNames from 'classnames';

export interface AccordionProps {
  data?: any;
  className?: string;
}

export const Accordion = ({ data = [], className = '' }: AccordionProps) => {
  const [selItem, setSelItem] = useState(-1);
  return (
    <AccordionStyle className={classNames(className)}>
      <div className="accordion-container">
        {data.map((item: any, key: number) => (
          <div
            key={key}
            className={classNames('accordion-single', { show: selItem == key })}
          >
            <div
              onClick={() => {
                if (selItem == key) setSelItem(-1);
                else setSelItem(key);
              }}
              className="title-container"
            >
              <div className="title">{item.title}</div>
              <div className="accordion-btn">
                {selItem == key ? (
                  <RiArrowUpSLine size="30" />
                ) : (
                  <RiArrowDownSLine size="30" />
                )}
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: item.content }}
              className="content"
            />
          </div>
        ))}
      </div>
    </AccordionStyle>
  );
};

const AccordionStyle = styled.div`
  .accordion-container {
    .accordion-single {
      border-bottom: 1px solid #eee;
      &:last-of-type {
        border-bottom: 0;
      }
      &.show {
        .content {
          height: auto;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
      .title-container {
        cursor: pointer;
        padding: 20px 25px;
        display: flex;
        justify-content: space-between;
        .title {
          color: #0b2e58;
          font-size: 20px;
          padding-right: 25px;
        }
        .accordion-btn {
          display: flex;
          align-items: center;
          svg {
            color: #444;
          }
        }
      }
      .content {
        height: 0;
        transition: all 0.2s ease-in-out;
        padding: 0 25px;
        overflow: hidden;
        position: relative;
        background-color: #f8f8f8;
        p {
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
