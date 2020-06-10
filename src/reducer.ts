import { v4 as uuid } from "uuid";
import { Card } from "./types";

type TAppState = {
  cards: Card[];
};

type TFlipAction = {
  type: "FLIP_CARD";
  data: {
    id: string;
  };
};

type TAppAction = TFlipAction;

const CARDS_AMOUNT = 12; // 4, 8, 12, 16

const cards = [...Array(CARDS_AMOUNT)].map(() => {
  return {
    id: uuid(),
    isFlipped: [true, false][Math.floor(Math.random() * 2)],
  };
});

export const initialState = {
  moves: 0,
  cards,
};

export const reducer = (state: TAppState, action: TAppAction): TAppState => {
  switch (action.type) {
    case "FLIP_CARD":
      const newState = state.cards.map((card) => {
        if (card.id === action.data.id) {
          card.isFlipped = !card.isFlipped;
        }

        return card;
      });

      return { cards: newState };
    default:
      return state;
  }
};
