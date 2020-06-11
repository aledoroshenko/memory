import { v4 as uuid } from "uuid";
import { TCard, TRawCard } from "./types";
import { config } from "./config";

// Form somewhere else collection of fronts and backs
export const availableRawCards = [...Array(20)].map(() => ({
  id: uuid(),
  front: "FRONT",
  back: "BACK",
}));

function normalizeCards(cards: TCard[]): { [key: string]: TCard } {
  return cards.reduce((memo, card) => {
    return { ...memo, [card.id]: card };
  }, {});
}

function prepareCardsForBoard(rawCards: TRawCard[]): TCard[] {
  return rawCards.map((rawCard: TRawCard) => ({
    id: uuid(),
    isFlipped: false,
    isMatch: false,
    matchId: rawCard.id,
  }));
}

const getRawCards = (
  availableRawCards: TRawCard[],
  boardSize: number,
  uniqueCards: number
) =>
  Array.from({ length: boardSize / uniqueCards })
    .flatMap((_, i) =>
      Array.from({ length: uniqueCards }, () => availableRawCards[i])
    )
    .sort(() => Math.random() - 0.5);

const rawCards = getRawCards(
  availableRawCards,
  config.size,
  config.uniqueCardsAmount
);

const cards = prepareCardsForBoard(rawCards);

export const initialState = {
  moves: 0,
  cardsByIds: normalizeCards(cards),
  flippedCardsIds: [],
  flipSoon: false,
  allFlipped: false,
  matchedCards: 0,
  roundDuration: null,
};
