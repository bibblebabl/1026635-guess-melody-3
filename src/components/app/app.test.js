import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`<App /> renders correctly`, () => {
  const AppComponent = renderer.create(<App />).toJSON();

  expect(AppComponent).toMatchSnapshot();
});
