import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

// components
import WelcomeScreen from '../welcome-screen/welcome-screen';
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';

import {GameType} from '../../const';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };

    this.renderScreen = this.renderScreen.bind(this);
    this.handleWelcomeButtonClick = this.handleWelcomeButtonClick.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleWelcomeButtonClick() {
    this.setState({
      step: 0,
    });
  }

  handleAnswer() {
    this.setState((prevState) => ({step: prevState.step + 1}));
  }

  renderScreen() {
    const {errors, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errors={errors}
          onWelcomeButtonClick={this.handleWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={question}
              onAnswer={this.handleAnswer}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={question}
              onAnswer={this.handleAnswer}
            />
          );
      }
    }

    return null;
  }


  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtist question={questions[0]} onAnswer={() => {}}/>
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenre question={questions[1]} onAnswer={() => {}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errors: PropTypes.string,
  questions: PropTypes.array.isRequired,
};

export default App;
