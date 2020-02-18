import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist';

import {question} from './mock';


it(`<QuestionArtist /> renders correctly`, () => {
  const component = renderer.create(
      <QuestionArtist onAnswer={() => {}} question={question} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
