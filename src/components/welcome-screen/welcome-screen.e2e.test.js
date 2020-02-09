import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

const defaultProps = {
  errors: `some error`
};

describe(`<WelcomeScreen />`, () => {
  it(`should welcome button be pressed`, () => {
    const clickFunction = jest.fn();

    const component = shallow(
        <WelcomeScreen
          {...defaultProps}
          onWelcomeButtonClick={clickFunction}
        />
    );

    component.find(`.welcome__button`).simulate(`click`);

    expect(clickFunction).toHaveBeenCalled();
  });
});
