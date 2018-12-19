var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');
// var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version', '>5%']
    }),
  ];
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('babel', () =>
  gulp.src('./src/assets/js/**/*.js')
  .pipe($.sourcemaps.init())
  .pipe($.babel({
    presets: ['@babel/env']
  }))
  // .pipe(concat('all.js'))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('./build/js'))
);

gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/assets/js/**/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.series('sass', 'babel'));