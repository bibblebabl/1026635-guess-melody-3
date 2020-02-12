import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// components
import WelcomeScreen from '../welcome-screen/welcome-screen';
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';


const App = () => {
  const handleWelcomeButtonClick = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen onWelcomeButtonClick={handleWelcomeButtonClick} errors="Какая-та ошибка" />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
