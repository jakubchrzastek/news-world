var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');


gulp.task("sass", function () {
  return gulp.src("./app/sass/*.sass")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("./app/css/"));
});

gulp.task("connect", function() {
  connect.server({
    root: "app",
    livereload: true
  });
});

gulp.task("html", function () {
  gulp.src("./app/index.html")
    .pipe(connect.reload());
});

gulp.task("css", function () {
  gulp.src("./app/css/main.css")
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("./app/sass/*.sass", ["sass"]);
  gulp.watch("./app/index.html", ["html"]);
});

gulp.task("default", ["connect", "sass", "html" ,"watch"]);