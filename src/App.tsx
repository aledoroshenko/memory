import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { reducer } from "./reducer";
import { TCard } from "./types";
import { initialState } from "./initial-state";
import { Result } from "./Result";
import { config } from "./config";

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
  width: 800px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.flipSoon === true) {
      setTimeout(() => {
        dispatch({ type: "FLIP_SOON" });
      }, 1000);
    }
  }, [state.flipSoon]);

  const handleClick = (card: TCard) => {
    if (!card.isMatch) {
      dispatch({
        type: "FLIP_CARD",
        data: { id: card.id, matchId: card.matchId },
      });
    }
  };

  const restartGame = () => {
    dispatch({ type: "RESTART" });
  };

  const cards = Object.values(state.cardsByIds);

  return (
    <div>
      <div>
        <p>Moves: {state.moves}</p>
      </div>
      <StyledBoard>
        {cards.map((card: TCard) => (
          <BoardSection key={card.id} onClick={() => handleClick(card)}>
            <Card data={card} />
          </BoardSection>
        ))}
      </StyledBoard>

      {state.allFlipped ? (
        <Result
          data={{
            roundDuration: state.roundDuration,
            moves: state.moves,
            cardsAmount: config.size,
          }}
          onClose={() => restartGame()}
        />
      ) : null}
    </div>
  );
};

function App() {
  return <Board />;
}

export default App;
