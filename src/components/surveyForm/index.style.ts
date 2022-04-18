import styled from 'styled-components';

export const SurveyFormWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  z-index: 1px;
  top: 0px;
`;

export const Introduce = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

export const SurveyDescriptionImage = styled.img<{ mirror?: boolean }>`
  width: 44px;
  height: 44px;
  transform: ${(props) => (props.mirror ? 'scaleX(-1)' : 'scaleX(1)')};
`;
export const SurveyDescriptionIntroduceImage = styled.img<{ mirror?: boolean }>`
  width: 44px;
  height: 44px;
  animation: rotate_image 3s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const SurveyDescriptionIntroduce = styled.div<{ bgColor: string }>`
  width: 197px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: ${(props) => props.bgColor};
  border: 1px solid #b7bfaa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: '나눔손글씨 가람연꽃';
  font-size: 24px;
  animation: fadeInUp 1s;
  position: relative;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
export const SurveyDescription = styled.div<{ bgColor: string }>`
  width: 197px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: ${(props) => props.bgColor};
  border: 1px solid #b7bfaa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: '나눔손글씨 가람연꽃';
  font-size: 24px;
`;
export const SurveyOptionWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: rgba(233, 233, 233, 0.5);
  padding: 30px 10px;
  box-sizing: border-box;
`;
export const SurveyOption = styled.img`
  width: 300px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 30px;
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  top: -30px;
`;
export const BottomDescription = styled.div`
  font-family: '나눔손글씨 가람연꽃';
  /* -webkit-text-stroke: 0.3px #ffedb6; */
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  position: relative;
  top: -20px;
  left: 20px;
  z-index: 1px;
`;
export const BottomImage = styled.img`
  width: 154px;
  height: 139px;
`;
