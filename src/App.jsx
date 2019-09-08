import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes as PT } from 'prop-types';
import { GlobalStyle, theme } from './theme';
import { TodoList } from './pages';

class App extends React.Component {
  static propTypes = {
    theme: PT.object,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <TodoList displayText={'Hello World'} />
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
