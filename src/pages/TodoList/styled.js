import styled from 'styled-components';

export const BtnStyle=styled.button`
    padding: 20px;
    background:#3B8CF3;
    border-color: black;
    font-size:20px;
    height: 50px;
    margin-left: 30px;

    &:hover {
        background: white;
        border-color: #3B8CF3;
      }
    
`;

export const TaskContainer = styled.div`
padding:10px
display: flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;

`;

export const BottomBarContainer = styled.div`
padding:10px
display: flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
background:#3B8CF3;

`;

export const containerTextBox = styled.textarea`
padding:10px
width: 100px

`;

export const LeftSpan=styled.div`
`;


export const LeftDiv=styled.div`
float:left;
background: #3B8CF3;
color:white;

`;

export const NothingMessage = styled.div`
  color:green;
  border:solid white 2px;
  margin: auto;
  font-size: xx-large;
  width:60%;
  text-align:center;
  margin-top: 200px;
  
  

`;