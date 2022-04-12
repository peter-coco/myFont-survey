import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PaperWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 16px; */
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.2px;
  background: #e4e4e4;
`;

const Paper = () => {
  const [paperLineCount, setPaperLineCount] = useState(Array.from({ length: 40 }, () => 0));
  return (
    <PaperWrap>
      {paperLineCount.map((e) => (
        <Divider />
      ))}
    </PaperWrap>
  );
};

export default Paper;
