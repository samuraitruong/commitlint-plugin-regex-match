# commitlint-plugin-regex-match

The commitlint plugin to add function that allow match regex in the commit message

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
