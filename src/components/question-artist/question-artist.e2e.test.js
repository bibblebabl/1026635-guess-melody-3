import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionArtist from "./question-artist";

import {question} from './mock';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswerFunction = jest.fn();
  const userAnswer = question.answers[0];

  const screen = shallow(
      <QuestionArtist
        onAnswer={onAnswerFunction}
        question={question}
      />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswerFunction).toHaveBeenCalledTimes(1);

  expect(onAnswerFunction.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswerFunction.mock.calls[0][1]).toMatchObject(userAnswer);
});
