import intervalToDuration from "date-fns/intervalToDuration";
import { TAppAction } from "../types/actions";
import { TAppState } from "../types/state";

let roundStart: null | Date = null;
export function roundDurationReducer(state: TAppState, action: TAppAction) {
  switch (action.type) {
    case "FLIP_CARD":
      if (state.moves === 1) {
        roundStart = new Date();
      }

      const allCardsFlipped =
        state.matchedCards === Object.values(state.cardsByIds).length;

      if (allCardsFlipped) {
        return {
          ...state,
          roundDuration: intervalToDuration({
            start: roundStart as Date,
            end: new Date(),
          }),
        };
      }

      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}
