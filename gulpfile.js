var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
gulp.task("webpack", function(callback) {
  	return gulp.src('src/index.ts')
  .pipe(webpack(require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
});


//默认任务
gulp.task('default',function(){
	gulp.watch(['src/**/*.ts'],['webpack'])
});