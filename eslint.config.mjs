// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-multiple-spaces': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never']
  }
})
