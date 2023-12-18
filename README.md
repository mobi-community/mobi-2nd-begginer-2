### story book

프로젝트 진행 기간 : 20231213 ~ 20231220

---

[Pair-4(Amy, kimi) checkList!] <br/>
https://lyrical-brain-e0f.notion.site/mobi-beginner-week-2-bb8596254a084efdb57619970ef39088

### 과제1 디자인 시스템을 활용한 공용 컴포넌트 만들기 --> ✅

본문 참조, 기존에 있던 것을 가져다가 쓰는 것이 아닌 스스로 디자인 토큰을 정의하고 반드시 디자인 토큰을 props로 전달 받아야합니다. 디자인 토큰만 전달했을 때 컴포넌트가 생산되도록..!!!

### 과제2 UI 인벤토리 만들기 --> 진행중

생성했던 공용 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 해보세요 ✅ <br/>
페이지네이션 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 해보세요

### 과제3 다양한 스타일 라이브러리를 활용하여 디자인 시스템 적용하기

본문참조, 다양한 스타일 라이브러리를 활용하여 공용 컴포넌트 만들기

### 과제4 UI 라이브러리 사용하여 컴포넌트 3개씩 사용해보기

---

2023.12.13(수)
재사용될 가능성이 있는 요소들을 공용컴포넌트로 만들어 디자인 시스템을 구축해 생산성 높은 환경을 구축해두었습니다.
프로젝트의 원활한 진행을 위해 같은 디자인이 적용된 요소들이 반복해서 나타나는 회원가입 폼을 피그마로 임의로 작업했습니다.
피그마에서 컴포넌트화될 요소들을 디자인 토큰 프레임 안에 모아두어 빠르게 theme.style.js 로 옮겨올 수 있었습니다.

<p align="center">
<p>design token</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/1b80108a-4209-4812-9c9f-75281768df35">
<p>간단하게 만든 회원가입 폼입니다.</p>
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/eef85e1e-2980-4681-a5b1-ed8c9480fa1f">
<img src="https://github.com/55555-Jyeon/admin-toggle-page/assets/134191817/43c65336-5e0f-48d9-959f-b24295868c0b">
</p>

```
가영 회고록)
피그마로 디자인을 미리하여, 빠르게 공용 css들을 만들 수 있었습니다.
하지만 Token Studio를 적용 후 피그마에 적용해야한다는 것을 디자인 후 알아차려,
다시 하기에는 너무 생산성이 저하될 거 같다는 생각을 하여 직접 옮겼습니다...^^
다음에는 Token Studio를 선! 적용 해보아야겠습니다.
피그마를 이용하면 리액트에서 핵심인 컴포넌트를 만들고, 구조를 미리 파악하는데에도 용이하여
규모가 커질수록 더 좋을 거 같다는 생각을했습니다.

주연 회고록)
이번에는 페이지가 하나인 간단한 프로젝트여서 피그마에서
따로 Token Studio 플러그인을 사용하지 않았지만 규모가 큰 프로젝트의 경우엔
이 플러그인을 사용하면 통일성 있는 디자인을 보다 효율적으로 진행할 수 있을 것 같습니다.
Token Studio 플러그인의 경우 보다 정확하고 신속하게 체계적으로
디자인을 진행이 가능할 것으로 보였기 때문에 추후에 꼭 써보고 싶습니다.
```

---

2023.12.14(목)

<p align="center">
<p>story book 설치 </br> figma에서 만든 component asset으로 만들어 적용 시도해보기</p>
<p>stories를 만들어 열심히 해봤지만 알 수 없는 error들이 !다양하게! 발생해 미처 완성하지 못함</p>
<img src="https://github.com/kiminn/mobi-2w/assets/134191815/9b68e69e-9b3b-4556-8f3f-35fd17e520da">
</p>
<p align="center">
<p>story book 설치 </br> figma에서 만든 component asset으로 만들어 적용 시도해보기</p>
<p>stories를 만들어 열심히 해봤지만 알 수 없는 error들이 !다양하게! 발생해 미처 완성하지 못함</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/15289d86-ec3f-4730-b7cb-5ab1f0ac31f9">
</p>

```
가영 회고록)
스토리북과 관련된 유튜브 영상.. 블로그들을 참고하여 열심히 적용시켜보았지만,
알 수 없는 오류들에 맞닥뜨렸습니다. (심지어 오류내용도 너무나도 불친절ㅋ)
이를 열심히 검색해보았지만, 자기들도 안된다고 한다는..?... 🤷‍♀️
버전차이로 안되는 것들도 있었는데,,,,,, 하나 해결하면 또 하나 오류나고.. 해결오류해결오류♾️♾️
충분한 시간을 썼고, 다음 번에 다시 시도...해볼..예정입니다...
어디서부터 잘못된 건지 (?)
이를 보완하여 다시 개념부분을 숙지하고 차근차근 해나가야겠습니다.
늘어난 건 나의 욕실력...!

주연 회고록)
한 줄 요약: 알 것 같은데 안 되는 부분이 너무 약오름
이론적으로는 분명 돼야 맞는 것 같은데 왜 안 되는지 모르겠고,
검색해봐도 해결 방법을 제대로 아는 사람이 없었습니다.
당황스러웠고 에러 내용을 복붙해서 검색해봤지만 결국 미결인 채로 끝났습니다.
아직 안 익숙해서 제대로 컨트롤을 못 하는 것 같아
좀 더 개인적으로 추가 공부 후 적용해봐야 할 것 같다는 결론을 내렸고
내일은 일단 머리를 식힐 겸 다른 스타일 라이브러리들부터 찬찬히 숙지해나갈 계획입니다..
아직도 왜 사용하지 않은 name과 displayName 관련 오류가 난 건지 모르겠습니다,,_^^_
```

---

2023.12.15(금)

<p align="left">
    전 날 storybook을 설치하면서 CRA 기본 파일(package.json, node_modules 폴더 등)이 손상되어 runtime과 react-refresh 관련 에러가 발생했습니다. <br/> 
    mobi 운영진 분들의 도움도 받아봤지만 약 세 시간 가량 해결하지 못하고 원인만 대략적으로 파악하게 되었습니다.
    새롭게 CRA를 만들어 다시 제작해 새로운 branch에 업로드했습니다. styled-components를 사용해 공용으로 사용되는 요소들 component로 설정해 디자인 적용 시작했습니다.
</p>

```
가영 참회록)
storybook..진행후.. runtime ? react-refresh???? error발생..ㅋ
🌷🌈peanut✨🌷님이 없었다면 아직도 헤매고 있었을지 모릅니다.
애꿎은 storybook을 신나게 욕한 후, 지웠다 깔았다하며 관련이 없었다는 것을 알게되었습니다.
package자체가 손상되었다는 것을 알게되어.. 새로운 파일을 생성했습니다.
그래서 2번 과감하게 나중으로 스킵..하고 디자인 시스템을 이용하여 공용 컴포넌트 만들기에 집중하고 있습니다.
button, input, select를 컴포넌트화하여 재사용하여서 간단한 회원가입 페이지 form을 만들어보았습니다.

주연 회고록)
한 줄 요약: 회고라기보단 storybook 참회록
storybook 관련 에러인줄 알고 라이브러리를 싫어할 뻔 했습니다.
역시 좋은 라이브러리인 거겠죠..^^ {* kimi: ???????????네?🤷‍♂️ *}
3번 과제를 마저 진행하고 나면 다시 새로운 마음으로 storybook을 공부해봐야겠습니다.
기대되네요, 정말 ^__^ git이야말로 잘 되다가도 오류를 내뱉는 친구였어요. 협업할 때는 더욱 더 조심 또 조심...
styled-components로 요소들을 컴포넌트화하는 부분은 프로젝트 진행하면서도 해봤던 부분이라 익숙했는데
밑에 새로운 라이브러리들은 뭐가 다른지, 어떻게 컴포넌트화해야 styled-components처럼 편리할지 궁금합니다. 얼른 .. 학습.. 기대돼..
```

---

2023.12.16(토)

<p align="center">
<p>figma에 적용된 화면 사이즈(1920px)에 맞춰 styled-components로 요소들을 컴포넌트화해 css 적용했습니다.</p>
<p>1920px 기준에 맞게만 디자인이 되어 있으며 미디어쿼리까지는 진행되어 있지 않습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/15289d86-ec3f-4730-b7cb-5ab1f0ac31f9">
</p>

<p align="center">
<p>생성했던 공용 컴포넌트를 스토리북을 활용하여 UI 인벤토리화 완료</p>
<p>init 후 args, parameters로 재사용 가능한 요소들 전역 component화했습니다. 페이지네이션은 진행 중...</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/9840dbe0-245b-4f23-ac08-7c002ccc09fd" alt="storybook-button">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/d39f665b-f39e-47c6-b709-4d59b1950c2a" alt="storybook-input">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/12490601-e345-4f02-bc7b-1e36b0b0a8d8" alt="storybook-select">
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/c4111a1a-9217-4bd9-b14b-ef4f92b1bbd0" alt="storybook-sns-icon">
</p>

```

가영 회고록)
storybook의 장점은 알겠으나, 자료가 많지 않아서 그런지 만들기가 수월하진 않았습니다...
특히 img 가져오는 경로가 계속 잘못됐다고 뜨는데, 하나씩 가져오기는 어떻게하는지 알겠음.
하지만 나름 효율적으로 select box에서 짠짠짠! 보여주기를 하고싶었기에...😇
어쨌든 해냈습니다 😇 별 거 아닌 거였어서 허탈하긴하지만,ㅠ 원래 다 그런거죠 뭐!
해결 안됐으면 화나서 잠을 못잘뻔... Amy님과 함께라서 그 시간까지 그래도 포기하지않고
해낼 수 있었던 거 같습니다! (* css 부분도 많이 배우는중..!)
확실히 storybook은 여러가지 컴포넌트를 직관적으로 변경하고, 관리하기에 용이해서
규모가 큰 프로젝트나 회사에서 디자이너와 협업하기에 유용하겠다는 생각이 들었습니다.
확실히 협업하는 데에 있어서 큰 장점이 될 거 같으니, 익숙해져봐야겠습니다!




주연 회고록)
한 줄 요약: storybook에서 component 만드는 건 good, 이미지 가져오기가 .......
규모가 큰 프로젝트의 경우, storybook을 사용하게 되면 확실히 디자이너와 협업할 때 빛을 발할 것 같습니다.
단순히 figma에 design-token frame을 만들어 두고 코드를 옮겼을 때보다 수월했습니다.
그리고 component들이 코드로 구현됐을 때 어떻게 보이는지, 나아가 page에 적용됐을 때의 모습도 보여줄 수 있어서
매번 vsCode를 통해 보여줄 필요가 없다는 점도 편할 것 같아요.
버전이 최근에 7로 업데이트 되면서 참고할 수 있는 블로그가 없어 공식페이지에 없는 내용들은 구현하는데 시간이 더 걸렸지만
그래도 페어와 포기하지 않고 매달려서.. 결국 해결했기 때문에 값진 시간이었습니다 😌✨


```

---

2023.12.17(일)

<p align="center">
<p>refresh day</p>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/4099ae02-3f7a-45da-bac8-a26b8ba8abdc" alt="happy-birthday">
</p>

```

가영 한줄평) 잘 쉬었습니다!! ⬇️ 감사 >__<🙇‍♀️

주연 한줄평) 🎀 가영님 생일축하 >__< 🎉

```

---

2023.12.18(월)

<p align="center">
<p>처음에 main branch에서 pull을 받아오지 않아 새로운 branch 생성했습니다.</p>
<p>git commit을 가져오려고 cherry-pick 사용해봤으나 과거 시점에서 생성되는게 아니라 최근에 commit 내역만 가져와졌습니다.</p>
<p>그래서 아래 commit 내역을 캡쳐해 첨부합니다.</p>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/f277dbb9-40cf-4c05-964d-da459f55d3bb" alt="git-commit">
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/134191815/96168b9f-fe73-4865-bf1b-02a6e9d35f5e" alt="git-commit">
<p>storybook으로 만들었던 component들 디테일한 부분 완료했습니다.</p>
<p>아이콘의 경우 처음에 이미지가 깨져 보이는 것을 방지하기 위해 default 이미지를 추가했습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/f8029bb2-3a3f-4d3f-8b48-ab3c42f57458" alt="icon">
<p>storybook으로 pagination 부분 component로 만들었습니다.</p>
<img src="https://github.com/55555-Jyeon/story-book/assets/134191817/828bd961-d195-424c-babe-3854837f0167" alt="pagination">
</p>

```

가영 회고록)
main에서 pull을 안받았던 나.. 반성.. 결국 4/3까지 생성 했습니다.
main에서 clone먼저하기! 공식문서 보기!아무거나 막 삭제하지않기!
금일 button 속 icon이미지를 select로 변경하고, pagination을 적용했습니다.
그 과정에서 조금 더 storybook의 컴포넌트에 대한 이해나
className으로 접근하는 방법에 대해서 숙지를 할 수 있었습니다.
react-router-dom을 스토리북에 적용시키는 거는 공식문서로 어느정도 확인을했지만,
아직은 원하는대로 useSearchParam을 queryString type으로 가져오는 부분이
부분이 좀 미숙한 거 같습니다. 후에 다시 공부 후 시도해보고싶습니다.!


주연 회고록)
storybook 관련 과제 금일 완성했습니다.
select와 button의 children에 해당하는 내용 추가하고 pagination component화하기 완료했습니다.
useSearchParams()도 적용해보려고 storybook-react-router를 시도해봤으나.. 실패했습니다ㅠ
router 관련된 부분은 storybook에서 어떻게 사용하는거지..? 공식문서를 좀 더 면밀히 살펴봐야 하는건지..
(https://storybook.js.org/addons/storybook-addon-react-router-v6)
우선은 남은 과제부터 먼저 완료하기 위해 미뤄둘 예정이고
회원가입 페이지 부분도 나중에 storybook page 컴포넌트로 구현해보고 싶습니다..!


주현 회고록)
- 늦은 합류로 이전 코드 복기 중 -



```

---

2023.12.19(화)

- storybook : pagination 만들기
- style 라이브러리와의 차이점을 명확히 구분하기

<p>tailwind 진행 중</p>

```
// 변환다시하기 할머니속도라...


가영 회고록)

주연 회고록)

주현 회고록)


```

---

2023.12.20(수)

<p>style 라이브러리 구분 기준</p>

- 재사용성: 컴포넌트화하기 용이한지, 다양한 상황이나 환경에서도 호환성이 좋은가
- 생산성: 얼마나 많은 기능을 지원해주는가, 커스텀이 용이한가
- 접근성: 이 라이브러리를 모르는 상황에서 금방 습득할 수 있는지 + 얼마나 많은 브라우저와 프레임워크를 지원하는지

| 라이브러리명      | 재사용성 | 생산성  | 접근성  | 유일무이한 특징 |
| ----------------- | -------- | ------- | ------- | --------------- |
| tailwind-css      | 테스트2  | 테스트3 | 테스트4 | 테스트5         |
| panda-css         | 테스트2  | 테스트3 | 테스트4 | 테스트5         |
| styled-components | 테스트2  | 테스트3 | 테스트4 | 테스트5         |
| emotion           | 테스트2  | 테스트3 | 테스트4 | 테스트5         |

```

가영 회고록)

주연 회고록)

주현 회고록)

```

tailwind 적용해보았습니다.
