module.exports = {
  env: {
    node: true, // Node.js 환경 지원
    browser: true, // 브라우저 환경 지원
    es2021: true, // 최신 ECMAScript 문법 허용
    jest: true, // Jest 환경
  },
  globals: {
    self: 'readonly', // 서비스 워커에서 사용하는 'self' 전역 변수
  },
  extends: [
    'eslint:recommended', // ESLint 추천 규칙
    'plugin:react/recommended', // React 관련 추천 규칙
    'plugin:react-hooks/recommended', // React Hooks 관련 규칙
    'plugin:jsx-a11y/recommended', // 접근성 규칙
    'plugin:prettier/recommended', // Prettier 규칙 통합
  ],
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 2021 버전 사용
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 문법 사용
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest'],
  rules: {
    'react/prop-types': 'off', // prop-types 검사 비활성화
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 작은따옴표 사용
        semi: true, // 세미콜론 사용 안 함
        trailingComma: 'es5', // ES5 규칙에 맞춰 후행 쉼표 사용
        tabWidth: 2, // 탭 너비 2로 설정
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
