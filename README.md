# Dev Notes

### 2024.04.02

#### 1.0

- 초기 세팅
- 설치
  - create react-app(typescript)
  - react-router-dom
  - styled-components
  - firebase
- 불필요한 파일 제거
- 폴더 구조 세팅

### 2024.04.03

#### 1.1

- Routing
- GlobalStyle
- LoadingScreen
- Firebase 세팅
- 로그인 여부에 따라 Route 예외처리

#### 1.2

- Login
  - 로그인
  - 회원가입 Page Link

#### 1.3

- SignUp
  - 회원가입
  - 로그인 Page Link

#### 1.4

- Login
  - 소셜로그인(Github)
- Home
  - 로그아웃 버튼

#### 1.5

- Login
  - route 오류 해결
    - 문제 : 정상적으로 로그인 했지만 Home으로 이동되지 않는 현상
    - 원인 : Router.tsx에서 auth.currentUser 판별하는데 시점 차이 존재
    - 해결 : Home.tsx 내부에서 로그인 여부 판별 → user 정보가 없다면 return <Navigate to="/login" /> 처리
    - 더 좋은 해결 방안 : ProtectedRoute로 감싸서 처리

#### 업데이트 예정

- ProtectedRoute
- Login, SignUp Page CSS
- 에러 메시지 예외 처리
- Security Rules
- APT Key Security
