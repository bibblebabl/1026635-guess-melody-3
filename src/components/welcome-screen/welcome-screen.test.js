import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const defaultProps = {
  errors: `some error`
};

it(`<WelcomeScreen /> renders correctly`, () => {
  const component = renderer.create(
      <WelcomeScreen {...defaultProps} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
