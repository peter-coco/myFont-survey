export const setSurveyContents = (
  surveyNo: number,
  winnerOnBattle: string[]
): [string, string, string, string, string, string] => {
  let description;
  let topOptionFont;
  let bottomOptionFont;
  let descriptionImage;
  let titleBgColor;
  let bottomImg;

  if (surveyNo === 1) {
    // 16 (1/8)
    description = '16강 1/8';
    topOptionFont = '/images/font_type_1.png';
    bottomOptionFont = '/images/font_type_2.png';
  } else if (surveyNo === 2) {
    description = '16강 2/8';
    topOptionFont = '/images/font_type_3.png';
    bottomOptionFont = '/images/font_type_4.png';
  } else if (surveyNo === 3) {
    description = '16강 3/8';
    topOptionFont = '/images/font_type_5.png';
    bottomOptionFont = '/images/font_type_6.png';
  } else if (surveyNo === 4) {
    description = '16강 4/8';
    topOptionFont = '/images/font_type_7.png';
    bottomOptionFont = '/images/font_type_8.png';
  } else if (surveyNo === 5) {
    description = '16강 5/8';
    topOptionFont = '/images/font_type_9.png';
    bottomOptionFont = '/images/font_type_10.png';
  } else if (surveyNo === 6) {
    description = '16강 6/8';
    topOptionFont = '/images/font_type_11.png';
    bottomOptionFont = '/images/font_type_12.png';
  } else if (surveyNo === 7) {
    description = '16강 7/8';
    topOptionFont = '/images/font_type_13.png';
    bottomOptionFont = '/images/font_type_14.png';
  } else if (surveyNo === 8) {
    description = '16강 8/8';
    topOptionFont = '/images/font_type_15.png';
    bottomOptionFont = '/images/font_type_16.png';
  } else if (surveyNo === 9) {
    // 8강 1/4
    description = '8강 1/4';
    topOptionFont = winnerOnBattle[0];
    bottomOptionFont = winnerOnBattle[1];
  } else if (surveyNo === 10) {
    description = '8강 2/4';
    topOptionFont = winnerOnBattle[2];
    bottomOptionFont = winnerOnBattle[3];
  } else if (surveyNo === 11) {
    description = '8강 3/4';
    topOptionFont = winnerOnBattle[4];
    bottomOptionFont = winnerOnBattle[5];
  } else if (surveyNo === 12) {
    description = '8강 4/4';
    topOptionFont = winnerOnBattle[6];
    bottomOptionFont = winnerOnBattle[7];
  } else if (surveyNo === 13) {
    // 4강 1/2
    description = '4강 1/2';
    topOptionFont = winnerOnBattle[8];
    bottomOptionFont = winnerOnBattle[9];
  } else if (surveyNo === 14) {
    // 4강 2/2
    description = '4강 2/2';
    topOptionFont = winnerOnBattle[10];
    bottomOptionFont = winnerOnBattle[11];
  } else {
    // 결승 1/2
    description = '결승';
    topOptionFont = winnerOnBattle[12];
    bottomOptionFont = winnerOnBattle[13];
  }

  // bgColor, descriptionImg, bottomImg
  if (surveyNo <= 8) {
    titleBgColor = '#F5FFE4';
    descriptionImage = '/images/descriptionImg_16.png';
    bottomImg = '/images/bottomImg_16.png';
  } else if (surveyNo <= 12) {
    titleBgColor = '#FFEAF1';
    descriptionImage = '/images/descriptionImg_8.png';
    bottomImg = '/images/bottomImg_8.png';
  } else if (surveyNo <= 14) {
    titleBgColor = '#EAF2F7';
    descriptionImage = '/images/descriptionImg_4.png';
    bottomImg = '/images/bottomImg_4.png';
  } else {
    titleBgColor = '#F8E8FF';
    descriptionImage = '/images/descriptionImg_2.png';
    bottomImg = '/images/bottomImg_2.png';
  }

  return [description, topOptionFont, bottomOptionFont, descriptionImage, titleBgColor, bottomImg];
};
