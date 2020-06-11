import { v4 as uuid } from "uuid";
import { TCard, TRawCard } from "./types/types";
import { config } from "./config/config";
import { imagesByTheme } from "./helpers/get-images-for-cards";

// Form somewhere else collection of fronts and backs
export const availableRawCards = imagesByTheme[config.theme].tiles
  .map((tileUrl) => ({
    id: uuid(),
    frontUrl: tileUrl,
    backUrl: imagesByTheme[config.theme].covers[0],
  }))
  .sort(() => Math.random() - 0.5);

function getRawCards(
  availableRawCards: TRawCard[],
  boardSize: number,
  uniqueCards: number
) {
  return Array.from({ length: boardSize / uniqueCards })
    .flatMap((_, i) =>
      Array.from({ length: uniqueCards }, () => availableRawCards[i])
    )
    .sort(() => Math.random() - 0.5);
}

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
    frontUrl: rawCard.frontUrl,
    backUrl: rawCard.backUrl,
  }));
}

const rawCards = getRawCards(
  availableRawCards,
  config.size,
  config.uniqueCardsAmount
);

const cards = prepareCardsForBoard(rawCards);

export const initialState = {
  moves: 0,
  cardsByIds: normalizeCards(cards),
  cardIds: cards.map((card) => card.id),
  flippedCardsIds: [],
  flipSoon: false,
  allFlipped: false,
  matchedCards: 0,
  roundDuration: null,
};
