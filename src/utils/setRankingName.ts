const setRankingName = (type: string): string => {
  if (type === 'font_type_1') {
    return '활발한 합리주의자';
  } else if (type === 'font_type_2') {
    return '현실적인 즉흥주의자';
  } else if (type === 'font_type_3') {
    return '보수적인 자유주의자';
  } else if (type === 'font_type_4') {
    return '절제하는 탐구주의자';
  } else if (type === 'font_type_5') {
    return '융통적인 기회주의자';
  } else if (type === 'font_type_6') {
    return '열정적인 이타주의자';
  } else if (type === 'font_type_7') {
    return '정이많은 보수주의자';
  } else if (type === 'font_type_8') {
    return '호의적인 자기주의자';
  } else if (type === 'font_type_9') {
    return '반성하는 선택주의자';
  } else if (type === 'font_type_10') {
    return '질서정연한 청렴주의자';
  } else if (type === 'font_type_11') {
    return '사교적인 예민주의자';
  } else if (type === 'font_type_12') {
    return '성실한 냉소주의자';
  } else if (type === 'font_type_13') {
    return '저항하는 감성주의자';
  } else if (type === 'font_type_14') {
    return '저돌적인 직관주의자';
  } else if (type === 'font_type_15') {
    return '섬세한 공상주의자';
  } else {
    return '의존하는 평등주의자';
  }
};

export default setRankingName;
