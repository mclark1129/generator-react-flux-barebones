** React / Flux Barebones Generator **

This generator provides a simple scaffolding of a react.js / flux application, complete with build pipeline and development server.

Simply run `yo react-flux-barebones` in a new directory, answer a few questions and your application will be good to go.
After running `npm install`, simply run `npm start` to spin up your development server and enable the continuous build pipeline.

Alternatively, you can use `npm build` to perform a one time build of your app, without watching for changes.  Intended for production deployments.

The base application includes the following packages:

 - react.js
 - flux
 - Development Server: lite-server
 - Intellisense: typings 
 - Build Pipeline: browserify / watchify / babelify with `es2015` and `react` presets