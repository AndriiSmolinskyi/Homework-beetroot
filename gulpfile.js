const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Компіляція SCSS в CSS
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); // Оновлення стилів без перезавантаження сторінки
});

// Мініфікація CSS
gulp.task('minify-css', function() {
  return gulp.src('dist/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()); // Оновлення стилів без перезавантаження сторінки
});

// Live server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('src/scss/**/*.scss', gulp.series('sass', 'minify-css'));
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

// Запустити задачу за замовчуванням (serve)
gulp.task('default', gulp.series('sass', 'minify-css', 'serve'));