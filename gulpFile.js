var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function(){
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'));
});

gulp.task('move-files', function(){
  return gulp
    .src([
      './app/**/*.html',
      './app/**/*.css',
      './app/**/*.jpeg',
      './app/**/*.jpg',
      './app/**/*.png',
      './app/**/*.gif',
      './app/**/*.json'
    ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('inject', ['move-files', 'typescript'], function(){
  return gulp
    .src('./dist/index.html')
    .pipe(inject(
      gulp
        .src('./dist/**/*.js')
        .pipe(angularFilesort())
      ))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['move-files', 'typescript', 'inject']);