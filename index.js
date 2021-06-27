module.exports = {
  rules: {
    'body-match': function (parsed, when, value) {
      const { raw = '' } = parsed;
      if (!value) {
        return [true];
      }
      const regex = new RegExp(value, 'ig');
      const matched = raw.match(regex) != null;

      return [
        matched,
        'commit message doest not match with pattern : ' + value,
      ];
    },
  },
};
