import React from 'react';
import { FormInput, FormSelect, FormTextarea, FormButton } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const stories = storiesOf('Form', module);
stories.add('Sample Form', () => {
  return (
    <>
      <FormInput
        label="Name"
        required
        placeholder="Enter your name"
        wrapperClasses="form-group col-md-4"
      />
      <FormInput
        label="Name"
        type="email"
        required
        placeholder="Enter your email ID"
        wrapperClasses="form-group col-md-4"
      />
      <FormInput
        label="Password"
        type="password"
        required
        placeholder="Enter password"
        wrapperClasses="form-group col-md-4"
      />
      <FormInput
        label="Reenter Password"
        type="password"
        required
        placeholder="Enter password again"
        wrapperClasses="form-group col-md-4"
      />
      <FormSelect label="Gender" required wrapperClasses="form-group col-md-4">
        <option value="0">Select Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </FormSelect>
      <FormTextarea
        label="About You"
        placeholder="Enter something about you"
        wrapperClasses="form-group col-md-4"
      />
      <FormButton
        disabled
        wrapperClasses="form-group col-md-12"
        className="btn btn-primary"
      />
    </>
  );
});
