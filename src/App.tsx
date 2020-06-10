import React, { useReducer } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { initialState, reducer } from "./reducer";

const BoardSection = styled.div`
  flex: 0 0 25%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: stretch;

  &:before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

const StyledBoard = styled.div`
  width: 600px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StyledBoard>
      {state.cards.map((card) => (
        <BoardSection
          key={card.id}
          onClick={() => dispatch({ type: "FLIP_CARD", data: { id: card.id } })}
        >
          <Card data={card} />
        </BoardSection>
      ))}
    </StyledBoard>
  );
};

function App() {
  return <Board />;
}

export default App;
