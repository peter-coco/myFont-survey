import styled from 'styled-components';

export const SurveyFormWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Top = styled.div`
  width: 180px;
  height: 200px;
`;

export const SurveyDescriptionImage = styled.img<{ mirror?: boolean }>`
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.mirror ? 'scaleX(-1)' : 'scaleX(1)')};
`;
export const SurveyDescription = styled.div<{ bgColor: string }>`
  width: 197px;
  height: 60px;
  text-align: center;
  background: ${(props) => props.bgColor};
  border: 1px solid #b7bfaa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: '나눔손글씨 가람연꽃';
`;
export const SurveyOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SurveyOption = styled.img`
  width: 250px;
  height: 56px;
  font-weight: 400;
  font-size: 15px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px 20px;
  box-sizing: border-box;
  font-family: 'Jua';
  word-break: keep-all;
  cursor: pointer;
  &:focus {
    color: #c4c4c4;
    background-color: #9d9d9d;
  }
`;

export const Bottom = styled.div`
  display: flex;
`;
export const BottomDescription = styled.div`
  font-family: '나눔손글씨 가람연꽃';
  font-size: 13px;
  text-align: center;
`;
export const BottomImage = styled.img`
  width: 142px;
  height: 141px;
`;
