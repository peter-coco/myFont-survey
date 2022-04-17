import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostIt from '../components/postit';
import Paper from '../components/paper';

const IntroduceWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  position: relative;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  z-index: 1px;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  font-weight: 600;
  font-size: 18px;
  width: 246px;
  height: 367px;
  display: flex;
  padding: 25px 7px;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  font-family: '나눔손글씨 가람연꽃';
  background: #f5ffe4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const DescriptionTopLeftImg = styled.img`
  position: absolute;
  top: -25px;
  left: -25px;
  width: 123px;
  height: 74px;
  transform: scaleX(1);
`;
const DescriptionTopRightImg = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 123px;
  height: 74px;
  transform: scaleX(-1);
`;

const Introduce = () => {
  const descriptionTopImg = '/images/IntroTitle.png';
  return (
    <IntroduceWrap>
      <Paper />
      <ContentsWrap>
        <Description>
          <DescriptionTopLeftImg src={descriptionTopImg} />
          <DescriptionTopRightImg src={descriptionTopImg} />
          글씨는
          <br /> 연필을 쥐는 법, 자음과 모음을 적는 법,
          <br /> 성격에 따라서 가지각색으로 드러납니다.
          <br />
          <br /> 이런 글씨에는 마음이 담깁니다.
          <br /> 여러분은 어떻게 생각하시나요?
          <br />
          <br /> 곧 시작할 테스트에서
          <br /> 보게 될 글씨는 누군가의 손글씨 입니다.
          <br />
          <br /> 내 글씨체와 비슷한 것 또는 <br />
          내가 마음에 드는 글씨체를 선택해주세요.
          <br />
          <br /> 여러분이 어떤 사람인지 또는
          <br /> 어떤 사람이 되고싶은지 알려드릴게요.
        </Description>
        <Link to="/survey" style={{ textDecorationLine: 'none' }}>
          <PostIt description="알아보러 가기" />
        </Link>
      </ContentsWrap>
    </IntroduceWrap>
  );
};

export default Introduce;
