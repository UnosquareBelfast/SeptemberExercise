import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { GlobalStyle, theme } from './theme';
import { BrowserRouter as Router, Route, NavBar,} from "react-router-dom";
import { AboutUs, TodoList } from './pages'
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
            <NavBar></NavBar>
            <Route path="/" exact component={TodoList}/>
            <Route path="/about/" component={AboutUs}/>
            <Route path='/search?title=' exact component={SearchBar}/>
            {/* <Redirect to="/"/> */}
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
