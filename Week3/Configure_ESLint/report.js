/**
 * ESLint Configuration Assignment - Report
 * Author: Dmitriy Chernichenko
 *
 * Run with: node report.js
 */

const report = `
ESLint Configuration Assignment Report
=====================================

1) Steps Followed
-----------------
1. Created a new project folder and initialized a Node.js project using npm init,
   which generated package.json.
2. Installed and configured ESLint (flat config) and verified dependencies were added
   under devDependencies.
3. Reviewed the generated eslint.config.js file and learned that many predefined rules
   are inherited through extends (js/recommended) rather than being listed explicitly.
4. Modified the ESLint configuration by adding custom rules:
   - semi: ["error", "always"] to require semicolons
   - quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }]
     to require single quotes while allowing template literals and escape exceptions
5. Configured ESLint to lint JavaScript files (**/*.{js,mjs,cjs}) and to recognize
   Node.js globals using globals.node.
6. Tested index.js file for double vs single quotations "quotes" and semicolumn 
   "semi" syntax in code while applying --fix option.

2) Issues Encountered and Resolutions
-------------------------------------
- Initially, my eslint.config.js did not contain a rules object. This was expected because
  the project inherits many default rules from "js/recommended". To customize behavior,
  I added a rules section to override specific rules (semi and quotes).
- Because package.json includes "type": "module", the project uses ES Modules by default.
  I ensured my ESLint configuration matched modern module usage and included common JS
  file extensions in the files matcher.

3) Observations: How ESLint Helps Maintain Code Quality
-------------------------------------------------------
- ESLint catches common mistakes early (unused variables, undefined variables, syntax issues),
  improving reliability before code is executed.
- It enforces consistent style (quotes/semicolons), which makes code easier to read and
  reduces formatting-related noise in commits.
- ESLint encourages best practices and makes team collaboration smoother by applying the same
  standards to all code, reducing time spent debating formatting during code review.
- Overall, ESLint improves maintainability and code quality by providing fast feedback and
  consistent rules across the project.

End of report.
`;

console.log(report);

