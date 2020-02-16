import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

import * as questions from './mocks';

it(`<App /> renders correctly`, () => {
  const component = renderer.create(<App
    errors='Some error'
    questions={questions}
  />).toJSON();

  expect(component).toMatchSnapshot();
});
