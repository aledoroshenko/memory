export type TCard = {
  isFlipped: boolean;
  id: string;
  isMatch: boolean;
  matchId: string;
  frontUrl: string;
  backUrl: string;
};

export type TAppState = {
  moves: number;
  cardsByIds: {
    [key: string]: TCard;
  };
  flipSoon: boolean;
  allFlipped: boolean;
  flippedCardsIds: string[];
  matchedCards: number;
  roundDuration: null | Duration;
  cardIds: string[];
};

export type TFlipAction = {
  type: "FLIP_CARD";
  data: {
    id: string;
    matchId: string;
  };
};

export type TFlipSoonAction = {
  type: "FLIP_SOON";
};

export type TRestartAction = {
  type: "RESTART";
};

export type TAppAction = TFlipAction | TFlipSoonAction | TRestartAction;

export type TRawCard = {
  id: string;
  frontUrl: string;
  backUrl: string;
};