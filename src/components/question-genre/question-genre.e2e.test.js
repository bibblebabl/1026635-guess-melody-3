// import React from "react";
// import {configure, shallow} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import QuestionGenre from './question-genre';

// import {question} from './mock';

// configure({adapter: new Adapter()});

// it(`When user answers genre question form is not sent`, () => {
//   const onAnswerFunction = jest.fn();

//   const component = shallow(
//       <QuestionGenre
//         onAnswer={onAnswerFunction}
//         question={question}
//       />);

//   const form = component.find(`form`);
//   const formSubmitFunction = jest.fn();

//   form.simulate(`submit`, {
//     preventDefault: formSubmitFunction,
//   });

//   // expect(onAnswerFunction).toHaveBeenCalledTimes(1);
//   expect(formSubmitFunction).toHaveBeenCalledTimes(1);
// });

// it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
//   const onAnswerFunction = jest.fn((...args) => [...args]);
//   const userAnswer = {
//     id: 2,
//     value: `трек-2`,
//     url: `http://dssdsd.ru`
//   };

//   const genreQuestion = shallow(<QuestionGenre
//     onAnswer={onAnswerFunction}
//     question={question}
//   />);

//   const form = genreQuestion.find(`form`);
//   const inputTwo = genreQuestion.find(`input`).at(1);

//   inputTwo.simulate(`change`, {target: {checked: true}});
//   form.simulate(`submit`, {preventDefault() {}});

//   expect(onAnswerFunction).toHaveBeenCalledTimes(1);

//   // expect(onAnswerFunction.mock.calls[0][0]).toMatchObject(question);
//   expect(onAnswerFunction.mock.calls[0][1]).toMatchObject(userAnswer);

//   expect(
//       genreQuestion.find(`input`).map((it) => it.prop(`checked`))
//   ).toEqual(userAnswer);
// });
