import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { TCard } from "../types/cards";

const fullSizeStyle = css`
  width: 100%;
  height: 100%;
`;

const absoluteFullSizeStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const cardStyle = css<TCardSideProps>`
  backface-visibility: hidden;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  ${({ url }) => `background: #fff url(".${url}") no-repeat center center;`};
  border: 1px solid aliceblue;
  background-size: cover;
`;

const Wrapper = styled.div`
  ${fullSizeStyle};
  transform-style: preserve-3d;
  transition: 0.3s transform;

  &:active {
    transform: scale(0.875);
  }
`;

const StyledCard = styled.div<TStyledCardProps>`
  position: relative;
  ${fullSizeStyle};
  ${({ isFlipped }) =>
    isFlipped &&
    css`
      ${Wrapper} {
        transform: rotateX(-180deg) rotateZ(5deg);
      }
    `};
`;

const CardBack = styled.div<TCardSideProps>`
  ${cardStyle};
  ${fullSizeStyle};
  ${({ angle }) => `transform: rotateZ(${angle})`};
`;

const CardFront = styled.div<TCardSideProps>`
  ${cardStyle};
  ${absoluteFullSizeStyle};
  ${({ angle }) => `transform: rotateX(-180deg) rotateZ(${angle})`};
`;

type TCardProps = {
  data: TCard;
  onClick: () => void;
};

type TStyledCardProps = {
  isFlipped: boolean;
};

type TCardSideProps = {
  url: string;
  angle: string;
};

function getRandomAngle(min: number, max: number) {
  return `${Math.random() * (max - min) + min}deg`;
}

export const Card = ({ data, onClick }: TCardProps) => {
  const { current: angleFront } = useRef(getRandomAngle(-3, 3));
  const { current: angleBack } = useRef(getRandomAngle(-3, 3));

  return (
    <StyledCard isFlipped={data.isFlipped}>
      <Wrapper>
        <CardFront angle={angleFront} url={data.frontUrl} />
        <CardBack onClick={onClick} angle={angleBack} url={data.backUrl} />
      </Wrapper>
    </StyledCard>
  );
};
