import { ResultContent } from '../types/resultContet';
export const setResultContents = (type: string): ResultContent => {
  switch (type) {
    case 'font_type_1':
      return {
        mainColor: '#AFBC8F',
        logoImage: '/images/result_raccon.jpeg',
        animalTitle: <div>당신은 ‘활발한 합리주의자' 입니다.</div>,
        animalSubTitle: '세상에는 흥미로운게 너무 많아!',
        animalDescription: (
          <div>
            <div>• 인지력이 뛰어나고 감정조절을 잘해서 어디서든 적응을 잘해요.</div>
            <div>• 노력하는 걸 중요하게 생각해요.</div>
            <div>• 다른 사람보다 높은 기억력을 가지고 있어요.</div>
            <div>• 합리적인걸 좋아하는 지적인 사람이예요.</div>
            <div>• 그만큼 속을 알 수 없고 다소 냉담한 면을 보이기도 해요.</div>
            <div>• 모남없이 올곧아서 규율과 도덕을 중요하게 생각해요.</div>
            <div>• 조금 신경질 적이예요.</div>
            <div>• 자립심이 강해요.</div>
            <div>• 주변 사람과 잘 어울려요.</div>
            <div>• 인심이 후해요.</div>
            <div>• 사람을 모으는 능력이 뛰어나고 체계적으로 운영할 수 있어요.</div>
            <div>• 과묵하고 겸손해요.</div>
            <div>• 주변에서 보기에 믿음직한 사람으로 보여요.</div>
            <div>• 조금 조급한 면이 있어요.</div>
          </div>
        ),
        letterTitle: '💌      너부리가 보내는 편지      💌',
        letter: (
          <div>
            요즘 네가 가장 관심 있는 게 뭐야?
            <br />
            나는 요즘 솜사탕을 깨끗하게 씻어 먹는 방법에 대해서 고민중이야. 물로 닦아내도 순식간에
            사라져버리더라고! 그래서 여러 친구와 만나서 아이디어를 얻고 있어.
            <br />
            가끔 친구들이 나에게 말해.
            <br />
            '너는 궁금한 게 왜 이리 많아?'라고 말이지.
            <br />
            나도 내가 궁금한 게 왜 많은지는 찾지 못했어.
            <br />
            그렇지만 남들과 달라서 좋은 점은
            <br /> '내 방식대로 세상을 바라보는 시선'이 생겼다는 거야.
            <br /> 내가 나로 있을 때 가장 행복한 것 같아. 너도 그렇지?
            <br /> 나답게 너답게 우리답게 즐겁게 삶을 살아가 보자.
            <br /> 안녕!
          </div>
        ),
        letterImage: '/images/result_paper_raccon.jpeg',
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
      };
    case 'font_type_2':
      return {
        mainColor: '#87504B',
        logoImage: '/images/result_fox.jpeg',
        animalTitle: <div>당신은 ‘현실적인 즉흥주의자'입니다.</div>,
        animalSubTitle: '급할 필요 있어? 천천히 가자',
        animalDescription: (
          <div>
            <div>• 어디서든 적응을 잘해요.</div>
            <div>• 현실적인 면이 있어요.</div>
            <div>• 자신의 감정을 잘 표현하지 않아요.</div>
            <div>• 타인에 대한 공감능력이 풍부해요.</div>
            <div>• 잦은 충돌이나 스트레스를 피하려고 해요.</div>
            <div>• 자제력이 뛰어나요.</div>
            <div>• 조금 이기적인 면이 있어서 팀워크와 맞지는 않아요.</div>
            <div>• 즉흥적으로 행동해요.</div>
            <div>• 어디로 튈지 모르는 매력을 가지고 있어요.</div>
            <div>• 그렇기 때문에 행동을 예측하기가 가장 어려워요.</div>
            <div>• 예민해요.</div>
            <div>• 동정심이 많아요.</div>
            <div>• 자신의 영역을 잘 파악해요</div>
          </div>
        ),
        letterTitle: '💌      여우리가 보내는 편지      💌',
        letter: (
          <div>
            차 한잔하기 좋은 날이다.그렇지?
            <br />
            요즘 친구들 너무 바쁘게 사는 거 같지 않아?
            <br /> 꼭 그렇게 서두르지 않아도 될 거 같은데 말이지.
            <br />
            나만의 페이스를 유지하고
            <br /> 하고자 하는 일을 준비한다면
            <br />
            꼭 이뤄낼 수 있을 거야.
            <br /> 남들보다 좀 느리면 어때?
            <br /> 내가 행복한 게 가장 중요한걸.
            <br />
            난 경쟁이 싫어. 걸어가면서 주변에 꽃도 보고, 하늘도 보고, 좋아하는 음식도 먹으면서
            <br /> 잔잔한 호수처럼 지내고 싶어. 너도 그렇지?
            <br /> 나만의 속도로 천천히, 천천히, 삶을 음미해보자. 좋은 하루 보내.
          </div>
        ),
        letterImage: '/images/result_paper_fox.jpeg',
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
      };
    case 'font_type_3':
      return {
        mainColor: '#FFA985',

        logoImage: '/images/result_dog.jpeg',
        animalTitle: <div>당신은 ‘보수적인 자유주의자' 입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 사생활 보호를 중요하게 생각해요.</div>
            <div>• 돈을 잘 절약해요.</div>
            <div>• 목표지향적 성향을 가지고 있어서 단시간 안에 업무 수행이 가능해요.</div>
            <div>• 내성적이고 예민해요.</div>
            <div>• 독립적이고, 자유를 중시하는 경향이 있어요.</div>
            <div>• 열정적이고 체계적이에요.</div>
            <div>• 사람을 모으는 체계적으로 운영할 수 있어요.</div>
            <div>• 새로운 환경에 스트레스를 받기도 하지만 적응을 잘해나가요.</div>
            <div>• 원칙적인 면이 있어 다소 보수적인 성향을 가지고 있어요.</div>
            <div>• 집중력이 뛰어나요.</div>
            <div>• 생각의 여유가 있고 유머러스해요.</div>
            <div>• 자신의 영역을 잘 파악해요</div>
          </div>
        ),
        letterTitle: '💌      멍무이가 보내는 편지      💌',
        letter: (
          <div>
            안녕? 만나서 반가워.
            <br />
            나는 너와 닮은 멍무이라고 해.
            <br /> 요즘 어떻게 지내? 난 늘 새로운 오늘을 살고 있어.
            <br />
            어떤 사람을 만날지,
            <br /> 어떤 대화를 할지 새로운 것이 넘쳐나잖아!
            <br />
            가끔 다른 친구들로 인해서 상처받는 날도 오지만, 서로 다르기 때문에 그런 거라 생각하고
            받아들이고 있어.
            <br /> 누군가를 싫어하고 미워하는 거보다는 친구를 있는 그대로 좋아할 때 힘이 나는 것
            같아!
            <br /> 너도 그렇지? <br />늘 즐겁고, 행복한 하루를 보내길 바랄게.
            <br /> 응원해 멍멍!
          </div>
        ),
        letterImage: '/images/result_paper_dog.jpeg',
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
      };
    case 'font_type_4':
      return {
        mainColor: '#DF724B',

        logoImage: '/images/result_bear.jpeg',
        animalTitle: <div>당신은 ‘절제하는 탐구주의자'입니다.</div>,
        animalSubTitle: '괜찮아. 누구든 실수할 수 있어.',
        animalDescription: (
          <div>
            <div>• 독립적이라서 개인의 자유를 중요하게 생각해요.</div>
            <div>• 자립심이 강해요.</div>
            <div>• 감정 조절을 잘해요.</div>
            <div>• 인지력이 좋아서 기억력이 매우 좋아요.</div>
            <div>• 자제력이 있어요.</div>
            <div>• 이기적인 면이 있어서 팀워크랑 잘 맞지 않을 수 있어요.</div>
            <div>• 속내를 잘 드러내지 않아요.</div>
            <div>• 후한 인심을 가지고 있어요.</div>
            <div>• 집중력이 뛰어나요.</div>
            <div>• 꼼꼼해요.</div>
            <div>• 내성적인 면이 있어요.</div>
            <div>• 새로운 환경에 잘 적응해요</div>
            <div>• 성실해요.</div>
            <div>• 자신의 영역을 잘 파악해요</div>
          </div>
        ),
        letterTitle: '💌      곰쥬가 보내는 편지      💌',
        letter: (
          <div>
            반가워. 너는 친구를 어떻게 생각하니?
            <br />
            나에게 친구란 하나의 책과도 같아.
            <br />
            각자 다른 이야기가 있고
            <br /> 그걸 들을 때 이런 삶도 있다는 걸 느껴.
            <br />
            그래서 누구도 쉽게 싫어할 수 없는 거 같아.
            <br />
            완벽한 사람은 없으니까.
            <br /> 그래서 친구들이 나에게 고민을
            <br /> 자주 털어놓는 거 같아.
            <br /> 있는 그대로의 자신을 존중해주니까.
            <br /> 나도 흥미롭고 좋아.
            <br /> 그렇지만 내 페이스는 꼭 유지하고 있어.
            <br /> 우리 어떤 순간에서든 자신을 잃지는 말자.
            <br /> 그리고 친구들을 변함없이 아끼고 좋아하자. 응원할게!
          </div>
        ),
        letterImage: '/images/result_paper_bear.jpeg',
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
      };
    case 'font_type_5':
      return {
        mainColor: '#87CBC5',

        logoImage: '/images/result_cow.jpeg',
        animalTitle: <div>당신은 ‘융통적인 기회주의자' 입니다.</div>,
        animalSubTitle: '난 변치 않아.',
        animalDescription: (
          <div>
            <div>• 열정적으로 무언가를 해내려고 해요.</div>
            <div>• 주변 상황에 예민하게 반응해요.</div>
            <div>• 자제력이 뛰어나요.</div>
            <div>• 이기적인 면이 있어요.</div>
            <div>• 속내를 잘 드러내지 않아요. 그래서 팀워크가 맞지 않을 수 있어요.</div>
            <div>• 필요할 때는 체계적으로 움직여요.</div>
            <div>• 자립심이 강해서 혼자서 해내려는게 많아요.</div>
            <div>• 인심이 후할 때는 한 없이 후해요.</div>
            <div>• 차분하고 흔들림이 없어요.</div>
            <div>• 자신에게는 혹독하지만 타인에게는 관대해요.</div>
            <div>• 종종 자제력을 잃고 충동적으로 행동해요.</div>
            <div>• 직관적인 것에 의존해요.</div>
            <div>• 영리해요.</div>
            <div>• 자신의 영역을 잘 파악해요.</div>
            <div>• 자기중심 적이에요.</div>
          </div>
        ),
        letterTitle: '💌     소소가 보내는 편지      💌',
        letter: (
          <div>
            ....안녕? 오늘도 하늘이 참 맑다.
            <br />
            그래서 산책을 다녀왔는데, 길가에 꽃이 활짝폈어.
            <br />
            나비도 날아다니고
            <br /> 바람도 산들산들 불어서 기분이 참 좋더라.
            <br />
            포근한 풍경이 너무 좋아서 <br />
            나도 모르게 한참을 걸어버렸어.
            <br />
            그러다 보니까 문득 네가 생각났어.
            <br /> 요즘 힘들다고 했잖아.
            <br /> 그래서 내가 최근 보았던 풍경에 대해서 말해봤어.
            <br /> 마음이 편안해지고 잡생각이 사라지더라.
            <br /> 오늘 하루도 최선을 다하자. 늘 잘해왔듯이.
          </div>
        ),
        letterImage: '/images/result_paper_cow.png',
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
      };
    case 'font_type_6':
      return {
        mainColor: '#FDAAC5',
        logoImage: '/images/result_hamster.jpeg',
        animalTitle: <div>당신은 ‘열정적인 이타주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 영리한 면이 있어요.</div>
            <div>• 다혈질 적 성향이 있지만 드러내지 않아요.</div>
            <div>• 나에게는 가혹하지만 타인에게는 관대해요.</div>
            <div>• 열정적이예요.</div>
            <div>• 예민해요.</div>
            <div>• 사회성이 좋아요.</div>
            <div>• 감정을 주체하기 어려워해요.</div>
            <div>• 관계의 맺고끊음을 어려워해요.</div>
            <div>• 판단력이나 자의식이 부족해요.</div>
            <div>• 빠르게 정보를 습득하는 능력이 있어요.</div>
            <div>• 즉흥적이어서 임기응변에 강해요.</div>
            <div>• 자요로운 성향을 가지고 있어요</div>
            <div>• 남에게 인정받는걸 중요하게 생각해요.</div>
            <div>• 일보다는 인간을 중요시해요</div>
          </div>
        ),
        letterTitle: '💌         햄찌가 보내는 편지       💌',
        letter: (
          <div>
            우리 같이 해바라기 씨 가지러 가지 않을래?
            <br />
            최근에 혼자 돌아다니다가
            <br /> 해바라기밭을 발견했지 뭐야.
            <br />
            그래서 혼자서 씨를 들고 오려고 했는데
            <br /> 볼주머니가 터질 거 같아서 못 했어.
            <br />
            같이 가면서 어떻게 지냈는지 알려줘.
            <br /> 한동안 연락이 없었잖아.
            <br />
            말 못하는 거라면 굳이 말하지 않아도 돼.
            <br /> 만약 말하게 되더라도 걱정하지 마.
            <br /> 비밀 완전 보장! 알지?
            <br /> 기다리고 있을게. 연락해줘! 오늘도 힘내자!
          </div>
        ),
        letterImage: '/images/result_paper_hamster.jpeg',
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
      };
    case 'font_type_7':
      return {
        mainColor: '#DA9185',

        logoImage: '/images/result_rabbit.jpeg',
        animalTitle: <div>당신은 ‘정이많은 보수주의자'입니다.</div>,
        animalSubTitle: '철저한 자기관리는 필수지!',
        animalDescription: (
          <div>
            <div>• 여러 사람과 어울리는 것을 즐겨요.</div>
            <div>• 외로운 것을 싫어해요.</div>
            <div>• 자기만의 시간을 가지는 거 보다 같이 있는걸 즐겨요.</div>
            <div>• 자기 중심적인 성향이 있어요.</div>
            <div>• 창의적이고 예술적이에요.</div>
            <div>• 다른사람과 충돌하기 싫어해요.</div>
            <div>• 낙관적이에요</div>
            <div>• 동료와 사이가 좋아요.</div>
            <div>• 분위기 메이커에요.</div>
            <div>• 유머러스해요</div>
            <div>• 여유가 있어요</div>
            <div>• 주의력이 높아요.</div>
            <div>• 보수적이에요.</div>
            <div>• 사회성이 좋아요.</div>
            <div>• 감정 주체가 어려워요.</div>
            <div>• 관계를 맺고 끊기 어려워해요.</div>
            <div>• 자의식이 강해요.</div>
            <div>• 욕심을 부리지 않아요.</div>
            <div>• 자기 주장이 약해요.</div>
            <div>• 부드러운 대화능력을 가지고 있어요.</div>
          </div>
        ),
        letterTitle: '💌     토토가 보내는 편지     💌',
        letter: (
          <div>
            요즘 나는 바쁘게 지내고 있어.
            <br />
            할 일이 많아졌거든. 그래서 연락을 자주 못했어.
            <br />
            일하고 자고.. 계속 반복하다보니
            <br /> 시간이 어떻게 흘러갔는지도 모르겠네.
            <br />
            넌 어떻게 지냈어? 우리 한 번 만나야지.
            <br />
            바빠도 이해해.
            <br /> 나는 너가 잘 되는게 좋고,
            <br /> 우리는 언제든 만날 수 있으니까 걱정하지마.
            <br />
            시간 될 때 연락줘. 우리 자주 가는 단골집 있잖아.
            <br /> 거기가서 당근 스프랑 주스 마시자.
            <br />
            스트레스 관리 잘 하고 건강한 모습으로 보자.
          </div>
        ),
        letterImage: '/images/result_paper_rabbit.jpeg',
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
      };
    case 'font_type_8':
      return {
        mainColor: '#959595',

        logoImage: '/images/result_cat.jpeg',
        animalTitle: <div>당신은 ‘호의적인 자기주의자'입니다.</div>,
        animalSubTitle: '나를 귀찮게 하지마.',
        animalDescription: (
          <div>
            <div>• 여러사람과 어울리는 것을 즐겨요.</div>
            <div>• 외로움 타는 걸 싫어해요.</div>
            <div>• 자기만의 신념과 원칙이 있어요.</div>
            <div>• 자기중심적 성향이 있어요.</div>
            <div>• 다른 사람과의 충돌을 싫어해요.</div>
            <div>• 감정조절을 잘해요.</div>
            <div>• 인지력이 뛰어나 기억력이 좋아요.</div>
            <div>• 포커페이스를 잘해요.</div>
            <div>• 엄격하고 고지식한 면이 있어요.</div>
            <div>• 과시욕이 있어요.</div>
            <div>• 관대한 면이 있어요.</div>
            <div>• 열정적이에요.</div>
            <div>• 완전 외향적이지도 내향적이지도 않아요.</div>
          </div>
        ),
        letterTitle: '💌     냠미가 보내는 편지     💌',
        letter: (
          <div>
            하루종일 집에서만 있다 보니까
            <br /> 시간 가는 줄 몰랐어.
            <br />
            혼자서 할 게 너무 많아.
            <br />
            노래도 듣고, 책도 읽고,
            <br /> 게임도 하고, 요리도 하고 등등
            <br />
            너도 그렇지?
            <br /> 친구들은 안 만나냐고?
            <br />
            알잖아.
            <br /> 친구들이 좋긴 한데 가끔 만나야 좋은 거 같아.
            <br /> 그 이상은 뭔가 피곤하고 귀찮을 때가 종종 있어.
            <br /> 나한테는 내 시간이 가장 중요해서 말이지~
            <br /> 우리 너무 신경을 쓰지 말자.
            <br /> 연락할 사람은 연락하게 돼 있잖아?
            <br /> 나만의 시간을 즐기자고.
          </div>
        ),
        letterImage: '/images/result_paper_cat.jpeg',
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
      };
    case 'font_type_9':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘반성하는 선택주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 내향적 성향이에요.</div>
            <div>• 자기 자신을 많이 돌아보고 생각해요.</div>
            <div>• 타인보다는 ‘나'를 중요하게 생각해요.</div>
            <div>• 현실적이에요.</div>
            <div>• 자신의 감정을 잘 표현하지 않아요</div>
            <div>• 타인에 대한 공감능력이 풍부해요.</div>
            <div>• 잦은 충돌이나 스트레스를 피하려고 해요.</div>
            <div>• 여러사람과 어울리는 것을 즐겨요. 외로운 것을 싫어해서요.</div>
            <div>• 낙관적이에요.</div>
            <div>• 사람들과 사이가 좋아요</div>
            <div>• 종종 분위기 메이커가 되어요 (선택적)</div>
            <div>• 자제력이 있어요.</div>
            <div>• 종종 엄격하고 고지식한 면을 발견하기도 해요</div>
            <div>• 자기 주정이 강하지 않아요</div>
            <div>• 욕심을 많이 부리지 않아요</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_10':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘질서정연한 청렴주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 질서를 잘 지켜요 그래서 규율과 도덕을 중시해요.</div>
            <div>• 독립적이에요.</div>
            <div>• 여러사람과 어울리는걸 좋아해요</div>
            <div>• 외로운 것을 싫어해요</div>
            <div>• 낙관적이에요</div>
            <div>• 동료와 사이가 좋아요 종종 분위기 메이커가 되어요</div>
            <div>• 자제력이 뒤어나요</div>
            <div>• 이기적인 면이 있어요</div>
            <div>• 속내를 잘 드러내지 않아요</div>
            <div>• 고지식한 면이 있어요</div>
            <div>• 사회성이 좋아요</div>
            <div>• 관계의 맺고 끊음을 어려워 해요</div>
            <div>• 조용하고 빈틈이 없어요.</div>
            <div>• 자기 고집이 있어요.</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_11':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘사교적인 예민주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 여러사람들과 어울리는 것을 즐겨요</div>
            <div>• 종종 충동적이에요</div>
            <div>• 시간관리에 약해요</div>
            <div>• 외로운걸 싫어해요</div>
            <div>• 자기중심적이에요</div>
            <div>• 열정적이에요</div>
            <div>• 예민해요</div>
            <div>• 주위에 친구가 많아요</div>
            <div>• 따뜻하고 열린 마음의 소유자에요</div>
            <div>• 자신감이 넘치고 활기차요</div>
            <div>• 시작한걸 마무리 짓기 힘들어해요</div>
            <div>• 소심한 면도 있어요</div>
            <div>• 감정 관리가 어려울 때가 있어요</div>
            <div>• 맺고 끊는걸 어려워해요</div>
            <div>• 고지식한 면이 있어요</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_12':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘성실한 냉소주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 올곧아요</div>
            <div>• 냉담한 면이 있어요</div>
            <div>• 신경질 적이예요</div>
            <div>• 포커페이스를 잘해요</div>
            <div>• 과묵하고 겸손해요</div>
            <div>• 규율과 도덕을 중시해요</div>
            <div>• 인지력이 뛰어나요</div>
            <div>• 높은 기억력을 가졌어요</div>
            <div>• 욕심부리지 않아요</div>
            <div>• 소수의 사람과 어울리는 것을 좋아해요</div>
            <div>• 외로운건 싫지만 매일 약속이 있는 건 싫어해요.</div>
            <div>• 영리해요</div>
            <div>• 자신에게 혹독해요</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_13':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘저항하는 감성주의자' 입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 여러사람과 어울리는 것을 좋아해요</div>
            <div>• 외로운걸 싫어해요</div>
            <div>• 틀에 갇힌 걸 싫어해요</div>
            <div>• 자기중심적이에요</div>
            <div>• 열정적이에요</div>
            <div>• 예민해요</div>
            <div>• 자제력이 뛰어나요</div>
            <div>• 이기적인 면이 있어요</div>
            <div>• 팀워크랑 맞지 않아요</div>
            <div>• 속내를 드러내지 않아요</div>
            <div>• 종종 충동적이에요</div>
            <div>• 염격하고 고지식해요</div>
            <div>• 인정욕구가 있어요</div>
            <div>• 자기애가 강해요.</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_14':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘저돌적인 직관주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 영리해요</div>
            <div>• 공격적인 성향을 억누르고 있어요</div>
            <div>• 자신에게 혹독하고 타인에게 관대해요</div>
            <div>• 참을성이 없어서 인내심이 약해요</div>
            <div>• 게으른 걸 싫어해요</div>
            <div>• 직관적으로 결정해요.</div>
            <div>• 인정욕구가 있어요</div>
            <div>• 열정적이고 활기하요</div>
            <div>• 즉흥적으로 행동해요.</div>
            <div>• 고지식한 면이 있어요.</div>
            <div>• 자시중심적이에요.</div>
            <div>• 친구를 소중하게 생각해요.</div>
            <div>• 새로운 만남에 거부감이 없어요.</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_15':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘섬세한 공상주의자’입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 창의적이고 예술적이에요</div>
            <div>• 충돌을 싫어해요</div>
            <div>• 여러사람들과 잘 어울려 지내요</div>
            <div>• 감수성이 풍부해요</div>
            <div>• 내면에 열정이 있어요</div>
            <div>• 내성적이에요</div>
            <div>• 종종 자기만의 세계에 빠져 지내요</div>
            <div>• 자기 주장이 약해요</div>
            <div>• 욕심을 많이 부리지 않아요.</div>
            <div>• 관계의 맺고끊음을 어려워해요.</div>
            <div>• 종종 감정에 너무 깊이 빠지고는 해요.</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    case 'font_type_16':
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘의존하는 평등주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 새로운 사람을 만나는 것에 거부감이 없어요.</div>
            <div>• 정서적이에요</div>
            <div>• 친구와 가족을 소중히 여겨요</div>
            <div>• 사람들과 어울리는 것을 즐겨요</div>
            <div>• 외로운걸 싫어해요</div>
            <div>• 다같이 있는걸 좋아해요.</div>
            <div>• 따뜻하고 열린 마음을 가지고 있어요</div>
            <div>• 활기넘쳐요</div>
            <div>• 시작한걸 마무리 짓는걸 힘들어해요</div>
            <div>• 주위에 친구가 많아요</div>
            <div>• 자신감이 넘쳐요</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
    default:
      return {
        mainColor: '#8E7C52',

        logoImage: '/images/result_hedgehog.jpeg',
        animalTitle: <div>당신은 ‘의존하는 평등주의자'입니다.</div>,
        animalSubTitle: '혼자있지 말고 나랑 같이 놀자!',
        animalDescription: (
          <div>
            <div>• 새로운 사람을 만나는 것에 거부감이 없어요.</div>
            <div>• 정서적이에요</div>
            <div>• 친구와 가족을 소중히 여겨요</div>
            <div>• 사람들과 어울리는 것을 즐겨요</div>
            <div>• 외로운걸 싫어해요</div>
            <div>• 다같이 있는걸 좋아해요.</div>
            <div>• 따뜻하고 열린 마음을 가지고 있어요</div>
            <div>• 활기넘쳐요</div>
            <div>• 시작한걸 마무리 짓는걸 힘들어해요</div>
            <div>• 주위에 친구가 많아요</div>
            <div>• 자신감이 넘쳐요</div>
          </div>
        ),
        letterTitle: '💌     고슴이가 보내는 편지      💌',
        letter: (
          <div>
            우리는 왜 생각할까? 무엇을 위해서 우리는 존재할까.
            <br />
            하늘에 물어보지만, 답을 찾을 수는 없는 것 같아.
            <br /> 그래서 계속 나만의 답을 찾아다니고 있어.
            <br /> 이런 생각을 누군가에게 말하기는 조심스럽더라고.
            <br />
            왜냐고 물어본다면….
            <br /> 나를 이해해주지 않을 거 같아서 그래.
            <br /> 난 혼자만의 생각이 너무 소중하고 중요하거든.
            <br />
            그리고 생각의 과정이 즐거워.
            <br /> 가끔 끝도 없는 고독함에 빠지기도 하지만
            <br /> 오히려 내가 존재하는 이유를 알려주기도 해.
            <br />
            너한테만은 말할 수 있을 거 같아서 이렇게 편지해.
            <br /> 어디서든 너를 응원하고 있을게. 기죽지 마.
          </div>
        ),
        letterImage: '/images/result_paper_hedgehog.jpeg',
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
      };
  }
};
