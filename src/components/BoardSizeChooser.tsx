import React from "react";

type BoardSizeChooserProps = {
  onSizeClick: (size: "SMALL" | "MEDIUM" | "LARGE") => void;
};

export const BoardSizeChooser = ({ onSizeClick }: BoardSizeChooserProps) => {
  return (
    <React.Fragment>
      Board size: <button onClick={() => onSizeClick("SMALL")}>Small</button>{" "}
      <button onClick={() => onSizeClick("MEDIUM")}>Medium</button>{" "}
      <button onClick={() => onSizeClick("LARGE")}>Large</button>
    </React.Fragment>
  );
};
