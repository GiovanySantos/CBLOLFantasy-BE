const Configuration = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'refactor', 'test'],
    ],
  },

  prompt: {
    messages: {},
  },
};

module.exports = Configuration;
