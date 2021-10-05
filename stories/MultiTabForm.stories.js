import React, { useState } from 'react';
import {
  Dashboard,
  MultiTabForm,
  MultiTabFormContent,
  MultiTabFormHeader,
  FormButton,
} from '../src';
import { storiesOf } from '@storybook/react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Avatar from 'react-avatar';
import * as logo from './logo.png';
import Link from 'next/link';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';

const stories = storiesOf('MultiTabForm', module);
stories.add('Vertical', () => {
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
  const [defaultTab, setDefaultTab] = useState(0);
  const [allowedTabs, setAllowedTabs] = useState([0, 1, 2]);
  const saveChanges = (tab) => {
    let newTab = parseInt(tab) + 1;
    setDefaultTab(newTab);
    setAllowedTabs((prev) => [...prev, ...Array(newTab + 1).keys()]);
  };
  const BackTab = (tab) => {
    setDefaultTab(parseInt(tab) - 1);
  };
  const onFormSubmit = (e, tab) => {
    e.preventDefault();
    saveChanges(tab);
  };
  const multiTabs = [
    {
      tab: 'User Profile',
      content: (
        <form onSubmit={(e) => onFormSubmit(e, 0)}>
          <MultiTabFormHeader title="User Profile" subTitle="Lorem libero non eius a voluptas iste facere"
            buttons={
              <>
                <FormButton className="btn btn-primary" text="Save & Next" />
              </>
            }
          />
          <MultiTabFormContent>
            <p>User Profile</p>
          </MultiTabFormContent>
        </form>
      ),
    },
    {
      tab: 'Residential Address',
      content: (
        <form onSubmit={(e) => onFormSubmit(e, 1)}>
          <MultiTabFormHeader title="Residential Address" subTitle="Lorem libero non eius a voluptas iste facere"
            buttons={
              <>
                <div onClick={() => BackTab(1)}><FormButton type="button" className="btn btn-danger mr-2" text="Back" /></div>
                <FormButton className="btn btn-primary" text="Save & Next" />
              </>
            }
          />
          <MultiTabFormContent>
            <p>Residential Address</p>
          </MultiTabFormContent>
        </form>
      ),
    },
    {
      tab: 'Job Description',
      content: (
        <form onSubmit={(e) => onFormSubmit(e, 2)}>
          <MultiTabFormHeader title="Job Description" subTitle="Lorem libero non eius a voluptas iste facere"
            buttons={
              <>
                <div onClick={() => BackTab(2)}><FormButton type="button" className="btn btn-danger mr-2" text="Back" /></div>
                <FormButton className="btn btn-primary" text="Save & Next" />
              </>
            }
          />
          <MultiTabFormContent>
            <p>Job Description</p>
          </MultiTabFormContent>
        </form>
      ),
    },
    {
      tab: 'Bank Information & Others',
      content: (
        <form onSubmit={(e) => onFormSubmit(e, 3)}>
          <MultiTabFormHeader title="Bank Information & Others" subTitle="Lorem libero non eius a voluptas iste facere"
            buttons={
              <>
                <div onClick={() => BackTab(3)}><FormButton type="button" className="btn btn-danger mr-2" text="Back" /></div>
                <FormButton className="btn btn-primary" text="Save & Next" />
              </>
            }
          />
          <MultiTabFormContent>
            <p>Bank Information & Others</p>
          </MultiTabFormContent>
        </form>
      ),
    },
    {
      tab: 'Upload Documents',
      content: (
        <form onSubmit={(e) => onFormSubmit(e, 4)}>
          <MultiTabFormHeader title="Upload Documents" subTitle="Lorem libero non eius a voluptas iste facere"
            buttons={
              <>
                <div onClick={() => BackTab(4)}><FormButton type="button" className="btn btn-danger mr-2" text="Back" /></div>
                <FormButton className="btn btn-primary" text="Submit" />
              </>
            }
          />
          <MultiTabFormContent>
            <p>Upload Documents</p>
          </MultiTabFormContent>
        </form>
      ),
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
      <MultiTabForm
        tabs={multiTabs}
        defaultTab={defaultTab}
        changeTab={saveChanges}
        allowedTabs={allowedTabs}
      >
        dfefef
      </MultiTabForm>
    </Dashboard>
  );
});
