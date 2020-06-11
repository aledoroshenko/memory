import { TCard } from "./cards";

export type TAppState = {
  moves: number;
  cardsByIds: {
    [key: string]: TCard;
  };
  flipSoon: boolean;
  flippedCardsIds: string[];
  matchedCards: number;
  roundDuration: null | Duration;
  cardIds: string[];
};
