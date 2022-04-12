import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 50px; */
  position: absolute;
  top: 0px;
  /* padding: 10px 10px; */
  /* box-sizing: border-box; */
`;
const LoadingText = styled.div`
  font-weight: 400;
  font-size: 32px;
  font-family: '나눔손글씨 가람연꽃';
  width: 22ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const LoadingImage = styled.img`
  width: 49px;
  height: 52px;

  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  const loadingImage = '/images/loading.png';

  return (
    <LoadingWrap>
      <LoadingImage src={loadingImage} />
      <LoadingText>내 글씨는 어떤 성격일까?</LoadingText>
    </LoadingWrap>
  );
};

export default Loading;
