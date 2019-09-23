import styled from 'styled-components';

export const AboutUsTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
  background-color: black;
  text-align: center;
  text-decoration: underline;
`;

export const Paragraph = styled.p`
color: white;
font-size: 20px;
text-align: left;
`
export const AboutNavBar = styled.button`
  color: white;
  border-color: white; 
  background: black;
  display: flex;
  font-size: 20px;
`;