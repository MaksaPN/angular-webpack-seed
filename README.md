# Angular 2+ (#itsJustAngular ;)) seed project with Webpack 2
Quickstart project for bootstraping your Angular 2+ application using Webpack 2

# Features
1. Architecture setup suggestion, with versions of Angular packages 2.4.6 (router 3.4.6) and Webpack 2.2.1
2. Contains folder structure that made the most sense with combining Angular 2+ guidelines and author's experience.
3. Contains couple of modules, with one of them lazy loaded
4. Webpack development and production settings for:
  1. Compiling and bundling .ts, .scss
  2. Using resources (.html, .css, .jpg, .ico etc.)
  3. Separated vendor, polyfills and app files.
  4. Compiling and minifying resources for production, with hashed filenames and source maps.
  5. Manifest json file support to allow for caching of unchanged files when building.
5. Using ng2-translate to setup internationalization.

# Running the app
- Development: Execute 'npm start' command from terminal, in the root of the repository to build the files in memory and start the app on port 8080
- Production: Execute 'npm run build' command from terminal to create production build in 'dist' folder.

Tip: If you're using Visual Studio Code (and I suggest you do), if you install Terminal extension you can use ctrl+` to start the built in terminal.
