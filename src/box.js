import React from "react";
import styled from "styled-components";
import "./box.css";

const StyledBox = styled.div`
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.alignment || "center"};
  height: 400px;
  background-color: ${props => props.bgColor || "lightblue"};
  flex-wrap: wrap;
`;

const Box = ({
  colStart,
  colEnd,
  alignment,
  bgColor,
  children,
  direction,
  justify
}) => {
  console.log("Box props", colStart);
  return (
    <StyledBox
      colStart={colStart}
      colEnd={colEnd}
      alignment={alignment}
      bgColor={bgColor}
      direction={direction}
      justify={justify}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
