import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
export const mountWithTheme = (children) =>
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);