module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    indent: ["error", 2],
    "no-var": "error",
    "for-direction": "error",
    semi: ["warn", "always"],
  },
}
