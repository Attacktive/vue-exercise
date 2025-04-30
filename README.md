# vue-exercise

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/905f834b630348efa8828f8500dca7a4)](https://app.codacy.com/gh/Attacktive/vue-exercise/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![CodeFactor](https://www.codefactor.io/repository/github/attacktive/vue-exercise/badge/main)](https://www.codefactor.io/repository/github/attacktive/vue-exercise/overview/main)
[![Vitest](https://github.com/Attacktive/vue-exercise/actions/workflows/vitest.yaml/badge.svg)](https://github.com/Attacktive/vue-exercise/actions/workflows/vitest.yaml)
[![ESLint](https://github.com/Attacktive/vue-exercise/actions/workflows/eslint.yaml/badge.svg)](https://github.com/Attacktive/vue-exercise/actions/workflows/eslint.yaml)
[![CodeQL](https://github.com/Attacktive/vue-exercise/actions/workflows/codeql-analysis.yaml/badge.svg)](https://github.com/Attacktive/vue-exercise/actions/workflows/codeql-analysis.yaml)
[![Deploy to gh-pages](https://github.com/Attacktive/vue-exercise/actions/workflows/deploy.yaml/badge.svg?branch=main)](https://github.com/Attacktive/vue-exercise/actions/workflows/deploy.yaml)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable
Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for
type checking. In editors, we
need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented
a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more
performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
	1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
	2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Get the Test Coverage with [Vitest](https://vitest.dev/)

```sh
npm run coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
