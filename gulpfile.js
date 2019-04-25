const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const less = require('gulp-less');
const path = require('path');

let config = {
    src: './src/',
    build: './build/',
    html: {
        src: '**/*.html',
        dest: ''
    },
    css: {
        src: '/css/*',
        dest: '/css/'
    },
    img: {
        src: '/img/*',
        dest: '/img/'
    }
};

function html(){
    return gulp.src(config.src + config.html.src)
        .pipe(gulp.dest(config.build + config.html.dest));
}

function css(){
    return gulp.src(config.src + config.css.src)
        .pipe(autoprefixer({
            browsers: ['last 2 version']           
        }))
        .pipe(cleanCSS({compatibility: 'ie8',
                        level: 1 }))
        .pipe(gulp.dest(config.build + config.css.dest)); 
}

function img(){
    return gulp.src(config.src + config.img.src)
        .pipe(gulp.dest(config.build + config.img.dest));
}

function clear(){
    return del(config.build + '/*');
}

function lessFrom(){
    return gulp.src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./build/css/'));
}

gulp.task('html', html);
gulp.task('img', img);
gulp.task('css', css);
gulp.task('clear', clear);
gulp.task('less', lessFrom);


// gulp.task('build', gulp.series(clear, gulp.parallel(html, img, css)));







