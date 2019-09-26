import styled from 'styled-components';

export const AboutUsTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
  background-color: white;
  text-align: center;
  text-decoration: underline;
`;

export const Paragraph = styled.p`
color: black;
font-size: 20px;
text-align: left;
`
export const AboutNavBar = styled.button`
  color: white;
  border-color: black; 
  background: white;
  display: flex;
  font-size: 20px;
`;