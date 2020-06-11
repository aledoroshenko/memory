import { TCard, TRawCard } from "../types/cards";
import { v4 as uuid } from "uuid";

export function getRawCards(
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

export function normalizeCards(cards: TCard[]): { [key: string]: TCard } {
  return cards.reduce((memo, card) => {
    return { ...memo, [card.id]: card };
  }, {});
}

export function prepareCardsForBoard(rawCards: TRawCard[]): TCard[] {
  return rawCards.map((rawCard: TRawCard) => ({
    id: uuid(),
    isFlipped: false,
    isMatch: false,
    matchId: rawCard.id,
    frontUrl: rawCard.frontUrl,
    backUrl: rawCard.backUrl,
  }));
}
