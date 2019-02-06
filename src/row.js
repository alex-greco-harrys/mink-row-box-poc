import React from "react";
import Box from "./box";
import styled from "styled-components";
import InnerBox from "./innerBox";
import "./row.css";

const TopLevelRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1em;
  padding: 10px;
  background-color: lightgreen;
`;

const Row = () => (
  <div>
    <TopLevelRow>
      <Box colStart="1" colEnd="4">
        <h1>This is the Box</h1>
        <p> This box is aligned "center"</p>
        <p> This box is justified "center"</p>
      </Box>
      <Box colStart="5" colEnd="10" alignment="flex-end" justify="flex-start">
        <h1>This is the Box</h1>
        <p> This box is aligned "flex-end"</p>
        <p> This box is justified "flex-start"</p>
      </Box>
    </TopLevelRow>
    <TopLevelRow>
      <Box colStart="2" colEnd="6" alignment="flex-start" justify="flex-end">
        <h1>The Second Row is Cool too</h1>
        <p> This box is aligned "flex-start"</p>
        <p> This box is justified "flex-end"</p>
      </Box>
      <Box colStart="7" colEnd="12" alignment="baseline" direction="row">
        <InnerBox>
          <p>alignment</p>
          <p>baseline</p>
        </InnerBox>
        <InnerBox>
          <p>direction</p>
          <p>row</p>
        </InnerBox>
        <InnerBox>
          <p>flex-wrap</p>
          <p>wrap</p>
        </InnerBox>
      </Box>
    </TopLevelRow>
  </div>
);

export default Row;
