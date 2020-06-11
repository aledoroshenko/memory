import { roundDurationReducer } from "./round-duration-reducer";
import { movesReducer } from "./moves-reducer";
import { mainReducer } from "./main-reducer";
import { TAppAction } from "../types/actions";
import { TAppState } from "../types/state";

type TReducer = (state: TAppState, action: TAppAction) => TAppState;

const reduceReducers = (...reducers: TReducer[]): TReducer => (state, action) =>
  reducers.reduce(
    (updatedState, nextReducer) => nextReducer(updatedState, action),
    state
  );

export const reducer = reduceReducers(
  mainReducer,
  movesReducer,
  roundDurationReducer
);
