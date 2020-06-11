import { getAvailableRawCards, getCards, normalizeCardsByIds } from "./cards";

type TCreateInitialState = {
  theme: "CATS";
  boardSize: number;
  uniqueCardsAmount: number;
};

export function createInitialState({
  theme,
  boardSize,
  uniqueCardsAmount,
}: TCreateInitialState) {
  const availableRawCards = getAvailableRawCards({ theme });

  const cards = getCards({ availableRawCards, boardSize, uniqueCardsAmount });

  return {
    cardsByIds: normalizeCardsByIds(cards),
    moves: 0,
    cardIds: cards.map(({ id }) => id),
    flippedCardsIds: [],
    flipSoon: false,
    matchedCards: 0,
    roundDuration: null,
    appSettings: {
      boardSize,
      currentTheme: theme,
      uniqueCardsAmount,
    },
  };
}
