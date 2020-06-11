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

export type TAppAction = TFlipCardAction | TFlipSoonAction | TRestartAction;
