import React from "react";
import styled from "styled-components";
import formatDuration from "date-fns/formatDuration";

const StyledResultDetails = styled.div`
  max-width: 500px;
  min-height: 100px;
  background-color: #fff;
  padding: 10px 40px 60px;
`;

type ResultProps = {
  data: {
    roundDuration: null | Duration;
    cardsAmount: number;
    moves: number;
  };
  onClose: () => void;
};

const ResultDetails = ({ data, onClose }: ResultProps) => {
  return (
    <StyledResultDetails>
      <h2>You have memory</h2>
      <p>
        Matched <strong>{data.cardsAmount} pairs </strong> in{" "}
        <strong>{data.moves} moves</strong> and spend{" "}
        <strong>
          {data.roundDuration && formatDuration(data.roundDuration)}
        </strong>
        .
      </p>

      <button onClick={onClose}>Try again</button>
    </StyledResultDetails>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Result = ({ data, onClose }: ResultProps) => {
  return (
    <Wrapper>
      <ResultDetails data={data} onClose={onClose} />
    </Wrapper>
  );
};
