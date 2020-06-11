import { TCard } from "../types/cards";
import { config } from "../config/config";
import { TAppAction } from "../types/actions";
import { TAppState } from "../types/state";
import { createInitialState } from "../helpers/create-initial-state";

function flipCard(card: TCard): TCard {
  const updatedCard = { ...card };
  updatedCard.isFlipped = !card.isFlipped;

  return updatedCard;
}

export const mainReducer = (
  state: TAppState,
  action: TAppAction
): TAppState => {
  switch (action.type) {
    case "UPDATE_BOARD_SIZE":
      const sizes = {
        SMALL: 8,
        MEDIUM: 12,
        LARGE: 16,
      };
      return {
        ...createInitialState({
          theme: "CATS",
          boardSize: sizes[action.data.size],
          uniqueCardsAmount: state.appSettings.uniqueCardsAmount,
        }),
      };

    case "RESTART":
      return {
        ...createInitialState({
          theme: "CATS",
          boardSize: state.appSettings.boardSize,
          uniqueCardsAmount: state.appSettings.uniqueCardsAmount,
        }),
      };

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
      const { id: currentCardId, matchId: currentCardMatchId } = action.data;

      let flippedCardsIds = [...state.flippedCardsIds, currentCardId];
      const isEnoughCardsToMatch =
        flippedCardsIds.length === config.uniqueCardsAmount;
      let flipSoon = false;
      let currentMatchedCards = state.matchedCards;

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

      return {
        ...state,
        cardsByIds: {
          ...state.cardsByIds,
          [currentCardId]: updatedCard,
        },
        flippedCardsIds,
        flipSoon,
        matchedCards: currentMatchedCards,
      };

    default:
      return state;
  }
};
