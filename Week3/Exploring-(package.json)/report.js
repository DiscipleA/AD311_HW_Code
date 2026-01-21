/**
 * report.js
 * Run: node report.js
 *
 * This script prints a short report explaining each section of package.json
 * and its purpose, based on the current package.json structure shared in the assignment.
 */

console.log(`
============================================================
PACKAGE.JSON REPORT — "exploring-package.json"
============================================================

This report explains each major section of package.json and why it matters.

------------------------------------------------------------
1) BASIC PROJECT METADATA
------------------------------------------------------------

1.1) name
- Field: "name": "exploring-package.json"
- Purpose:
  The package name is the unique identifier for the project.
  It must be lowercase, contain no spaces, and is used by npm to identify the package.
  If the project is ever published to npm, this is the name users install.

1.2) version
- Field: "version": "1.0.0"
- Purpose:
  The version identifies the current release of the project and helps track changes.
  It follows Semantic Versioning (MAJOR.MINOR.PATCH):
    - PATCH: bug fixes (1.0.0 -> 1.0.1)
    - MINOR: new backward-compatible features (1.0.0 -> 1.1.0)
    - MAJOR: breaking changes (1.x.x -> 2.0.0)

1.3) description
- Field: "description": "A basic Node.js project to learn package.json"
- Purpose:
  A short summary of what the project does. Useful for documentation and clarity,
  especially when sharing or publishing the project.

------------------------------------------------------------
2) DISCOVERY & DOCUMENTATION FIELDS
------------------------------------------------------------

2.1) keywords
- Field: "keywords": ["node","npm","express","package-json","assignment"]
- Purpose:
  Keywords improve discoverability in npm search by tagging relevant topics.
  They help users find the project by technology or purpose.

2.2) homepage
- Field: "homepage": "https://github.com/DiscipleA/AD311_HW_Code/tree/main#readme"
- Purpose:
  Provides a primary URL for documentation or project landing page.
  This helps users quickly find how to use the project.

2.3) bugs
- Field:
  "bugs": { "url": "https://github.com/DiscipleA/AD311_HW_Code/issues" }
- Purpose:
  Directs users to the correct location for reporting issues/bugs.
  Important for maintenance and collaboration.

2.4) repository
- Field:
  "repository": { "type": "git", "url": "git+https://github.com/DiscipleA/AD311_HW_Code.git#main" }
- Purpose:
  Points to the source code repository so others can review code, contribute, and track changes.
  This is essential for transparency and ongoing maintenance.

------------------------------------------------------------
3) LEGAL & OWNERSHIP INFORMATION
------------------------------------------------------------

3.1) author
- Field: "author": "Dmitriy Chernichenko"
- Purpose:
  Identifies the creator/maintainer. Useful for attribution and contact context.

3.2) license
- Field: "license": "UNLICENSED"
- Purpose:
  Specifies legal usage permissions. "UNLICENSED" commonly indicates the project is private
  or not intended for public reuse, which is typical for coursework projects.

------------------------------------------------------------
4) MODULE & ENTRY CONFIGURATION
------------------------------------------------------------

4.1) type
- Field: "type": "module"
- Purpose:
  Enables ES Modules in Node.js, allowing 'import' and 'export' syntax.
  This changes how Node interprets JavaScript files in the project.

4.2) main
- Field: "main": "index.js"
- Purpose:
  Indicates the entry point file for the project. For libraries, this is what gets loaded
  when the package is imported. For apps, it documents the primary start file.

------------------------------------------------------------
5) SCRIPTS SECTION (CUSTOM COMMANDS)
------------------------------------------------------------

- Field: "scripts": { ... }
- Purpose:
  The scripts section defines reusable commands that can be run with npm.
  It standardizes tasks like starting the app, testing, and running custom demos.

Examples included:
- "start": "node index.js"
  Runs the application entry file.

- "jest": "jest"
  Runs the Jest test runner directly via npm script.

- "hello": (prints a hello message)
  Demonstrates that scripts can run any Node command, including inline code (-e).

Educational scripts included in this project:
- "dependenciesVSdevDependencies"
- "versioning"
- "other_fields_discussion"
- "purpose_package-lock"
- "importance_package-lock"

These scripts print notes to the terminal and serve as runnable documentation.

------------------------------------------------------------
6) DEPENDENCIES VS DEVDEPENDENCIES
------------------------------------------------------------

6.1) dependencies
- Field:
  "dependencies": { "express": "^5.2.1" }
- Purpose:
  Dependencies are packages required for the app to run (production/runtime).
  Express is a runtime dependency because the server typically needs it to operate.

6.2) devDependencies
- Field:
  "devDependencies": { "jest": "^29.7.0" }
- Purpose:
  devDependencies are packages used only during development (testing, linting, building).
  Jest is a dev dependency because it's used to run tests, not to run the app in production.

------------------------------------------------------------
7) VERSION RANGES IN DEPENDENCIES (SemVer in practice)
------------------------------------------------------------

Example: "express": "^5.2.1"
- The caret (^) allows updates that do not change the MAJOR version:
  Allowed: 5.2.2, 5.3.0, 5.x.x
  Not allowed automatically: 6.0.0

This helps get bug fixes and minor improvements without automatically adopting breaking changes.

------------------------------------------------------------
8) ENGINES FIELD (Node/npm version requirements)
------------------------------------------------------------

- Field:
  "engines": { "node": ">=24.12.0", "npm": ">=11.6.2" }
- Purpose:
  Documents and communicates which Node.js and npm versions are expected for this project.
  This reduces runtime incompatibility issues across different machines or environments.

------------------------------------------------------------
9) PACKAGE-LOCK.JSON (How it fits in)
------------------------------------------------------------

- package.json:
  Defines dependency ranges and project metadata/scripts.

- package-lock.json:
  Locks the exact versions installed (including transitive dependencies).

Why package-lock.json is important:
1) Reproducible installs: everyone gets the same versions (teammates, graders, CI).
2) Fewer random breaks: prevents surprise changes from new releases.
3) Faster installs: npm doesn’t have to re-resolve the entire dependency tree.
4) Better security/integrity: includes resolved sources and integrity checks.

Why it should be committed to version control:
- Ensures consistent installs and stable builds across machines and environments.

============================================================
END OF REPORT
============================================================
`);

