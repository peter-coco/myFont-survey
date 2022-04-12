export const setSurveyContents = (
  surveyNo: number
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
    topOptionFont = '/images/font_type_1.jpg';
    bottomOptionFont = '/images/font_type_2.jpg';
  } else if (surveyNo === 2) {
    description = '16강 2/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 3) {
    description = '16강 3/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 4) {
    description = '16강 4/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 5) {
    description = '16강 5/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 6) {
    description = '16강 6/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 7) {
    description = '16강 7/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 8) {
    description = '16강 8/8';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 9) {
    // 8강 1/4
    description = '8강 1/4';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 10) {
    description = '8강 2/4';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 11) {
    description = '8강 3/4';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 12) {
    description = '8강 4/4';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 13) {
    // 4강 1/2
    description = '4강 1/2';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else if (surveyNo === 13) {
    // 4강 2/2
    description = '4강 2/2';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  } else {
    // 결승 1/2
    description = '결승';
    topOptionFont = '/images/font_type_3.jpg';
    bottomOptionFont = '/images/font_type_4.jpg';
  }

  // bgColor, descriptionImg, bottomImg
  if (surveyNo <= 8) {
    titleBgColor = '#F5FFE4';
    descriptionImage = '/images/descriptionImg_16.png';
    bottomImg = '/images/bottomImg_16.png';
  } else if (surveyNo <= 11) {
    titleBgColor = '#FFEAF1';
    descriptionImage = '/images/descriptionImg_8.png';
    bottomImg = '/images/bottomImg_8.png';
  } else if (surveyNo <= 13) {
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
