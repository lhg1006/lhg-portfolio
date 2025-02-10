# 이효규 포트폴리오 웹사이트 🚀

<div align="center">
  <img src="https://raw.githubusercontent.com/lhg1006/portfolio-images/7726310b5883116df60b99587bf7b8a1b606da75/images/project/pfs-0.png" alt="포트폴리오 메인 이미지" />
</div>

## 📌 프로젝트 소개

Next.js와 TypeScript를 기반으로 개발된 개인 포트폴리오 웹사이트입니다. 모던하고 반응형 디자인을 적용하여 사용자 경험을 최적화했습니다.

### 🔗 관련 링크
- [배포된 웹사이트](https://lhg1006.github.io/)
- [백엔드 Repository](https://github.com/lhg1006/api-server)

## 🛠 기술 스택

### Frontend
- Next.js 13.3.1
- TypeScript
- React
- Tailwind CSS

### 주요 라이브러리
- React Hook Form (폼 상태 관리)
- Yup (데이터 유효성 검증)
- Axios (HTTP 클라이언트)
- React Modal (모달 컴포넌트)
- React Toastify (알림 메시지)

## 🌟 주요 기능
- 반응형 디자인
- 포트폴리오 프로젝트 쇼케이스
- 기술 스택 소개
- 연락처 폼

## 📂 프로젝트 구조
<p>lhg-portfolio/</p>
<p>├── app/                # Next.js 13 app directory</p>
<p>├── components/         # 재사용 가능한 컴포넌트</p>
<p>├── public/            # 정적 파일</p>
<p>├── schema/            # Yup 유효성 검증 스키마</p>
<p>├── types/             # TypeScript 타입 정의</p>
<p>└── util/              # 유틸리티 함수</p>

## 🚀 시작하기

### 1. Repository Fork
- 우측 상단의 'Fork' 버튼을 클릭하여 이 Repository를 자신의 GitHub 계정으로 Fork합니다.
- Fork한 Repository를 로컬 환경으로 클론합니다
- bash
git clone https://github.com/[your-username]/lhg-portfolio.git

### 2. 의존성 설치
npm install

### 3. 개발 서버 실행
npm run dev

### 4. 빌드
npm run build

## 🐳 Docker 지원
Dockerfile이 포함되어 있어 컨테이너화가 가능합니다.
# 이미지 빌드
docker build -t portfolio .

# 컨테이너 실행
docker run -p 3000:3000 portfolio

## 📊 프로젝트 구성
- TypeScript: 65.4%
- CSS: 19.0%
- JavaScript: 14.8%
- Dockerfile: 0.8%

## 🔒 라이센스
이 프로젝트는 개인 포트폴리오용으로 제작되었습니다.

## 📫 연락처
- Email: lhg961006@gmail.com
- Portfolio: https://lhg1006.github.io/
