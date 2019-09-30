import styled from 'styled-components';

export const AboutUsTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
  background-color: lightgrey;
  text-align: center;
  text-decoration: underline;
`;

export const Paragraph = styled.p`
color: pink;
font-size: 20px;
text-align: left;
`
export const AboutNavBar = styled.button`
  color: pink;
  border-color: black; 
  background: lightgrey;
  display: flex;
  font-size: 20px;
`;