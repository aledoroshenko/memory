import React, { useCallback, useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { reducer } from "./reducer";
import { TCard } from "./types";
import { initialState } from "./initial-state";
import { Result } from "./Result";
import { config } from "./config";
import { Board } from "./Board";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const restartGame = () => {
    dispatch({ type: "RESTART" });
  };

  // UseCallback because we pass it to useEffect
  const flipCardsBack = useCallback(() => {
    dispatch({ type: "FLIP_SOON" });
  }, []);

  const flipCard = (card: TCard) => {
    // Waiting for reset, don't accept clicks
    if (state.flipSoon === true) {
      return false;
    }

    dispatch({
      type: "FLIP_CARD",
      data: { id: card.id, matchId: card.matchId },
    });
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
          <Board
            cards={cards}
            onCardFlip={flipCard}
            flipSoon={state.flipSoon}
            flipCardsBack={flipCardsBack}
          />
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
}

export default App;
