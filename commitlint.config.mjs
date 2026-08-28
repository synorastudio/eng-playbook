export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "breaking-change-bang": ({ header, notes }) => {
          const hasBreakingFooter = notes.some(
            ({ title }) =>
              title === "BREAKING CHANGE" || title === "BREAKING-CHANGE",
          );
          const hasBang = /^[a-z]+(?:\([^)]*\))?!: /.test(header);
          return [
            !hasBreakingFooter || hasBang,
            "breaking changes must use ! before the colon",
          ];
        },
      },
    },
  ],
  rules: {
    "body-max-line-length": [0],
    "breaking-change-bang": [2, "always"],
    "footer-max-line-length": [0],
    "header-max-length": [0],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};
