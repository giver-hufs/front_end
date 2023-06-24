import React, { useState } from "react";
import styled from "styled-components";

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const Bar = styled.div`
  width: ${({ width }) => width}%;
  height: 10px;
  background-color: #007bff;
  margin-bottom: 10px;
  margin-left: 100px;
`;

function BarGraph({ value }) {
  return (
    <GraphContainer>
      <Bar width={value} />
      <p>{value}%</p>
    </GraphContainer>
  );
}

export default BarGraph;
