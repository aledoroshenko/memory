export type TCard = {
  isFlipped: boolean;
  id: string;
  isMatch: boolean;
  matchId: string;
  frontUrl: string;
  backUrl: string;
};

export type TRawCard = {
  id: string;
  frontUrl: string;
  backUrl: string;
};
