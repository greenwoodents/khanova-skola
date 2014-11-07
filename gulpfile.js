var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

var lessDir = './less';
var lessFiles = path.join(lessDir, '*', '**');
var lessMainFile = path.join(lessDir, 'main.less');
var cssDir = './css';

gulp.task('less', function () {
  gulp.src(lessMainFile)
    .pipe($.sourcemaps.init())
      .pipe($.less())
        .pipe($.autoprefixer())
      .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('.', {
      sourceRoot: '../less'
    }))
    .pipe(gulp.dest(cssDir))
    .pipe($.livereload());
});

var bootstrapLessDir = [
        './bower_components/bootstrap/less/*',
        './bower_components/bootstrap/less/**/*'
    ];

gulp.task('bower', function () {
  //jQuery
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./js'));

  //Bootstrap LESS
  gulp.src(bootstrapLessDir)
    .pipe(gulp.dest('./less/bootstrap'));

  //Bootstrap JS
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./js'));
});

gulp.task('production', function () {
  gulp.src(lessMainFile)
    .pipe($.less())
      .pipe($.autoprefixer())
      .pipe($.cssmin())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(cssDir));
});

gulp.task('default', function() {
  gulp.start('less');
});

gulp.task('watch', ['less'], function() {
    //Watch changes (less, )
    $.watch('less/**.less', ['less']);
    $.watch('less/**/**.less', ['less']);
    $.watch('*.html', ['less']);
});
