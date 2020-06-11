import { v4 as uuid } from "uuid";
import { config } from "../config/config";
import { imagesByTheme } from "../helpers/get-images-for-cards";
import {
  getRawCards,
  normalizeCards,
  prepareCardsForBoard,
} from "../helpers/cards";

// Form somewhere else collection of fronts and backs
export const availableRawCards = imagesByTheme[config.theme].tiles
  .map((tileUrl) => ({
    id: uuid(),
    frontUrl: tileUrl,
    backUrl: imagesByTheme[config.theme].covers[0],
  }))
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
  cardIds: cards.map((card) => card.id),
  flippedCardsIds: [],
  flipSoon: false,
  matchedCards: 0,
  roundDuration: null,
};
