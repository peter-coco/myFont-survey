import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firebaseDB } from '../config/firebase';
import { Link } from 'react-router-dom';
import Paper from '../components/paper';
import PostIt from '../components/postit';

const HomeWrap = styled.div`
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
const Title = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  font-family: '나눔손글씨 가람연꽃';
  text-align: center;
`;

const TitleWrap = styled.div`
  /* padding: 10px 50px; */
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
`;
const TitleLeftTop = styled.img`
  width: 74px;
  height: 73px;
  position: absolute;
  top: 0;
  left: 15%;
`;
const TitleRightTop = styled.img`
  width: 60px;
  height: 57px;
  position: absolute;
  top: 0;
  right: 20%;
`;
const TitleRightBottom = styled.img`
  width: 73px;
  height: 81px;
  position: absolute;
  bottom: 8%;
  right: 8%;
`;

const ShapesWrap = styled.div``;

const Writer = styled.div`
  font-size: 13px;
  font-family: '나눔손글씨 가람연꽃';
`;
const ParticipantWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: '나눔손글씨 가람연꽃';
`;
const Participant = styled.div`
  font-size: 18px;
`;

const Home = () => {
  const homeTopRight = '/images/homeTopRight.png';
  const homeTopLeft = '/images/homeTopLeft.png';
  const homeBottomLeft = '/images/homeBottomRight.png';

  const [participatorCount, setParticipatorCount] = useState(0);

  useEffect(() => {
    const bucket = firebaseDB.collection('result');

    bucket
      .doc('type')
      .get()
      .then((item) => {
        const items = item.data();

        setParticipatorCount(items?.total);
      });
  }, []);
  return (
    <HomeWrap>
      <Paper />
      <ContentsWrap>
        <TitleWrap>
          <TitleLeftTop src={homeTopLeft} />
          <TitleRightTop src={homeTopRight} />
          <TitleRightBottom src={homeBottomLeft} />

          <Title>
            좋아하는
            <br /> 글씨로
            <br /> 알아보는
            <br /> 성격 테스트
          </Title>
          <ShapesWrap></ShapesWrap>
        </TitleWrap>
        <Link to="/introduce" style={{ textDecorationLine: 'none' }}>
          {/* <Select>시작하기</Select> */}
          <PostIt description="시작하기" />
        </Link>
        <ParticipantWrap>
          <Participant>참여자 수</Participant>
          <Participant>{participatorCount}</Participant>
        </ParticipantWrap>
        <Writer>REPLACE</Writer>
      </ContentsWrap>
    </HomeWrap>
  );
};

export default Home;
