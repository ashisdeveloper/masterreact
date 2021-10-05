import React from 'react';
import { Modal } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const stories = storiesOf('Modal', module);
stories.add('Sample Modal', () => {
  return (
    <Modal
      visibility
      closeButton
      handleModal={() => !false}
      title="Sample Modal"
    >
      Hello
    </Modal>
  );
});
