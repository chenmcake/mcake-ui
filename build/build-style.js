// 引入gulp
var gulp = require('gulp');
// 引入压缩CSS插件
var cleanCSS = require('gulp-clean-css');
// 引入编译Sass插件
var scss = require('gulp-sass');
// 引入文件重命名插件
var rename = require('gulp-rename');
// 引入自动添加浏览器前缀插件
var autoprefixer = require('gulp-autoprefixer');

// 编译scss
gulp.task('css', function () {
    // 入口文件
    gulp.src('../src/styles/index.scss')
        // sass编译 如果编译错误 进行报错
        .pipe(scss({
            outputStyle: 'expanded'
        }))
        // 自动添加前缀
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        // 重命名
        .pipe(rename('mcake-ui.css'))
        // 输出
        .pipe(gulp.dest('../dist/css'))
        // 压缩版
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        // 重命名
        .pipe(rename('mcake-ui.min.css'))
        // 写入地址
        .pipe(gulp.dest('../dist/css'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/fonts/*.*')
        .pipe(gulp.dest('../dist/fonts'));
});

gulp.task('default', ['css', 'fonts']);
