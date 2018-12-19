var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({
      browsers: ['last 3 version', '>5%']
    }),
  ];
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));