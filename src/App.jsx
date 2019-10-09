import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { GlobalStyle, theme } from './theme';
import { AboutUs, TodoList ,DeletedLog, NavBar,Users} from './pages';

class App extends React.Component {
  static propTypes = {
    theme: PT.object,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <NavBar></NavBar>
            <Route path="/" exact component={TodoList} />
            <Route path="/about/" component={AboutUs} />
            <Route path="/DeletedLog/" component={DeletedLog} />
            <Route path="/Users/" component={Users} />
            {/* <Redirect to="/"/> */}
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
