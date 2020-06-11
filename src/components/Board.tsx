import { TCard } from "../types/types";
import { Card } from "./Card";
import React, { useEffect } from "react";
import styled from "styled-components";

const BoardSection = styled.div`
  flex: 0 0 23%;
  display: flex;
  padding: 5px;
  height: auto;
  justify-content: center;
  align-items: stretch;

  &:before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

const StyledBoard = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

type TBoardProps = {
  flipSoon: boolean;
  cards: TCard[];
  onCardFlip: (card: TCard) => void;
  flipCardsBack: () => void;
};

export const Board = ({
  flipSoon,
  cards,
  onCardFlip,
  flipCardsBack,
}: TBoardProps) => {
  useEffect(() => {
    if (flipSoon) {
      setTimeout(() => {
        flipCardsBack();
      }, 1000);
    }
  }, [flipSoon, flipCardsBack]);

  return (
    <StyledBoard>
      {cards.map((card: TCard) => (
        <BoardSection key={card.id}>
          <Card data={card} onClick={() => onCardFlip(card)} />
        </BoardSection>
      ))}
    </StyledBoard>
  );
};
