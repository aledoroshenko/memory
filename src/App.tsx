import React, { useEffect, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Card } from "./Card";
import { reducer } from "./reducer";
import { TCard } from "./types";
import { initialState } from "./initial-state";
import { Result } from "./Result";
import { config } from "./config";

const AppShell = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Intro = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;

  max-width: 600px;

  h1 {
    margin-bottom: 0;
  }

  p {
    margin: 10px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e2e8ea;
  }
`;

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
    // Waiting for reset, don't accept clicks
    if (state.flipSoon === true) {
      return false;
    }

    dispatch({
      type: "FLIP_CARD",
      data: { id: card.id, matchId: card.matchId },
    });
  };

  const restartGame = () => {
    dispatch({ type: "RESTART" });
  };

  const cards = Object.values(state.cardsByIds);

  return (
    <React.Fragment>
      <GlobalStyle />

      <AppShell>
        <Flex>
          <Intro>
            <h1>Memory game</h1>
            <p>Support of themes, difficulty and cats.</p>
          </Intro>
        </Flex>

        <Flex>
          <StyledBoard>
            {cards.map((card: TCard) => (
              <BoardSection key={card.id}>
                <Card data={card} onClick={() => handleClick(card)} />
              </BoardSection>
            ))}
          </StyledBoard>
        </Flex>

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

        <Flex>
          <Intro>
            <p>
              <strong>Themes support</strong>
            </p>
            <p>
              Add new folder with cards tiles - and you will have set of cards
              to play: based on available unique tiles game create set of pairs
              of cards
            </p>
            <br />
            <p>
              <strong>Difficulties switcher</strong>
            </p>
            <p>
              Amount of cards on the board and amount of unique pieces are in
              the config, and with updating two numbers game could vary in
              difficulty and adjust matching logic.
            </p>
          </Intro>
        </Flex>
      </AppShell>
    </React.Fragment>
  );
};

function App() {
  return <Board />;
}

export default App;
