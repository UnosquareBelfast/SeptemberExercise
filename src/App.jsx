import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { GlobalStyle, theme } from './theme';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TodoList, AboutUs, DeletedItems } from './pages';
import { SearchBar } from './pages/TodoList/components/SearchBar';

class App extends React.Component {
  static propTypes = {
    theme: PT.object,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router>
            <Route path="/" exact component={TodoList} />
            <Route path="/about/" exact component={AboutUs} />
            <Route path='/deleted/' exact component={DeletedItems}/>
            <Route path='/search?title=' exact component={SearchBar}/>
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
