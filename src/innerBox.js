import React from "react";
import styled from "styled-components";

const StyledInner = styled.div`
  background-color: navy;
  color: white;
  height: auto;
  width: 100px;
  padding: 10px;
  margin: 15px;
`;

const InnerBox = ({ children }) => {
  return <StyledInner>{children}</StyledInner>;
};

export default InnerBox;
