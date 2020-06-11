import { reducer } from "./reducer";
import { initialState } from "./initial-state";
import { TFlipCardAction } from "../types/actions";
import { TAppState } from "../types/state";

describe("Moves reducer", () => {
  it("should increment moves on every flip action", () => {
    const state: TAppState = { ...initialState };

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
