const gulp = require('gulp');

function styles(){
    return gulp.src('./css/**/*.css')
        .pipe(gulp.dest('./build/css'));
}

function script(){

}

gulp.task('styles', styles);
gulp.task('script', script);

