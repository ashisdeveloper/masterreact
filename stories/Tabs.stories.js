import React from 'react';
import { Tabs } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const stories = storiesOf('Tabs', module);
stories.add('Sample Tabs', () => {
  return (
    <Tabs
      tabs={[
        { name: 'Item One', content: 'Item One Content' },
        { name: 'Item Two', content: 'Item Two Content' },
        { name: 'Item Three', content: 'Item Three Content' },
      ]}
      // minHeight={200}
      className="my-card"
      activeTab="0"
    />
  );
});
