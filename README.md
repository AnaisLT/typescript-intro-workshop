# Intro to TypeScript

## Setup

Run these to download this repository and install its requirements:

```shell
git clone https://github.com/AnaisLT/typescript-intro-workshop
cd typescript-intro-workshop
yarn
```

You can then open the folder in your editor.
For example, with VS Code:

```shell
code .
```

## Running TypeScript Snippets

It's generally easiest to install TypeScript globally:

```shell
yarn global add typescript
```

We recommend you then run TypeScript in "watch" mode on individual code examples by providing it the `-w` flag and a path to the example.
For example, to start TypeScript running on the first code example:

```shell
tsc src/examples -w
```

Alternately, if you'd prefer not to install TypeScript globally, you can use it as an already-installed dependency of this repository with the `npm run compile` command:

```shell
yarn compile src/examples -w
```
