import { ResultContent } from '../types/resultContet';
export const setResultContents = (type: string): ResultContent => {
  switch (type) {
    case 'font_type_1':
      return {
        mainColor: '#AFBC8F',
        logoImage: '/images/result_raccon.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘활발한 합리주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_hamster.jpeg',
        likeDescription: (
          <div>
            사랑스러운 협동가
            <br /> 말랑말랑 햄찌
          </div>
        ),
        likeLinkUrl: '/result/hamster',
        dislikeImageUrl: '/images/result_fox.jpeg',
        dislikeDescription: (
          <div>
            여유로운 휴식가 <br />
            말랑말랑 여우리
          </div>
        ),
        dislikeLinkUrl: '/result/fox',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [10, 20, 50, 70, 90],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_2':
      return {
        mainColor: '#87504B',
        logoImage: '/images/result_fox.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘현실적인 즉흥주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_bear.jpeg',
        likeDescription: (
          <div>
            푸근한 대인배
            <br /> 말랑말랑 곰쥬
          </div>
        ),
        likeLinkUrl: '/result/bear',
        dislikeImageUrl: '/images/result_raccon.jpeg',
        dislikeDescription: (
          <div>
            호기심 많은 연구자
            <br /> 말랑말랑 너부리
          </div>
        ),
        dislikeLinkUrl: '/result/raccon',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [60, 90, 70, 30, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_3':
      return {
        mainColor: '#FFA985',

        logoImage: '/images/result_dog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘보수적인 자유주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_rabbit.jpeg',
        likeDescription: (
          <div>
            개성강한 힙스터
            <br /> 말랑말랑 토토
          </div>
        ),
        likeLinkUrl: '/result/rabbit',
        dislikeImageUrl: '/images/result_bear.jpeg',
        dislikeDescription: (
          <div>
            푸근한 대인배
            <br /> 말랑말랑 곰쥬
          </div>
        ),
        dislikeLinkUrl: '/result/bear',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [70, 20, 10, 30, 50],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_4':
      return {
        mainColor: '#DF724B',

        logoImage: '/images/result_bear.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘절제하는 탐구주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_fox.jpeg',
        likeDescription: (
          <div>
            여유로운 휴식가
            <br /> 말랑말랑 여우리
          </div>
        ),
        likeLinkUrl: '/result/fox',
        dislikeImageUrl: '/images/result_dog.jpeg',
        dislikeDescription: (
          <div>
            만인의 에너자이저
            <br /> 말랑말랑 멍무이
          </div>
        ),
        dislikeLinkUrl: '/result/dog',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [10, 60, 20, 40, 90],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_5':
      return {
        mainColor: '#87CBC5',

        logoImage: '/images/result_cow.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘융통적인 기회주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_hedgehog.jpeg',
        likeDescription: (
          <div>
            고독한 사색가
            <br /> 말랑말랑 고슴이
          </div>
        ),
        likeLinkUrl: '/result/hedgehog',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [50, 50, 20, 80, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_6':
      return {
        mainColor: '#FDAAC5',
        logoImage: '/images/result_hamster.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘열정적인 이타주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_raccon.jpeg',
        likeDescription: (
          <div>
            호기심 많은 연구자
            <br /> 말랑말랑 너부리
          </div>
        ),
        likeLinkUrl: '/result/raccon',
        dislikeImageUrl: '/images/result_rabbit.jpeg',
        dislikeDescription: (
          <div>
            개성강한 힙스터
            <br /> 말랑말랑 토토
          </div>
        ),
        dislikeLinkUrl: '/result/rabbit',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [40, 60, 70, 90, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_7':
      return {
        mainColor: '#DA9185',

        logoImage: '/images/result_rabbit.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘정이많은 보수주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_dog.jpeg',
        likeDescription: (
          <div>
            만인의 에너자이저
            <br /> 말랑말랑 멍무이
          </div>
        ),
        likeLinkUrl: '/result/dog',
        dislikeImageUrl: '/images/result_hamster.jpeg',
        dislikeDescription: (
          <div>
            사랑스러운 협동가
            <br /> 말랑말랑 햄찌
          </div>
        ),
        dislikeLinkUrl: '/result/hamster',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [10, 20, 70, 90, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_8':
      return {
        mainColor: '#959595',

        logoImage: '/images/result_cat.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘호의적인 자기주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자 <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_hedgehog.jpeg',
        dislikeDescription: (
          <div>
            고독한 사색가
            <br />
            말랑말랑 고슴이
          </div>
        ),
        dislikeLinkUrl: '/result/hedgehog',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [80, 10, 40, 90, 20],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_9':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘반성하는 선택주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [60, 30, 10, 80, 20],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_10':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘질서정연한 청렴주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [10, 30, 70, 60, 90],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_11':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘사교적인 예민주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [90, 20, 40, 70, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_12':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘성실한 냉소주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [90, 20, 30, 40, 90],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_13':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘저항하는 감성주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [10, 40, 70, 90, 20],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_14':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘저돌적인 직관주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [20, 30, 90, 50, 90],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_15':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘섬세한 공상주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [70, 90, 50, 40, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    case 'font_type_16':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘의존하는 평등주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [20, 30, 70, 90, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
    default:
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        fontTitle: (
          <div>
            <div>"</div>
            <div>모아서 효율적으로 일하는게 최고야</div>
            <div>"</div>
          </div>
        ),
        fontCharacter: (
          <div>
            [ 당신은 <span>‘의존하는 평등주의자'</span> 입니다. ]
          </div>
        ),
        fontDescription: (
          <div>
            당신은 인지력이 뛰어난 사람입니다.
            <br />
            <br />
            그래서 쉽게 감정을 드러내지 않고,
            <br /> 어디서든 적응을 잘하기 때문에
            <br />
            주변 사람들과 잘 어울리지요.
            <br />
            <br />
            그러다 보니
            <br /> 사람들이 주변에 자연스럽게 모이게 됩니다.
            <br />
            <br /> 여기서 끝이 아니라
            <br /> 모아진 사람들과 함께
            <br /> 일을 체계적으로 처리할 수 있어요.
            <br /> 낭비를 절대 만들지 않고,
            <br /> 개개인에게 합당하게 일을 줄 수 있거든요.
            <br />
            <br />
            그리고 과묵하고 겸손하기 때문에
            <br /> 주변에서는 믿음직한 사람으로 보아요.
            <br /> 모남없이 올 곧고,
            <br /> 지적인 당신은
            <br /> 만인의 사랑을 받는 사람입니다.
          </div>
        ),
        letterTitle: '당신을 위한 한마디',
        letter: (
          <div>
            너의 믿음은 너의 생각이 된다.
            <br />
            너의 생각은 너의 말이 된다.
            <br />
            너의 말은 너의 행동이 된다.
            <br />
            너의 행동은 너의 습관이 된다.
            <br />
            너의 습관은 너의 가치가 된다.
            <br />
            너의 가치는 너의 운명이 된다.
            <br />
            간디
          </div>
        ),
        letterImage: '/images/paper.png',
        likeImageUrl: '/images/result_cow.jpeg',
        likeDescription: (
          <div>
            차분한 평화주의자
            <br /> 말랑말랑 소소
          </div>
        ),
        likeLinkUrl: '/result/cow',
        dislikeImageUrl: '/images/result_cat.jpeg',
        dislikeDescription: (
          <div>
            은근한 최강자
            <br /> 말랑말랑 냠미
          </div>
        ),
        dislikeLinkUrl: '/result/cat',
        radarData: {
          labels: ['신경성', '창의성', '외향성', '우호성', '성실성'],
          datasets: [
            {
              data: [20, 30, 70, 90, 10],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        resultTag: ['✏️ 자립심', '✏️ 손해안봄', '✏️ 원칙중시'],
      };
  }
};
