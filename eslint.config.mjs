import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    jsdoc: false,
    markdown: false,
    ignores: ['src/components/ui/icons/**'],

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style (uses Prettier for formatting)
    stylistic: true,
  },

  // --- Custom Rule Overrides ---
  {
    rules: {
      curly: ['error', 'multi-line'],
      'max-lines-per-function': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
      'max-depth': ['error', 3],

      // --- Node Overrides ---
      'node/prefer-global/process': ['error', 'always'],
      'node/prefer-global/buffer': ['error', 'always'],
    },
  },
  // --- TypeScript-only Rule Overrides ---
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'ts/consistent-type-definitions': 'off',
      'ts/strict-boolean-expressions': 'off',
      'ts/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'ts/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: true,
          considerDefaultExhaustiveForUnions: true,
          requireDefaultForNonUnion: false,
        },
      ],
    },
  },
);
