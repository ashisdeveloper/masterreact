import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export interface TabsProps {
    activeTab?: number;
    tabs?: any;
    className?: string;
    minHeight?: string;
}
/**
 * tabs = [{ name: 'Name', content: 'Content' }] 
 */
export const Tabs = ({ activeTab = 0, tabs = [], className = "", minHeight = "auto" }: TabsProps) => {
    const [active, setActive] = useState(activeTab)
    return (
        <TabsStyle className={classNames('tabs-container', className)}>
            <div className="tabs-list">
                {tabs.map((item: any, key: number) => <div onClick={() => setActive(key)} key={key} className={classNames('tab', { 'active': key == active })}>{item.name}</div>)}
            </div>
            <div className="tab-content" style={{ minHeight: minHeight != 'auto' ? minHeight + 'px' : minHeight }}>
                {tabs.map((item: any, key: number) => <div key={key} className={classNames('tab', { 'active': key == active })}>{item.content}</div>)}
            </div>
        </TabsStyle>
    );
};

const TabsStyle = styled.div`
background: #fff;
overflow: hidden;
.tabs-list {
    display: flex;
    border-bottom: 1px solid #ddd;
    // overflow-x: scroll;
    .tab {
        padding: 7px 10px;
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        cursor: default;
        white-space: nowrap;
        &:first-of-type {
            border-left: 1px solid #ddd;
            &.active {
                border-left: 1px solid rgb(0, 144, 211);
            }
        }
        &.active {
            background: rgb(0, 144, 211);
            color: #fff;
            border-top: 1px solid rgb(0, 144, 211);
            border-right: 1px solid rgb(0, 144, 211);
        }
    }
}
.tab-content {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    .tab {
        display: none;
        &.active{
            display: block;
        }
    }
}
`