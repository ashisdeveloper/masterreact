import React, { useState } from 'react';
import { ImageUpload, FileUpload } from '../src';
import { storiesOf } from '@storybook/react';
import * as noImage from './no-image-icon.png';

const stories = storiesOf('File Upload', module);
stories.add('File Upload', () => {
  const [countFiles, setCountFiles] = useState(0);

  return (
    <>
      <ImageUpload
        id="photo"
        info="Photo information"
        src=""
        uploadFile={(files) => console.log(files)}
        noImage={noImage}
      />
      <hr />
      <FileUpload
        id="file"
        info="File information"
        count={countFiles}
        uploadFile={(files) => console.log(files)}
        multiple={true}
      />
    </>
  );
});
