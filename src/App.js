import React, {useState} from "react";
import "./App.scss";
import Photo from "./Components/Photo component/Photo"
// import PhotoBox from "./Components/Photo component/PhotoBox"
// import Funfact from "./Components/Fun Fact body2/Funfact"
import styled from "styled-components";
import { Card, Image } from 'semantic-ui-react'
import Calendar from "./Components/Fun Fact body2/calendar"



// const CardExampleCard = () => (
//   <Card>
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//   </Card>
// );

const CardContainer = styled.div
`
  
  border:1px solid red;
  width:600px;
`;



const StyledButton = styled.button 
`
  color: white;
  background: black;

`;


function App() {
  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
    <CardContainer>
      <Calendar></Calendar>
      
      <StyledButton> Styled Button </StyledButton>
      
      <Photo />
        
    </CardContainer>
    </div>
  );
}


export default App;
