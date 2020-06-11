import React, { useCallback, useEffect, useReducer, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { reducer } from "../reducers/reducer";
import { TCard } from "../types/cards";
import { initialState } from "../reducers/initial-state";
import { Result } from "./Result";
import { config } from "../config/config";
import { Board } from "./Board";

const AppShell = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
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
  const [showResult, setShowResult] = useState(false);

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

  const cards = state.cardIds.map((id) => state.cardsByIds[id]);

  useEffect(() => {
    const allCardsFlipped = state.matchedCards === state.cardIds.length;

    if (allCardsFlipped) {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    } else {
      setShowResult(false);
    }
  }, [state.matchedCards, state.cardIds]);

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
            data-testid="board"
            cards={cards}
            onCardFlip={flipCard}
            flipSoon={state.flipSoon}
            flipCardsBack={flipCardsBack}
          />
        </Flex>

        {showResult ? (
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
