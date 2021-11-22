import React from 'react';
import { GridLayout, GridBox } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const stories = storiesOf('GridLayout', module);
stories.add('Sample Grid Layout', () => {
  return (
    <GridLayout>
      <GridBox>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
      <GridBox>Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
      <GridBox>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
      <GridBox>Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
      <GridBox>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
      <GridBox>Commodi incidunt illo possimus similique amet minus alias! Sint rerum blanditiis laboriosam natus accusantium accusamus facere consequatur. Maxime sint ex corporis alias</GridBox>
    </GridLayout>
  );
});
