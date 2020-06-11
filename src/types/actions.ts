export type TFlipCardAction = {
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

export type TUpdateBoardSizeAction = {
  type: "UPDATE_BOARD_SIZE";
  data: {
    size: "SMALL" | "MEDIUM" | "LARGE";
  };
};

export type TAppAction =
  | TFlipCardAction
  | TFlipSoonAction
  | TRestartAction
  | TUpdateBoardSizeAction;
