import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface BlockUIProps {
  blocking?: boolean;
  message?: string;
  children?: ReactChild;
}
export const BlockUI = ({
  blocking = false,
  message = '',
  children,
}: BlockUIProps) => {
  return (
    <>
      {blocking ? (
        <BlockUIStyle>
          <div className="blockui-container">
            <div className="blockui-overlay"></div>
            <div className="blockui-message-container">
              <div className="blockui-message">
                {message}
                <div className="loading-indicator">
                  <span className="loading-bullet">•</span>{' '}
                  <span className="loading-bullet">•</span>{' '}
                  <span className="loading-bullet">•</span>
                </div>
              </div>
            </div>
          </div>
          {children}
        </BlockUIStyle>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const BlockUIStyle = styled.div`
  position: relative;
  min-height: 3em;
  .loading-indicator {
    text-align: center;
  }
  .loading-bullet {
    display: inline-block;
    opacity: 0;
    font-size: 2em;
    color: #02a17c;
  }
  .blockui-container {
    position: absolute;
    z-index: 1010;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    min-height: 2em;
    cursor: wait;
    overflow: hidden;
    &:focus {
      outline: none;
    }
    .blockui-overlay {
      width: 100%;
      height: 100%;
      opacity: 0.5;
      filter: alpha(opacity=50);
      background-color: white;
    }
    .blockui-message-container {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      transform: translateY(-50%);
      z-index: 10001;
    }
    .blockui-message {
      color: #333;
      background: none;
      z-index: 1011;
    }
    @-webkit-keyframes fadeInRTL1 {
      0% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      30% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    @keyframes fadeInRTL1 {
      0% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      30% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    @-webkit-keyframes fadeInRTL2 {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      40% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    @keyframes fadeInRTL2 {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      40% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    @-webkit-keyframes fadeInRTL3 {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      50% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    @keyframes fadeInRTL3 {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 0;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
      }
      50% {
        opacity: 1;
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
      }
      60% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    }
    .loading-bullet {
      display: inline-block;
      opacity: 0;
      -webkit-animation: 3s ease 0.5s infinite fadeInRTL1;
      animation: 3s ease 0.5s infinite fadeInRTL1;
    }
    .loading-bullet + .loading-bullet {
      -webkit-animation-name: fadeInRTL2;
      animation-name: fadeInRTL2;
    }
    .loading-bullet + .loading-bullet + .loading-bullet {
      -webkit-animation-name: fadeInRTL3;
      animation-name: fadeInRTL3;
    }
  }
`;
