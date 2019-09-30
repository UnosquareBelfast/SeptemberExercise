import React, { Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { MyTodoBoard, TodoListTitle, MyNavBar, MyNavButtons, aboutUsText } from './styled';

export const AboutUs = () => {

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>About Us</TodoListTitle>
        <MyNavBar>
          <MyNavButtons><Link to='/'>Home</Link></MyNavButtons>
          <MyNavButtons><Link to='/deleted/'>Deleted</Link></MyNavButtons>
        </MyNavBar>
        <aboutUsText>
          Ah you think React is your ally? You merely adopted JavaScript. I was born in it, molded by it. I didnt see a good JS Framework until I was already a man, by then it was nothing to me but Error 404s!
        </aboutUsText>
        <aboutUsText>
          "You could not live with your own failure. And where did that bring you? Back to me. I thought by eliminating half of life, the other half would thrive, but you've shown me... that's impossible. As long as there are those that remember what was, there will always be those that are unable to accept what can be. They will resist."
        </aboutUsText>
        <aboutUsText>
          "Yep. We're all kinds of stubborn."
        </aboutUsText>
        <aboutUsText>
          "I'm thankful...because now...I know what I must do. I will shred this universe down to its last atom and then, with the stones you've collected for me, create a new one teeming with life that knows not what it has lost but only what it has been given. A grateful universe."
        </aboutUsText>
        <aboutUsText>
          "Born out of blood."
        </aboutUsText>
        <aboutUsText>
          "They'll never know it. Because you won't be alive to tell them."
        </aboutUsText>
      </MyTodoBoard>
    </Fragment>
  );
};

export default container(AboutUs);
