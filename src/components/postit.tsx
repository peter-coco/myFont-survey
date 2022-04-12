import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PostItWrap = styled.div`
  width: 197px;
  height: 60px;
  background: #fffdd5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '나눔손글씨 가람연꽃';
  font-weight: 600;
  font-size: 24px;
  color: black;
  cursor: pointer;
`;

const PostIt = ({ description }: { description: string }) => {
  return <PostItWrap>{description}</PostItWrap>;
};

export default PostIt;
