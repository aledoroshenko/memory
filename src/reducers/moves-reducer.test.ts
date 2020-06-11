import { reducer } from "./reducer";
import { TFlipCardAction } from "../types/actions";
import { createInitialState } from "../helpers/create-initial-state";
import { config } from "../config/config";

describe("Moves reducer", () => {
  it("should increment moves on every flip action", () => {
    const state = createInitialState({
      theme: config.defaultTheme,
      boardSize: config.boardSize,
      uniqueCardsAmount: config.uniqueCardsAmount,
    });

    const action: TFlipCardAction = {
      type: "FLIP_CARD",
      data: {
        id: state.cardIds[0],
        matchId: state.cardsByIds[state.cardIds[0]].matchId,
      },
    };

    expect(state.moves).toBe(0);

    const stateUpdateOnce = reducer(state, action);
    const stateUpdateTwice = reducer(stateUpdateOnce, action);

    expect(stateUpdateOnce.moves).toBe(1);
    expect(stateUpdateTwice.moves).toBe(2);
  });
});
