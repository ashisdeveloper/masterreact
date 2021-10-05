import React from 'react';
import { Card } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const stories = storiesOf('Card', module);
stories.add('Sample Card', () => {
  return (
    <Card
      title="Card Title"
      className="my-card"
      minHeight="300"
      buttons={<button className="btn btn-success">Save Changes</button>}
    >
      Hello
    </Card>
  );
});
