import React, { ReactChild, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';

export interface SidebarProps {
    sidebarLinks?: any;
}

export const Sidebar = ({ sidebarLinks }: SidebarProps) => {
    const [openSubmenu, setOpenSubmenu] = useState(-1)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return <div className="sidebar">
        <div className="slimScrollDiv">
            <div className="sidebar-inner">
                <div className="sidebar-menu">
                    {isLoaded && <div style={{ height: "100vh" }}>
                        <ul>
                            {sidebarLinks.map((item: any, key: number) => {
                                return <li onClick={() => setOpenSubmenu(key == openSubmenu ? -1 : key)} className={classNames({ 'submenu': item.sub })} key={key}>
                                    {item.path == '#' ?
                                        <div className="menu-link noselect">
                                            <div className="icon">{item.icon}</div>
                                            <span>{item.title}</span>
                                            {item.sub && <div className="menu-arrow">{openSubmenu == key ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</div>}
                                        </div>
                                        :
                                        <Link href={item.path} passHref><a className="menu-link noselect">
                                            <div className="icon">{item.icon}</div>
                                            <span>{item.title}</span>
                                            {item.sub && <div className="menu-arrow">{openSubmenu == key ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}</div>}
                                        </a></Link>
                                    }

                                    {(item.sub && openSubmenu == key) && <ul>
                                        {item.sub.map((sitem: any, skey: number) => <li key={skey}><Link href={sitem.path} passHref><a>{sitem.title}</a></Link></li>)}
                                    </ul>}
                                </li>
                            })}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
        <div className="software-info">Powered by <Link href="https://www.softtechlab.com" passHref><a target="_blank">SoftTechLab</a></Link> | v1.1</div>
    </div>
}

export interface DashboardProps {
    dashboardLink?: string;
    logo?: string;
    buttons?: any;
    userPhoto?: string;
    minHeight?: string;
    children?: ReactChild;
    pageHeader?: ReactChild;
    sidebarLinks?: any;
}

export const Dashboard = ({ dashboardLink = "", logo = "", children, pageHeader, sidebarLinks }: DashboardProps) => {
    return (
        <DashboardStyle>
            <div className="portal-wrapper">
                <div className="header">
                    <div className="header-left">
                        <Link href={dashboardLink} passHref><a className="logo"><img height="40" src={logo} alt="Logo" /></a></Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {pageHeader}
                    </div>
                </div>

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {children}
                    </div>
                </div>

                <Sidebar sidebarLinks={sidebarLinks} />
            </div>
        </DashboardStyle>
    );
};

const DashboardStyle = styled.div`
.portal-wrapper {
    a{
        text-decoration:none;
    }
    font-family: "Lato", sans-serif;
    font-size: 0.9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;
    .sb-avatar--src{
        vertical-align: inherit !important;
    }
    .header {
        background: #fff;
        border-bottom: 1px solid #ededed;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
        height: 60px;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1002;
        .header-left {
            float: left;
            height: 60px;
            padding: 0 20px;
            position: relative;
            text-align: center;
            width: 230px;
            z-index: 1;
            transition: all 0.2s ease-in-out;
            .logo {
                display: inline-block;
                line-height: 60px;
                img {
                    max-width: 100%;
                    height: auto;
                    max-height: 60px;
                }
            }
        }
        .user-menu {
            float: right;
            margin: 0;
            position: relative;
            z-index: 99;
            padding: 0 20px;
            .nav-item,
            .dropdown-toggle {
                color: #333;
                font-size: 15px;
                line-height: 60px;
                padding: 0 15px;
                height: 60px;
            }
            .dropdown-item {
                line-height: 24px;
            }
        }
    }
    .page-wrapper {
        left: 0;
        margin-left: 230px;
        padding-top: 60px;
        position: relative;
        transition: all 0.2s ease-in-out;
        min-height: 100vh;
        .content {
            padding: 30px;
        }
    }
    .sidebar {
        background-color: #fff;
        border-right: 1px solid #ddd;
        bottom: 0;
        left: 0;
        margin-top: 0;
        position: fixed;
        top: 60px;
        transition: all 0.2s ease-in-out 0s;
        width: 230px;
        z-index: 1001;
        overflow: hidden;
        .slimScrollDiv {
            position: absolute;
            width:calc(100% + 20px);
            overflow-y: scroll;
            height: 100%;
            bottom: 40px;
            left: 0;
            padding-top: 40px;
            .sidebar-inner {
                transition: all 0.2s ease-in-out 0s;
                width: 100%;
                .sidebar-menu {
                    padding: 10px 0;
                    ul {
                        font-size: 15px;
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                        position: relative;
                        li {
                            position: relative;
                            .menu-link {
                                padding: 8px 15px 8px 20px;
                                align-items: center;
                                display: flex;
                                justify-content: flex-start;
                                position: relative;
                                transition: all 0.2s ease-in-out 0s;
                                color: #333;
                                font-size: 16px;
                                height: auto;
                                cursor: pointer;
                                &:hover {
                                    background-color: #ffebda;
                                }
                                .icon {
                                    svg {
                                        display: inline-block;
                                        font-size: 24px;
                                        line-height: 24px;
                                        text-align: left;
                                        vertical-align: middle;
                                        width: 20px;
                                        transition: all 0.2s ease-in-out 0s;
                                    }
                                }
                                span {
                                    transition: all 0.2s ease-in-out 0s;
                                    display: inline-block;
                                    margin-left: 15px;
                                    white-space: nowrap;
                                }
                                .menu-arrow {
                                    transition: all 0.2s ease-in-out 0s;
                                    display: inline-block;
                                    margin-left: 15px;
                                    white-space: nowrap;
                                    position: absolute;
                                    right: 15px;
                                    svg {
                                        font-size: 20px;
                                    }
                                }
                            }
                        }
                    }
                    .submenu {
                        ul {

                            a {
                                &:hover{
                                    color: #e76d01;
                                }
                                display: block;
                                padding: 9px 10px 9px 56px;
                                position: relative;
                                color: #444;
                                transition: all 0.2s ease-in-out;
                            }
                        }
                    }
                }
            }
        }
    }
    .software-info {
        color: #6c6c6c;
        font-size: 12px;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 38px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        a {
            &:hover {
            color: #000;
            }
            color: #6c6c6c;
        }
    }
}
`