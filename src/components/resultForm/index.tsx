import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Styles from './index.style';
import { ResultContent } from '../../types/resultContet';
import { setResultContents } from '../../utils/setResultContents';
import KakaoShareButton from '../kakaoShare';
import KakaoAdfit from '../kakaoAdfit';
import { firebaseDB } from '../../config/firebase';
import ReactAudioPlayer from 'react-audio-player';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import Paper from '../paper';
import setRankingName from '../../utils/setRankingName';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const ResultType = ({ type = 'font_type_1' }: { type?: string }) => {
  const creatorLogo = '/images/replace_logo.png';
  const shareLinkLogo = '/images/shareLink.png';
  const soundTrack = '/sound/survey_bgm.mp3';

  const [radarData, setRadarData] = useState({
    labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
    datasets: [
      {
        data: [20, 90, 30, 50, 25],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });
  const copyLinkRef = useRef('window.location.href');
  const [resultPercent, setResultPercent] = useState(0);

  const [resultLikeCount, setResultLikeCount] = useState(0);
  const [resultBadCount, setResultBadCount] = useState(0);
  const [resultExpectCount, setResultExpectCount] = useState(0);
  const [resultFunCount, setResultFunCount] = useState(0);

  const [resultLikeCountCheck, setResultLikeCountCheck] = useState(false);
  const [resultBadCountCheck, setResultBadCountCheck] = useState(false);
  const [resultExpectCountCheck, setResultExpectCountCheck] = useState(false);
  const [resultFunCountCheck, setResultFunCountCheck] = useState(false);

  const [resultMainColor, setResultMainColor] = useState('');
  const [resultLogoImage, setResultLogoImage] = useState('');
  const [resultFontTitle, setResultFontTitle] = useState<React.ReactNode>();
  const [resultFontCharacter, setResultFontCharacter] = useState<React.ReactNode>();
  const [resultFontDescription, setResultFontDescription] = useState<React.ReactNode>();
  const [resultLetterTitle, setResultLetterTitle] = useState('');
  const [resultLetter, setResultLetter] = useState<React.ReactNode>();
  const [resultLetterImage, setResultLetterImage] = useState('');
  const [resultLikeImageUrl, setResultLikeImageUrl] = useState('');
  const [resultLikeDescription, setResultLikeDescription] = useState<React.ReactNode>();
  const [resultLikeLinkUrl, setResultLikeLinkUrl] = useState('');
  const [resultDislikeImageUrl, setResultDislikeImageUrl] = useState('');
  const [resultDislikeDescription, setResultDislikeDescription] = useState<React.ReactNode>();
  const [resultDislikeLinkUrl, setResultDislikeLinkUrl] = useState('');
  const [resultTag, setResultTag] = useState<string[]>([]);
  const [resultRank1st, setResultRank1st] = useState<string>('');
  const [resultRank2nd, setResultRank2nd] = useState<string>('');
  const [resultRank3rd, setResultRank3rd] = useState<string>('');

  const handleLikeLinkBtn = () => {
    window.location.href = resultLikeLinkUrl;
  };

  const handleDislikeLinkBtn = () => {
    window.location.href = resultDislikeLinkUrl;
  };

  const handleCreatorLinkBtn = () => {
    window.open('https://www.instagram.com/2022.replace/');
  };

  const handleClickLikeBtn = () => {
    if (resultLikeCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ like: items?.like + 1 });
        setResultLikeCount((pre) => pre + 1);
        setResultLikeCountCheck(true);
      });
  };

  const handleClickBadBtn = () => {
    if (resultBadCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ bad: items?.bad + 1 });
        setResultBadCount((pre) => pre + 1);
        setResultBadCountCheck(true);
      });
  };

  const handleClickFunBtn = () => {
    if (resultFunCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ fun: items?.fun + 1 });
        setResultFunCount((pre) => pre + 1);
        setResultFunCountCheck(true);
      });
  };

  const handleClickExpectBtn = () => {
    if (resultExpectCountCheck) return;

    const bucket = firebaseDB.collection('evaluation');

    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        bucket.doc('evaluation_item').update({ expect: items?.expect + 1 });
        setResultExpectCount((pre) => pre + 1);
        setResultExpectCountCheck(true);
      });
  };

  const handleShareLink = (text: any) => {
    // 흐름 1.
    if (!document.queryCommandSupported('copy')) {
      return alert('복사하기가 지원되지 않는 브라우저입니다.');
    }
    // 흐름 2.
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.position = 'fixed';
    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand('copy');
    // 흐름 5.
    document.body.removeChild(textarea);
    alert('클립보드에 복사되었습니다.');
  };

  const handleRetryBtn = () => {
    window.location.href = '/';
  };

  const handleAnotherTestBtn = () => {
    window.location.href = 'https://jaksimsamil-survey.netlify.app';
  };

  const handleResultContent = useCallback((resultContent: ResultContent) => {
    setResultMainColor(resultContent.mainColor);
    setResultLogoImage(resultContent.logoImage);
    setResultFontTitle(resultContent.fontTitle);
    setResultFontCharacter(resultContent.fontCharacter);
    setResultFontDescription(resultContent.fontDescription);
    setResultLetterTitle(resultContent.letterTitle);
    setResultLetter(resultContent.letter);
    setResultLetterImage(resultContent.letterImage);
    setResultLikeImageUrl(resultContent.likeImageUrl);
    setResultLikeDescription(resultContent.likeDescription);
    setResultLikeLinkUrl(resultContent.likeLinkUrl);
    setResultDislikeImageUrl(resultContent.dislikeImageUrl);
    setResultDislikeDescription(resultContent.dislikeDescription);
    setResultDislikeLinkUrl(resultContent.dislikeLinkUrl);
    setRadarData(resultContent.radarData);
    setResultTag(resultContent.resultTag);
  }, []);

  useEffect(() => {
    const resultContent = setResultContents(type);
    handleResultContent(resultContent);
  }, [type]);

  useEffect(() => {
    const bucket = firebaseDB.collection('result');

    bucket
      .doc('type')
      .get()
      .then((item) => {
        const items = item.data();
        // console.log(items?.sort());

        let sortable = [];
        for (let name in items) {
          if (name === 'total') continue;
          // console.log(name);
          sortable.push([name, items[name]]);
        }

        sortable.sort(function (a, b) {
          return b[1] - a[1];
        });

        setResultRank1st(setRankingName(sortable[0][0]));
        setResultRank2nd(setRankingName(sortable[1][0]));
        setResultRank3rd(setRankingName(sortable[2][0]));

        // console.log(sortable);

        let typeCount = 0;

        if (type === 'font_type_1') {
          typeCount = items?.font_type_1;
        } else if (type === 'font_type_2') {
          typeCount = items?.font_type_2;
        } else if (type === 'font_type_3') {
          typeCount = items?.font_type_3;
        } else if (type === 'font_type_4') {
          typeCount = items?.font_type_4;
        } else if (type === 'font_type_5') {
          typeCount = items?.font_type_5;
        } else if (type === 'font_type_6') {
          typeCount = items?.font_type_6;
        } else if (type === 'font_type_7') {
          typeCount = items?.font_type_7;
        } else if (type === 'font_type_8') {
          typeCount = items?.font_type_8;
        } else if (type === 'font_type_9') {
          typeCount = items?.font_type_9;
        } else if (type === 'font_type_10') {
          typeCount = items?.font_type_10;
        } else if (type === 'font_type_11') {
          typeCount = items?.font_type_11;
        } else if (type === 'font_type_12') {
          typeCount = items?.font_type_12;
        } else if (type === 'font_type_13') {
          typeCount = items?.font_type_13;
        } else if (type === 'font_type_14') {
          typeCount = items?.font_type_14;
        } else if (type === 'font_type_15') {
          typeCount = items?.font_type_15;
        } else {
          typeCount = items?.font_type_16;
        }

        const percentage = Number(((typeCount / items?.total) * 100).toFixed(2));
        setResultPercent(percentage);
      });
  }, []);

  useEffect(() => {
    // console.log(process.env.NEXT_PUBLIC_FIREBASE_APIKEY);
    const bucket = firebaseDB.collection('evaluation');
    bucket
      .doc('evaluation_item')
      .get()
      .then((item) => {
        const items = item.data();
        setResultExpectCount(items?.expect);
        setResultLikeCount(items?.like);
        setResultBadCount(items?.bad);
        setResultFunCount(items?.fun);
      });
  }, []);

  return (
    <Styles.ResultFormWrap>
      {/* <Paper /> */}
      <ReactAudioPlayer src={soundTrack} autoPlay controls={false} loop={true} volume={0.05} />
      <Styles.ResultWrap>
        <Styles.DescriptionWrap>
          <Styles.ResultPercentage mainColor={resultMainColor}>
            나와 비슷한 유형의 사람이&nbsp;<span>{resultPercent}%</span>&nbsp;있어요.
          </Styles.ResultPercentage>
          <Styles.ResultFontTitle mainColor={resultMainColor}>
            {resultFontCharacter}
          </Styles.ResultFontTitle>
          <Radar data={radarData} />
          <Styles.ResultTagWrap>
            {resultTag.map((e) => (
              <Styles.ResultTag mainColor={resultMainColor}>{e}</Styles.ResultTag>
            ))}
          </Styles.ResultTagWrap>
          <Styles.ResultCharaterWap>
            <Styles.ResultCharaterTitle>{resultFontTitle}</Styles.ResultCharaterTitle>
            <Styles.ResultCharater>{resultFontDescription}</Styles.ResultCharater>
          </Styles.ResultCharaterWap>
          <Styles.ResultDivider mainColor={resultMainColor} />
          <Styles.ResultLetterWrap>
            <Styles.ResultLetterTitle>{resultLetterTitle}</Styles.ResultLetterTitle>
            <Styles.ResultLetter bgImage={resultLetterImage}>{resultLetter}</Styles.ResultLetter>
          </Styles.ResultLetterWrap>
        </Styles.DescriptionWrap>
        <KakaoAdfit />
        <Styles.ResultShareWrap>
          <Styles.ResultShareTitle>
            [내 결과 공유하기]
            {/* <Styles.UnderLinkBar mainColor={resultMainColor} /> */}
          </Styles.ResultShareTitle>
          <Styles.ResultShareLinkWrap>
            <KakaoShareButton />
            {/* <Styles.ResultShareKakao></Styles.ResultShareKakao> */}
            <Styles.ResultShareLink
              src={shareLinkLogo}
              onClick={() => handleShareLink(window.location.href)}
            ></Styles.ResultShareLink>
          </Styles.ResultShareLinkWrap>
        </Styles.ResultShareWrap>
        <Styles.ResultMatchWrap>
          <Styles.ResultMatchTitle>[ 글씨 별 많은 유형 순위 ]</Styles.ResultMatchTitle>
          <Styles.FontRankWrap>
            <Styles.FontRank>
              <Styles.FontRankLeft mainColor={resultMainColor}>🌟 1위 🌟</Styles.FontRankLeft>
              <Styles.FontRankRight>{resultRank1st}</Styles.FontRankRight>
            </Styles.FontRank>
            <Styles.FontRank>
              <Styles.FontRankLeft mainColor={resultMainColor}>⭐️ 2위 ⭐️</Styles.FontRankLeft>
              <Styles.FontRankRight>{resultRank2nd}</Styles.FontRankRight>
            </Styles.FontRank>
            <Styles.FontRank>
              <Styles.FontRankLeft mainColor={resultMainColor}>✨ 3위 ✨</Styles.FontRankLeft>
              <Styles.FontRankRight>{resultRank3rd}</Styles.FontRankRight>
            </Styles.FontRank>
          </Styles.FontRankWrap>
        </Styles.ResultMatchWrap>
        <Styles.TestReviewWrap>
          <Styles.TestReviewTitle>[테스트 평가하기]</Styles.TestReviewTitle>
          <Styles.TestReviewContentsWrap>
            <Styles.TestReviewContentWrap>
              <Styles.TestReviewEmotionWrap onClick={handleClickLikeBtn}>
                <Styles.TestReviewEmotion>💓</Styles.TestReviewEmotion>
                <Styles.TestReviewEmotionDescription>잘맞아요</Styles.TestReviewEmotionDescription>
              </Styles.TestReviewEmotionWrap>
              <Styles.TestReviewEmotionCount>{resultLikeCount}</Styles.TestReviewEmotionCount>
            </Styles.TestReviewContentWrap>
            <Styles.TestReviewContentWrap>
              <Styles.TestReviewEmotionWrap onClick={handleClickFunBtn}>
                <Styles.TestReviewEmotion>🔮</Styles.TestReviewEmotion>
                <Styles.TestReviewEmotionDescription>재밌어요</Styles.TestReviewEmotionDescription>
              </Styles.TestReviewEmotionWrap>
              <Styles.TestReviewEmotionCount>{resultFunCount}</Styles.TestReviewEmotionCount>
            </Styles.TestReviewContentWrap>
            <Styles.TestReviewContentWrap>
              <Styles.TestReviewEmotionWrap onClick={handleClickBadBtn}>
                <Styles.TestReviewEmotion>🥀</Styles.TestReviewEmotion>
                <Styles.TestReviewEmotionDescription>아쉬워요</Styles.TestReviewEmotionDescription>
              </Styles.TestReviewEmotionWrap>
              <Styles.TestReviewEmotionCount>{resultBadCount}</Styles.TestReviewEmotionCount>
            </Styles.TestReviewContentWrap>
            <Styles.TestReviewContentWrap>
              <Styles.TestReviewEmotionWrap onClick={handleClickExpectBtn}>
                <Styles.TestReviewEmotion>🌟</Styles.TestReviewEmotion>
                <Styles.TestReviewEmotionDescription>후속작GO!</Styles.TestReviewEmotionDescription>
              </Styles.TestReviewEmotionWrap>
              <Styles.TestReviewEmotionCount>{resultExpectCount}</Styles.TestReviewEmotionCount>
            </Styles.TestReviewContentWrap>
          </Styles.TestReviewContentsWrap>
        </Styles.TestReviewWrap>
        <Styles.ResultCreatorWrap>
          <Styles.ResultCreatorTitle>[만든이]</Styles.ResultCreatorTitle>
          <Styles.ResultCreatorImage src={creatorLogo} />
          <Styles.ResultCreatorHashtag>
            #너하고싶은거다해 #도전공간 #리플레이스
          </Styles.ResultCreatorHashtag>
          <Styles.ResultCreatorSubTitle mainColor={resultMainColor}>
            우리가 하고싶은 일을 합니다.
          </Styles.ResultCreatorSubTitle>
          <Styles.ResultCreatorDescription>
            나를 열정적으로 만드는 것을 콘텐츠로 제작합니다. 재밌는 실험을 많이 할 예정이니
            기대해주세요!
          </Styles.ResultCreatorDescription>
          <Styles.ResultCreatorLinkBtn mainColor={resultMainColor} onClick={handleCreatorLinkBtn}>
            2022.replace
          </Styles.ResultCreatorLinkBtn>
        </Styles.ResultCreatorWrap>
        <Styles.ResultRetryBtn onClick={handleAnotherTestBtn}>
          다른 심리테스트 해보기
        </Styles.ResultRetryBtn>
        <Styles.ResultRetryBtn onClick={handleRetryBtn}>테스트 다시 하기</Styles.ResultRetryBtn>
      </Styles.ResultWrap>
      {/* <KakaoAdfit /> */}
    </Styles.ResultFormWrap>
  );
};

export default ResultType;
