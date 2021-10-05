import React from 'react';
import { Dashboard, Card } from '../src';
import { storiesOf } from '@storybook/react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Avatar from 'react-avatar';
import * as logo from './logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';

const stories = storiesOf('Dashboard', module);
stories.add('Dashboard', (props) => {
  const sidebarLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <RiIcons.RiBarChart2Line />,
    },
    {
      title: 'Wesite Options',
      path: '/web-options',
      icon: <RiIcons.RiSettings2Line />,
    },
    {
      title: 'Categories',
      path: '#',
      icon: <FiIcons.FiList />,
      sub: [
        {
          title: 'Main Categories',
          path: '/categories/main-categories',
        },
        {
          title: 'Sub Categories',
          path: '/categories/sub-categories',
        },
      ],
    },
  ];

  return (
    <Dashboard
      dashboardLink="/"
      logo={logo}
      pageHeader={
        <>
          <div></div>
          <Nav className="user-menu">
            <NavDropdown
              title={
                <>
                  <Avatar
                    className="mr-1"
                    size="30"
                    round={true}
                    name={`Ashis`}
                  />
                  {'Ashis Kumar'}
                </>
              }
            >
              <Link href={'/edit-profile'} passHref>
                <a className="dropdown-item">Edit Profile</a>
              </Link>
              <Link href={'/change-password'} passHref>
                <a className="dropdown-item">Change Password</a>
              </Link>
              <NavDropdown.Divider />
              <div className="dropdown-item">Logout</div>
            </NavDropdown>
          </Nav>
        </>
      }
      sidebarLinks={sidebarLinks}
    >
      <Card
        title="Card Title"
        className="my-card"
        minHeight="300"
        buttons={<button className="btn btn-success">Save Changes</button>}
      >
        Hello
      </Card>
    </Dashboard>
  );
});
