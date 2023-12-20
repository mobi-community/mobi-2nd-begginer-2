<img src="https://capsule-render.vercel.app/api?type=waving&color=dfbcf7&height=200&section=header&text=mobi-2th-begginer-2&fontSize=40&fontColor=FFFFFF" />

# 👥 Member
### Pair-1 - Levi, Rin

# 📑 Figma

<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/1582cbbe-a94f-4b0d-9da2-babf8c8579c6" width="300px"/></br>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/12bd8247-af6a-48cb-93d5-937e4708167a" width="600px"/></br>
<img src="https://github.com/mobi-community/mobi-2th-begginer-2/assets/127207625/86553807-0985-4c55-8697-3e5a8688ff96" width="600px"/>

# 📆 Develop Date 
### Develop: 2023.12.13 ~ 2023.12.20

| Date | Content |
| ------------ | ------------- |
| 12/13 | prettier/eslint 셋팅, css 토큰 생성  |
| 12/14 | 스토리북 설치  |
| 12/15 | 쉬는 날  |
| 12/16 | 쉬는 날  |
| 12/17 | 공용 컴포넌트 제작(button, input), 스토리 생성  |
| 12/18 | 공용 컴포넌트 제작(checkbox, tab, selectbox, pagination), 스토리 생성  |
| 12/19 | tailwind, emotion 컴포넌트 제작, UI 라이브러리 사용  |
| 12/20 | ReadMe 작성, panda css 시도   |
</br>

# 📌 style 라이브러리 장.단점

### tailwind-css
+ 장점</br>
  + 번들 사이즈가 작다.
  + css 요소 수준의 각 유틸리티 클래스를 제공하여 보다 쉽고 섬세하게 원하는 디자인을 구현할 수 있다.
  + css 사용을 위해서 네이밍을 하지 않아도 되고 커스텀 또한 쉽고 자유롭다.

+ 단점</br>
  + 요소에 스타일을 적용하기 위해 className에 값을 넣어주는 방식으로 코드가 복잡하고 가독성이 안좋다.
  + 처음 사용할때 각 클래스명을 익히느라 자주 문서를 참조해야 된다.(높은 문서 의존도)

### panda-css
+ 장점
  + 런타임에 스타일을 계산하거나 주입할 필요가 없으며, 빌드 타임 css 생성하기에 런타임 오버헤드가 없다.

+ 단점
  + 개발된지 얼마 안 돼서 참조할 문서가 많이 없다.

### styled-components
+ 장점</br>
  + css-in-js 방식으로 java-script 환경을 활용할 수 있다.
  + css의 컴포넌트화로 style-sheet 파일을 유지보수 할 필요가 없다.

+ 단점</br>
  + 별도의 라이브러리를 설치해야 하므로 번들 사이즈가 커진다.

### emotion
+ 장점
  + styled-components와 비슷하여 러닝 커브가 짧을 수 있다.
  + 객체 스타일의 문법을 지원해서 css 문법을 간편하게 제작할 수 있다.
  + emotion을 기반으로 하는 라이브러리가 많아 호환성이 좋다.

+ 단점
  + 바벨 설정을 하거나 추가적인 코드(/** @jsxImportSource @emotion/react */)를 넣어줘야 함.

# 🎥 시연영상


### 디자인 토큰을 위한 컴포넌트 생성
props로 옵션을 전달받아, 다양한 모양의 예제를 만들 수 있는 공용 컴포넌트를 제작하였습니다. 
![스크린샷 2023-12-21 오전 3 05 23](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/ccc43ec3-8da7-46af-8ba8-5d4cca597c33)

### 생성 방법
다음과 같이 컴포넌트에 필요한 props를 받습니다. 
![스크린샷 2023-12-21 오전 3 07 20](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/cb261a20-49ec-4ace-b760-c811ef26bc24)
다음과 같이 컴포넌트의 props를 `propsType`속성을 사용하여 정리해주었습니다.이렇게 정리하니, 복잡한 props를 옵션별로 볼 수 있어서 편리하였습니다. 
![스크린샷 2023-12-21 오전 3 07 15](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/4afd7b0a-bf6f-4e1b-83ac-f6288e3b1a2e)

css 라이브러리별 코드 작성 예시입니다.

### 1. styled-components

가장 익숙해서 쉬웠던 라이브러리 입니다. 
![스크린샷 2023-12-21 오전 3 11 06](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/42e4acd8-501a-40e4-893b-0f4340a46c03)

theme 적용을 위해 theme 파일을 생성하고 이를 `themeProvider`로 감싸주었습니다. 

### 2. tailwind-css
![스크린샷 2023-12-21 오전 3 10 44](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/5fdff770-82d3-486c-992b-454c9c773d09)

![스크린샷 2023-12-21 오전 3 11 06](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/42e4acd8-501a-40e4-893b-0f4340a46c03)

### 3. emotion
emotion의 경우 `emotion/style` 이라는 스타일 컴포넌트를 만드는 기능을 제공하지만, 이를 사용하지 않고 기본 문법을 주는 방식으로 작성하였습니다.
처음에는 emotion의 ` css 인라인 스타일 방식이 익숙하지 않아 다음과 같이 하나씩 옵션을 css로 정의했지만,

![스크린샷 2023-12-21 오전 3 33 21](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/7fe70af3-f4db-485b-826b-59dad230164b)

다음과 같이 사용할 수 있다는 것을 알고 리팩토링하였습니다. 

![스크린샷 2023-12-21 오전 3 30 28](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/1b1e6030-18ae-4d5e-a867-be0cd7786403)

위와 같은 코드를 combineStyle 이라는 하나의 `배열` 형태로 묶어서 정의하고, 이를 css 속성에 넣었습니다.

![스크린샷 2023-12-21 오전 3 34 43](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/daead8f0-cdd1-475d-8bda-e751f039e318)

theme 적용을 위해서 다음과 같이 `tailwind-css`에 다음과 같이 theme을 추가해주었습니다. 

![스크린샷 2023-12-21 오전 3 41 16](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/fb322577-0e72-4040-9bcc-40285d355a0c)

#### 📝 에러 해결
처음에 emotion의 cli를 제대로 했음에도 css가 적용이 안되는 문제가 있었습니다.
다음과 같이 파일 상단에 코드를 추가해주었더니, 해결되었습니다.

![스크린샷 2023-12-21 오전 3 43 08](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/0868220c-d75e-4b89-9682-1ccd12811497)

하지만 매번 파일에 해당 코드를 적어주어야 한다는 문제점이 있어서, 이를 babel 설정을 해서 해결할 수 있는 방법을 다음 프로젝트에는 적용하려고 합니다.

### 3. panda-css

#### 적용 못했음.. ❌ 에러 과정 설명

설치 중에 판다의 css모듈이 깔려있는 `style-system`이 `src` 외부에 깔려서 css 적용시 해당 파일 읽을 수 없다는 에러가 나왔습니다. 

![스크린샷 2023-12-21 오전 3 37 45](https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/9f8d3eea-b330-4999-a0f5-a4ed7cceb495)


해결을 위해 `jsconfig.json`에서 include에 `src`외에 `style-systen`을 추가했지만, 해결하지 못했습니다. 

### 스토리북

Pagination

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/d3910b6b-db65-4ad8-9349-a70558f2fd88

BasicButton

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/7399f020-4698-4dab-b75d-3f2b1c7f6c2a

BasicInput

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/d7c22a76-2c65-4db7-b229-0b3906c2ec46

CheckBox

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/949c1dda-9691-4955-b9cf-513459767918

SelectBox

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/6c6bdf6a-c77a-4dfb-8ea8-235198c74933

Tab

https://github.com/mobi-community/mobi-2th-begginer-2/assets/125418818/86fd4042-d9d4-4ba1-88da-66fa1cf73a7d

### UI 라이브러리



# 💡 회고

### Levi

### Rin
