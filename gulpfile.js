const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

// Компіляція SCSS в CSS
gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Мініфікація CSS
gulp.task("minify-css", function () {
  return gulp
    .src("dist/css/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Live server
gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("sass", "minify-css"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

// Запуск задачі за замовчуванням (sass, minify-css, serve)
gulp.task("default", gulp.series("sass", "minify-css", "serve"));
