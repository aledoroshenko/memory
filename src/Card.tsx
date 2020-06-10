import React from "react";
import styled, { css } from "styled-components";

const fullSizeStyle = css`
  width: 100%;
  height: 100%;
`;

const absoluteFullSize = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const backfaceVisibilityStyle = css`
  backface-visibility: hidden;
`;

const Wrapper = styled.div`
  ${fullSizeStyle};

  transform-style: preserve-3d;
  transition: 0.3s transform;
`;

const StyledCard = styled.div<TStyledCardProps>`
  ${fullSizeStyle};

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      ${Wrapper} {
        transform: rotateX(-180deg);
      }
    `};

  background-color: cyan;
  position: relative;
`;

const CardFront = styled.div`
  ${fullSizeStyle};
  ${backfaceVisibilityStyle};

  background-color: red;
`;

const CardBack = styled.div`
  ${absoluteFullSize};
  ${backfaceVisibilityStyle};

  background-color: yellow;
  transform: rotateX(-180deg);
`;

type TCardProps = {
  data: {
    id: string;
    isFlipped: boolean;
  };
};

type TStyledCardProps = {
  isFlipped: boolean;
};

export const Card = ({ data }: TCardProps) => {
  return (
    <StyledCard isFlipped={data.isFlipped}>
      <Wrapper>
        <CardFront>Front</CardFront>
        <CardBack>Back</CardBack>
      </Wrapper>
    </StyledCard>
  );
};
