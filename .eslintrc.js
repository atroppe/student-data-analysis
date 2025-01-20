module.exports = {
    root: true,
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:@typescript-eslint/recommended',
          'prettier',
        ],
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
      {
        files: ['*.js'],
        extends: ['eslint:recommended', 'prettier'],
      },
    ],
  };
  