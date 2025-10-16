import { src, dest, watch, series } from "gulp";

import * as dartSass from "sass";

import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

function buildStyles() {
  return src([
    "sass/character/character.scss",
    "sass/gun/gun.scss",
    "sass/reword/reword.scss",
  ])
    .pipe(sass())
    .pipe(dest("styles"));
}

function WatchMe() {
  watch(
    [
      "sass/character/character.scss",
      "sass/gun/gun.scss",
      "sass/reword/reword.scss",
    ],
    buildStyles
  );
}

export default series(buildStyles, WatchMe);
