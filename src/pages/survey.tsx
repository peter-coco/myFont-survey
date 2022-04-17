import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../components/loading';
import { firebaseDB } from '../config/firebase';
import * as Styles from '../components/surveyForm/index.style';
import ReactAudioPlayer from 'react-audio-player';
import { setSurveyContents } from '../utils/setSurveyContents';
import Paper from '../components/paper';

const SurveyWrap = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;
`;

const Survey = () => {
  const soundTrack = '/sound/survey_sound.m4a';

  const [loadingStateToResult, setLoadingStateToResult] = useState(false);

  const [timer, setTimer] = useState(2);
  const [timerButton, setTimerButton] = useState(false);

  const [introduceTimer, setIntroduceTimer] = useState(2);
  const [introduceTimerButton, setIntroduceTimerButton] = useState(false);
  const [surveyNo, setSurveyNo] = useState(0);

  const [winner, setWinner] = useState('');

  const [descriptionImage, setDescriptionImage] = useState('');
  const [description, setDescription] = useState('');
  const [topOptionFont, setTopOptionFont] = useState('');
  const [bottomOptionFont, setBottomOptionFont] = useState('');
  const [titleBgColor, setTitleBgColor] = useState('');
  const [bottomImg, setBottomImg] = useState('');
  const [winnerOnBattle, setWinnerOnBattle] = useState<string[]>([]);

  const handleNextSurvey = useCallback(
    (winner: string) => {
      if (surveyNo < 18) {
        setSurveyNo((pre) => pre + 1);
        return;
      }

      let splitPath = winner.split('/');
      let fileName = splitPath[splitPath.length - 1];
      let splitedFileName = fileName.split('.');

      setWinner(splitedFileName[0]);
      setTimerButton(true);
      setLoadingStateToResult(true);
    },
    [surveyNo]
  );

  const handleTopOption = useCallback(() => {
    setWinnerOnBattle([...winnerOnBattle, topOptionFont]);

    handleNextSurvey(topOptionFont);
  }, [handleNextSurvey, topOptionFont, winnerOnBattle]);
  const handleBottomOption = useCallback(() => {
    setWinnerOnBattle([...winnerOnBattle, bottomOptionFont]);

    handleNextSurvey(bottomOptionFont);
  }, [bottomOptionFont, handleNextSurvey, winnerOnBattle]);

  const handleAddResultToDatabase = useCallback(async () => {
    setTimerButton(false);
    const resultType = winner;

    const bucket = firebaseDB.collection('result');

    bucket
      .doc('type')
      .get()
      .then(async (item) => {
        const items = item.data();
        if (resultType === 'font_type_1') {
          // console.log(resultType, items?.raccon, items?.total);
          await bucket.doc('type').update({ font_type_1: items?.font_type_1 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_2') {
          await bucket.doc('type').update({ font_type_2: items?.font_type_2 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_3') {
          await bucket.doc('type').update({ font_type_3: items?.font_type_3 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_4') {
          await bucket.doc('type').update({ font_type_4: items?.font_type_4 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_5') {
          await bucket.doc('type').update({ font_type_5: items?.font_type_5 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_6') {
          await bucket.doc('type').update({ font_type_6: items?.font_type_6 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_7') {
          await bucket.doc('type').update({ font_type_7: items?.font_type_7 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_8') {
          await bucket.doc('type').update({ font_type_8: items?.font_type_8 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_9') {
          await bucket.doc('type').update({ font_type_9: items?.font_type_9 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_10') {
          await bucket.doc('type').update({ font_type_10: items?.font_type_10 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_11') {
          await bucket.doc('type').update({ font_type_11: items?.font_type_11 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_12') {
          await bucket.doc('type').update({ font_type_12: items?.font_type_12 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_13') {
          await bucket.doc('type').update({ font_type_13: items?.font_type_13 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_14') {
          await bucket.doc('type').update({ font_type_14: items?.font_type_14 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else if (resultType === 'font_type_15') {
          await bucket.doc('type').update({ font_type_15: items?.font_type_15 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        } else {
          await bucket.doc('type').update({ font_type_16: items?.font_type_16 + 1 });
          await bucket.doc('type').update({ total: items?.total + 1 });
          window.location.href = `/result/${resultType}`;
        }
      });
  }, [winner]);

  // console.log(topOptionFont);
  useEffect(() => {
    const [
      description,
      topOptionImage,
      bottomOptionImage,
      descriptionImage,
      titleBgColor,
      bottomImg,
    ] = setSurveyContents(surveyNo, winnerOnBattle);

    setTopOptionFont(topOptionImage);
    setBottomOptionFont(bottomOptionImage);
    setDescription(description);
    setDescriptionImage(descriptionImage);
    setTitleBgColor(titleBgColor);
    setBottomImg(bottomImg);

    if (surveyNo === 0 || surveyNo === 9 || surveyNo === 14 || surveyNo === 17) {
      setIntroduceTimerButton(true);
      setIntroduceTimer(2);
    }
  }, [surveyNo]);

  useEffect(() => {
    if (timerButton) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((pre) => pre - 1);
        } else {
          handleAddResultToDatabase();

          // setLoadingStateToResult(false);
          return;
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timerButton, timer]);

  useEffect(() => {
    if (introduceTimerButton) {
      const countdown = setInterval(() => {
        if (introduceTimer > 0) {
          setIntroduceTimer((pre) => pre - 1);
        } else {
          handleNextSurvey('');
          setIntroduceTimerButton(false);
          setIntroduceTimer(2);

          // setLoadingStateToResult(false);
          return;
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [introduceTimerButton, introduceTimer]);

  return (
    <SurveyWrap>
      <Paper />
      {loadingStateToResult ? (
        <Loading />
      ) : (
        <Styles.SurveyFormWrap>
          {surveyNo === 0 || surveyNo === 9 || surveyNo === 14 || surveyNo === 17 ? (
            <Styles.Introduce>
              <Styles.SurveyDescriptionIntroduceImage src={descriptionImage} />
              <Styles.SurveyDescriptionIntroduce bgColor={titleBgColor}>
                {description}
              </Styles.SurveyDescriptionIntroduce>
            </Styles.Introduce>
          ) : (
            <>
              <Styles.Top>
                <Styles.SurveyDescriptionImage src={descriptionImage} />
                <Styles.SurveyDescription bgColor={titleBgColor}>
                  {description}
                </Styles.SurveyDescription>
                <Styles.SurveyDescriptionImage src={descriptionImage} mirror={true} />
              </Styles.Top>
              <Styles.SurveyOptionWrap>
                <Styles.SurveyOption src={topOptionFont} onClick={handleTopOption} />
                <Styles.SurveyOption src={bottomOptionFont} onClick={handleBottomOption} />
              </Styles.SurveyOptionWrap>
              <Styles.Bottom>
                <Styles.BottomDescription>
                  좋아하는 글씨체는 내가 닮고 싶은 성격을 <br />
                  나와 닮은 글씨체는 내 성격을 나타냅니다.
                </Styles.BottomDescription>
                <Styles.BottomImage src={bottomImg} />
              </Styles.Bottom>
            </>
          )}
        </Styles.SurveyFormWrap>
      )}
    </SurveyWrap>
  );
};

export default Survey;
