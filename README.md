**Created using parcel for React/Typescript **

```bash
  sass compiler
  css autoprefixer
  Materialize Library
```

## Steps

**Download or Pull This Repo**
Top of this page you can see where it says clone or download

**Install Node**
https://nodejs.org/en/

**Install Yarn-Optional**
https://yarnpkg.com/en/

**Install Parcel**
https://parceljs.org/

```bash
  yarn global add parcel-bundler
  npm install -g parcel-bundler
```

**Install all the node packages**

```bash
  npm install
  yarn install
```

**Start the dev server**
Server will run at http://localhost:1234

```bash
  npm run dev
  yarn dev
```

**Build production files**

```bash
  All files will build to ./dist directory
  npm run production
  yarn production
```

**SCSS Structure**

```
assets/scss: Entry Folder
assets/scss/0-plugins:materialize,bootstrap etc
assets/scss/1-helpers: mixins,variables etc
assets/scss/2-base:resets,global styles, etc
assets/scss/3-layout:header,footer,nav, etc
assets/scss/4-modules:features, video, re-usable components etc
assets/scss/5-templates:any over-riding styles for layouts or modules
```
