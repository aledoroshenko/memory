import React from "react";
import { Card } from "./Card";
import styled from "styled-components";

const CardSection = styled.div`
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <CardSection>
      <Card />
    </CardSection>
  );
}

export default App;
