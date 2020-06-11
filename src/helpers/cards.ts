import { TCard, TRawCard } from "../types/cards";
import { v4 as uuid } from "uuid";
import { imagesByTheme } from "./get-images-for-cards";

type TTheme = "CATS";

export function getAvailableRawCards({ theme }: { theme: TTheme }): TRawCard[] {
  return imagesByTheme[theme].tiles
    .map((tileUrl) => ({
      id: uuid(),
      frontUrl: tileUrl,
      backUrl: imagesByTheme[theme].covers[0],
    }))
    .sort(() => Math.random() - 0.5);
}

export function pickRawCardsForBoard(
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

export function normalizeCardsByIds(cards: TCard[]): { [key: string]: TCard } {
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

type TGetCards = {
  availableRawCards: TRawCard[];
  boardSize: number;
  uniqueCardsAmount: number;
};

export function getCards({
  availableRawCards,
  boardSize,
  uniqueCardsAmount,
}: TGetCards): TCard[] {
  return prepareCardsForBoard(
    pickRawCardsForBoard(availableRawCards, boardSize, uniqueCardsAmount)
  );
}
