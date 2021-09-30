import React from 'react';
import { FormInput } from '../src';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Form', module);

stories.add('Input', () => {
  return <FormInput />;
});

// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import { Thing, Props } from '../src';

// const meta: Meta = {
//   title: 'Welcome',
//   component: Thing,
//   argTypes: {
//     children: {
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   parameters: {
//     controls: { expanded: true },
//   },
// };

// export default meta;

// const Template: Story<Props> = args => <Thing {...args} />;

// // By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// // https://storybook.js.org/docs/react/workflows/unit-testing
// export const Default = Template.bind({});

// Default.args = {};
