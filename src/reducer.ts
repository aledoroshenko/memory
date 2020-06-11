import intervalToDuration from "date-fns/intervalToDuration";

import { TAppAction, TAppState, TCard } from "./types/types";
import { config } from "./config/config";
import { initialState } from "./initial-state";

function flipCard(card: TCard): TCard {
  const updatedCard = { ...card };
  updatedCard.isFlipped = !card.isFlipped;

  return updatedCard;
}

let roundStart: null | Date = null;

export const reducer = (state: TAppState, action: TAppAction): TAppState => {
  switch (action.type) {
    case "RESTART":
      return { ...initialState };

    case "FLIP_SOON":
      state.flippedCardsIds.map(
        (cardId) => (state.cardsByIds[cardId].isFlipped = false)
      );

      return {
        ...state,
        cardsByIds: { ...state.cardsByIds },
        flippedCardsIds: [],
        flipSoon: false,
      };

    case "FLIP_CARD":
      if (state.moves === 0) {
        roundStart = new Date();
      }

      const { id: currentCardId, matchId: currentCardMatchId } = action.data;
      const moves = state.moves + 1;
      let flippedCardsIds = [...state.flippedCardsIds, currentCardId];
      const isEnoughCardsToMatch =
        flippedCardsIds.length === config.uniqueCardsAmount;
      let flipSoon = false;
      let currentMatchedCards = state.matchedCards;
      let roundDuration = null;

      const updatedCard = flipCard(state.cardsByIds[currentCardId]);

      if (isEnoughCardsToMatch) {
        const hasMatch = flippedCardsIds.every(
          (flippedCardId) =>
            state.cardsByIds[flippedCardId].matchId === currentCardMatchId
        );

        if (hasMatch) {
          updatedCard.isMatch = true;

          flippedCardsIds.forEach((cardId) => {
            state.cardsByIds[cardId] = {
              ...state.cardsByIds[cardId],
              isMatch: true,
            };
          });

          currentMatchedCards = currentMatchedCards + flippedCardsIds.length;

          flippedCardsIds = [];
        } else {
          flipSoon = true;
        }
      }

      const allFlipped =
        currentMatchedCards === Object.values(state.cardsByIds).length;

      if (allFlipped && roundStart !== null) {
        roundDuration = intervalToDuration({
          start: roundStart,
          end: new Date(),
        });
      }

      return {
        ...state,
        moves,
        cardsByIds: {
          ...state.cardsByIds,
          [currentCardId]: updatedCard,
        },
        flippedCardsIds,
        flipSoon,
        allFlipped: allFlipped,
        matchedCards: currentMatchedCards,
        roundDuration,
      };

    default:
      return state;
  }
};
