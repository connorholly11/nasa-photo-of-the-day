import React from "react";
import "./App.scss";
import Photo from "./Components/Photo component/Photo"
// import PhotoBox from "./Components/Photo component/PhotoBox"
// import Funfact from "./Components/Fun Fact body2/Funfact"
import styled from "styled-components";
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)



const StyledButton = styled.button 
`
  color: white;
  background: black;
  border: 1px solid red;

`;


function App() {
  return (
    <div className="App">
      <StyledButton> Styled Button </StyledButton>
      <Photo />
      {/* <PhotoBox /> */}
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        
        {/* <Funfact /> */}
      </p>
    </div>
  );
}


export default App;
