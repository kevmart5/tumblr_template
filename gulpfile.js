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

gulp.task('javaScripts', () => {
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest('dist/js'))
})

gulp.task('add-jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('dist/vendor'))
})

gulp.task('bootstrap-plugins', () => {
  return gulp.src('node_modules/bootstrap/js/dist/*')
  .pipe(gulp.dest('dist/vendor/bootstrap'))
})

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', ['styles', 'login-styles'])
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('src/**/*.js', ['javaScripts'])
})

gulp.task('server', () => {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('deploy', 
  ['html', 
  'styles', 
  'login-styles', 
  'fonts', 
  'add-jquery', 
  'bootstrap-plugins'],
  cb => cb
)



gulp.task('start', 
['html', 'styles', 'login-styles', 'fonts', 'add-jquery', 'bootstrap-plugins', 'javaScripts', 'server', 'watch'], 
cb => cb)