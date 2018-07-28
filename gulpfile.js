/* Gulpfile.js */
let gulp = require('gulp');
let gutil =  require('gulp-util');
let sass = require('gulp-sass');
let webserver = require('gulp-webserver');
let path = require('path');

/* Styles task */
gulp.task('styles', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({includePaths: [
      path.join(__dirname, 'node_modules/bootstrap/scss/'),
      path.join(__dirname, 'node_modules/font-awesome'),
      path.join(__dirname, 'src/sass')]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('login-styles', () => {
  return gulp.src('src/sass/login.scss')
    .pipe(sass({ includePaths: [ 
      path.join(__dirname, 'node_modules/bootstrap/scss/'),
      path.join(__dirname, 'node_modules/font-awesome'),
      path.join(__dirname, 'src/sass') ]
      , outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', ['styles', 'login-styles'])
  gulp.watch('src/**/*.html', ['html'])
})

gulp.task('server', () => {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('start', ['html', 'styles', 'login-styles', 'fonts', 'server', 'watch'], cb => cb)