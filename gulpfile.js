var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
  srcPath: 'src/',
  devPath: 'build/',
  prdPath: 'dist/'
};

gulp.task('lib', function() {
  gulp.src('bower_components/**/*.js')
  .pipe(gulp.dest(app.devPath + 'vendor'))
  .pipe(gulp.dest(app.prdPath + 'vendor'))
  .pipe($.connect.reload());
});

gulp.task('html', function() {
  gulp.src(app.srcPath + '**/*.html')
  .pipe(gulp.dest(app.devPath))
  .pipe(gulp.dest(app.prdPath))
  .pipe($.connect.reload());
})


gulp.task('json', function() {
  gulp.src(app.srcPath + 'data/**/*.json')
  .pipe(gulp.dest(app.devPath + 'data'))
  .pipe(gulp.dest(app.prdPath + 'data'))
  .pipe($.connect.reload());
});

/*gulp.task('less', function() {
  gulp.src(app.srcPath + 'style/index.less')
  .pipe($.plumber())
  .pipe($.less())
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});*/

gulp.task('sass', function() {
  gulp.src(app.srcPath + 'style/index.scss')
  .pipe($.plumber())
  .pipe($.sass())
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('css', function() {
  gulp.src(app.srcPath + 'style/static/*.css')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('js', function() {
  gulp.src(app.srcPath + 'script/**/*.js')
  .pipe($.plumber())
  .pipe($.concat('index.js'))
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('image', function() {
  gulp.src(app.srcPath + 'image/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'image'))
  .pipe($.imagemin())
  .pipe(gulp.dest(app.prdPath + 'image'))
  .pipe($.connect.reload());
});

gulp.task('fonts', function() {
  gulp.src(app.srcPath + 'fonts/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'fonts'))
  .pipe(gulp.dest(app.prdPath + 'fonts'))
  .pipe($.connect.reload());
});

gulp.task('build', ['image', 'js', 'sass', 'lib', 'html', 'json', 'fonts', 'css']);

gulp.task('clean', function() {
  gulp.src([app.devPath, app.prdPath])
  .pipe($.clean());
});

gulp.task('serve', ['build'], function() {
  $.connect.server({
    root: [app.devPath],
    livereload: true,
    port: 5000
  });

  open('http://localhost:5000');

  gulp.watch('bower_components/**/*', ['lib']);
  gulp.watch(app.srcPath + '**/*.html', ['html']);
  gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(app.srcPath + 'style/**/*.scss', ['sass']);
  gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
  gulp.watch(app.srcPath + 'image/**/*', ['image']);
  gulp.watch(app.srcPath + 'fonts/**/*', ['fonts']);
  gulp.watch(app.srcPath + 'style/static/*.css', ['css']);
});

gulp.task('default', ['serve']);
