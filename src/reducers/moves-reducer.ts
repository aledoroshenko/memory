import { TAppAction } from "../types/actions";
import { TAppState } from "../types/state";

export function movesReducer(state: TAppState, action: TAppAction) {
  switch (action.type) {
    case "FLIP_CARD":
      return { ...state, moves: state.moves + 1 };
    default:
      return { ...state };
  }
}
