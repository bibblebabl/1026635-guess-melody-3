import React from 'react';
import ReactDOM from 'react-dom';

import questions from './mocks/questions';

import App from './components/app/app';

const errors = `Какая-та ошибка`;

ReactDOM.render(
    <App errors={errors} questions={questions}
    />, document.getElementById(`root`));

