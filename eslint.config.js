import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'dist-ssr']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      // Without the React plugin, ESLint could not see JSX usage and reported
      // 11 false "unused variable" errors — enough noise to hide a real one.
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    settings: { react: { version: 'detect' } },
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, gtag: 'readonly' },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off',
      // netlify-honeypot is required by Netlify Forms; fetchpriority must be
      // lowercase on React 18 (camelCase support landed in React 19).
      'react/no-unknown-property': [
        'error',
        { ignore: ['netlify-honeypot', 'fetchpriority'] },
      ],
    },
  },
  {
    // Build scripts run in Node, not the browser.
    files: ['scripts/**/*.mjs', '*.config.js'],
    languageOptions: { globals: globals.node },
  },
])
