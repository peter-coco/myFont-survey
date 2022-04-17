import styled from 'styled-components';

export const ResultFormWrap = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const DescriptionWrap = styled.div`
  width: 286px;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;
export const ResultWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 10px 10px;
  box-sizing: border-box;
  position: absolute;
  z-index: 1px;
  top: 0px;
`;
export const ResultTagWrap = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
export const ResultTag = styled.div<{ mainColor: string }>`
  padding: 5px 16px;
  box-sizing: border-box;
  background-color: ${(props) => props.mainColor};
  border-radius: 10px;
  font-size: 13px;
  font-family: '나눔손글씨 가람연꽃';
  font-weight: 700;
`;
export const ResultCharaterWap = styled.div``;
export const ResultCharaterTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: '나눔손글씨 가람연꽃';
  margin-bottom: 20px;
  & > div {
    text-align: center;
  }
`;
export const ResultCharater = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;
export const ResultDivider = styled.div<{ mainColor: string }>`
  width: 80%;
  /* height: 1px; */
  border: 1px dashed ${(props) => props.mainColor};
`;
export const ResultPercentage = styled.div<{ mainColor: string }>`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '나눔손글씨 가람연꽃';
  font-size: 14px;

  & > span {
    color: ${(props) => props.mainColor};
  }
`;
export const ResultFontImage = styled.img`
  width: 320px;
  height: 357px;
`;
export const ResultFontTitle = styled.div<{ mainColor: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: '나눔손글씨 가람연꽃';
  word-break: keep-all;
  & > div {
    text-align: center;
  }
  & > div > span {
    color: ${(props) => props.mainColor};
  }
`;
export const ResultFontSubTitle = styled.div<{ mainColor: string }>`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Jua';
  color: ${(props) => props.mainColor};
`;
export const ResultFontDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const ResultLetterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const ResultLetterTitle = styled.div<{ mainColor?: string }>`
  width: 251px;
  height: 38px;
  padding: 5px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-family: 'Jua';
  background-color: ${(props) => props.mainColor};
`;
export const ResultLetter = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 270px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 50px;
  box-sizing: border-box;
  text-align: center;
  word-break: keep-all;
  font-family: '나눔손글씨 가람연꽃';
  /* visibility: hidden; */

  .blast {
    will-change: opacity, filter;
  }
`;

export const ResultShareWrap = styled.div`
  width: 286px;
  /* height: 129px; */
  padding: 16px 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  gap: 10px;
`;
export const ResultShareTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '나눔손글씨 가람연꽃';
`;
export const ResultShareLinkWrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const ResultShareKakao = styled.div``;
export const ResultShareLink = styled.img`
  width: 58px;
  height: 58px;
  cursor: pointer;
`;

export const ResultMatchWrap = styled.div`
  width: 286px;
  padding: 16px 5px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  gap: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ResultMatchTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '나눔손글씨 가람연꽃';
`;
export const ResultMatchLikeWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const ResultMatchLikeDislikeWrap = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;
export const ResultMatchLikeTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-family: 'Jua';
`;
export const ResultMatchLikeImage = styled.img`
  width: 109px;
  height: 122px;
`;
export const ResultMatchLikeDescription = styled.div`
  font-weight: 400;
  font-size: 9px;
  text-align: center;
  font-family: 'roboto';
`;
export const ResultMatchLikeLinkBtn = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 9px;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;
  padding: 2px 10px;
  box-sizing: border-box;
  font-family: 'Jua';
  cursor: pointer;
`;

export const ResultMatchDislikeWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const ResultMatchDislikeTitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-family: 'Jua';
`;
export const ResultMatchDislikeImage = styled.img`
  width: 109px;
  height: 122px;
`;
export const ResultMatchDislikeDescription = styled.div`
  font-weight: 400;
  font-size: 9px;
  font-family: 'roboto';
  text-align: center;
`;
export const ResultMatchDislikeLinkBtn = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 9px;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;
  padding: 2px 10px;
  box-sizing: border-box;
  font-family: 'Jua';
  cursor: pointer;
`;

export const ResultCreatorWrap = styled.div`
  width: 286px;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;
export const ResultCreatorTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  font-family: '나눔손글씨 가람연꽃';
  justify-content: center;
`;
export const ResultCreatorImage = styled.img`
  width: 115px;
  height: 71px;
`;
export const ResultCreatorHashtag = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
export const ResultCreatorSubTitle = styled.div<{ mainColor: string }>`
  font-weight: 400;
  font-size: 14px;
  font-family: 'roboto';
  color: ${(props) => props.mainColor};
`;
export const ResultCreatorDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: 'roboto';
`;
export const ResultCreatorLinkBtn = styled.div<{ mainColor: string }>`
  width: 122px;
  height: 32px;
  background-color: ${(props) => props.mainColor};
  border-radius: 30px;
  font-family: 'Jua';
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ResultRetryBtn = styled.div`
  width: 251px;
  height: 74px;

  background: #ffffff;
  border: 3px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  /* font-family: 'roboto'; */
  font-family: '나눔손글씨 가람연꽃';
  cursor: pointer;
`;

export const UnderLinkBar = styled.div<{ mainColor: string }>`
  width: 120%;
  height: 9px;
  background-color: ${(props) => props.mainColor};
  position: absolute;
  top: 50%;
  z-index: -1;
`;

export const TestReviewWrap = styled.div`
  width: 286px;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;

export const TestReviewTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: '나눔손글씨 가람연꽃';
`;
export const TestReviewContentsWrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const TestReviewContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
export const TestReviewEmotionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #e8e8e8;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 50%;
`;
export const TestReviewEmotion = styled.div`
  font-size: 25px;
`;
export const TestReviewEmotionDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  font-family: 'Jua';
`;
export const TestReviewEmotionCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  font-family: 'Jua';
`;

export const FontRankWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FontRank = styled.div`
  width: 248px;
  height: 51px;
  border-radius: 10px;
  /* border: 1px solid #9d9a9a;
  box-sizing: border-box; */
  display: flex;
`;
export const FontRankLeft = styled.div<{ mainColor: string }>`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  /* border: 1px solid #ffffff; */
  -webkit-text-stroke: 0.4px #ffffff;
  font-weight: 900;
  background-color: ${(props) => props.mainColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left: 1px solid #9d9a9a;
  border-right: 1px solid #9d9a9a;
  border-top: 1px solid #9d9a9a;
  border-bottom: 1px solid #9d9a9a;
  box-sizing: border-box;
`;
export const FontRankRight = styled.div`
  width: calc(100% - 70px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  font-family: '나눔손글씨 가람연꽃';
  /* border-left: 1px solid #9d9a9a; */
  border-right: 1px solid #9d9a9a;
  border-top: 1px solid #9d9a9a;
  border-bottom: 1px solid #9d9a9a;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
