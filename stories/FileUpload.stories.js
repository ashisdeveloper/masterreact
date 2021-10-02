import React from 'react';
import { SinglePhotoUpload } from '../src';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('File Upload', module);
stories.add('Single Photo Upload', () => {
  const uploadFile = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <SinglePhotoUpload
      id="photo"
      info="Photo information"
      src=""
      uploadFile={uploadFile}
    />
  );
});
