import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { GlobalStyle, theme } from './theme';
import { TodoList, AboutUs, NavBar, DeletedItems } from './pages';
import { BrowserRouter as Router, Route} from "react-router-dom";

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
            <Route path='/' exact component={TodoList}/>
            <Route path='/about' exact component={AboutUs}/>
            <Route path='/deleted' exact component={DeletedItems}/>
            {/* <Redirect to='/'/> */}
          </Router>
          
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
