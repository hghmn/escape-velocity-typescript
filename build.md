# Gulp Build Process

_currently broken - the livereload code is causing the buold process to hang_

*based on [js13k-rollup](*https://github.com/spmurrayzzz/js13k-rollup)*

The purpose of this project is to make getting started with the [js13kgames.com](http://js13kgames.com) competition both easy
and clean. Using `gulp` and `rollup`, this repo offers the following features:

- **Support for [Typescript](http://typescriptlang.org)**
- JavaScript minification via Uglify
- CSS minification via `clean-css`
- Sourcemaps and livereload support for development *(partial support)*
- Inlining for all CSS and JavaScript assets (single `index.min.html` output)
- Zip packaging of the inlined output for final competition submission

## Getting started

- Install dependencies

```
npm install -g gulp node-static
npm install
```

- Kick off a build

```
gulp
```

- Start a static server

```
static
```

- Navigate to [http://localhost:8080/dist](http://localhost:8080/dist) in your browser to run the app

- To run builds while you save changes to files

```
gulp watch
```

## How the build pipeline works

JavaScript step

1. Rollup reads the dependency tree and outputs `dist/main.js` w/ sourcemaps support
2. Uglify minifies the previous file and outputs `dist/main.min.js`

CSS step

3. All css files are concatenated and output to `dist/main.css`

Template step

4. `index.hbs` is output into two separate files: `dist/index.html` and `dist/index.min.html`. The former is used for development. The latter has all the necessary scripts and styles are inlined into a single deliverable used for later packaging.

Zip step

5. The `index.min.html` is compressed into a single `game.zip` that can be used for competition submission.

