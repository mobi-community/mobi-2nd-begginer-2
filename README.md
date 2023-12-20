# mobi-2th-begginer-2 Pair-1

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
| 12/20 |    |
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

### styled-components
+ 장점</br>
  + css-in-js 방식으로 java-script 환경을 활요할 수 있다.
  + css의 컴포넌트화로 style-sheet 파일을 유지보수 할 필요가 없다.

+ 단점</br>
  + 별도의 라이브러리를 설치해야 하므로 번들 사이즈가 커진다.

### emotion
