# material-design-template
material design template

..진행중..
http://mateuitemplate.surge.sh/

## 진행현황
- list : 같은 listcard 디자인 구현완료
- tab : slide구현완료, 그 외 보류
- post : TODO_APP구현완료, 그 외 보류
- chart : 보류
- search : 간단한 비동기 구현완료


## stack
- es6
- react.js
- react-router
- jsx
- json
- npm, yarn
- node.js
- scss
- classNames
- materail-ui
- react-hot-loader
- creat-react-app
- webpack

## 컨셉
react + react-router + material-ui를 이용한 템플릿 제작

##  구축
- create-react-app으로 구축
- npm eject
- sass-loader node-sass를 install 
  config -> webpack.config.dev(prod).js 수정
- material-ui적용
- App component에 route구축

## 각 라우터 페이지
- List : 메인화면
- Tab : header하단 탭 메뉴
- Post : TODO앱 적용
- Chart : 그래프 적용
- Search : 간단한 비동기식 검색
- Nomatch : 접속불가 페이지

## 참고
- 이미지첨부시 참고사항
- 상대경로가 아닌 절대경로를 이용
- https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js 여기 링크에서 해결책을 찾음
- 그래서 create-react-app에 있는 공용폴더 public에서 imgs파일연결
- 작동 ok !
