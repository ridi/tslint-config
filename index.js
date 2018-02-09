module.exports = {
  'extends': [
    'tslint:recommended',
    'tslint-react',
  ],
  'rules': {
    // 인터페이스 프리픽스를 `I`로 고정하지 않는다.
    'interface-name': false,

    // 절대 경로로 모듈을 임포트하려면 이 설정을 해제해야 한다.
    // 참고: https://github.com/palantir/tslint/issues/3364
    'no-implicit-dependencies': false,

    // 절대 경로로 모듈을 임포트하려면 이 설정을 해제해야 한다.
    // 참고: https://github.com/palantir/tslint/issues/3483
    'no-submodule-imports': false,

    // React Stateless Component 작성시 PascalCase를 사용하기 위해 허용한다.
    // 참고: https://github.com/palantir/tslint-react/issues/120
    'variable-name': [true, 'allow-pascal-case'],

    // `@ridi/eslint-configs` 모듈과 일관성을 위해 세미콜론은 항상 사용한다.
    'semicolon': [true, 'always'],

    // 스트링 리터럴은 작은따옴표(Single Quotes), JSX의 속성에는 큰따옴표(Double Quotes)를 사용한다.
    'quotemark': [true, 'single', 'jsx-double'],

    // JSX 내에서 여러 줄 JS 사용을 제한하는 것이 큰 이점이 없다고 판단하여 허용한다.
    'jsx-no-multiline-js': false,
  },
};
