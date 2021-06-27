# commitlint-plugin-regex-match

The commitlint plugin to add function that allow match regex in the commit message

## Install

```sh
npm install commitlint-plugin-regex-match --save-dev
```

To install & configure commitlint please refer to - [https://github.com/conventional-changelog/commitlint] (https://github.com/conventional-changelog/commitlint)

## Usage

```js
// commitlint.config.js
module.exports = {
  plugins: ['commitlint-plugin-regex-match'],
  rules: {
    'body-match': [2, 'always', 'JIRA-\\d+'],
  },
};
```
