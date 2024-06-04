module.exports = {
  root: true,
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  extends: ["universe/native", "prettier"],
};
