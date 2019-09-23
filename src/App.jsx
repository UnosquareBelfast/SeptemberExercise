import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { GlobalStyle, theme } from './theme';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { AboutUs, TodoList } from './pages'

class App extends React.Component {
  static propTypes = {
    theme: PT.object,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <Route path="/" exact component={TodoList}/>
            <Route path="/about/" component={AboutUs}/>
            {/* <Redirect to="/"/> */}
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
