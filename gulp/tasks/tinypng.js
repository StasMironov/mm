module.exports = function () {
    var tingpng = require('gulp-tinypng');

    $.gulp.task('tinypng', function () {
        return $.gulp.src('src/dev/img/**/*.{png,jpg,jpeg}')
            .pipe(tingpng('1YDdXg3gMfQNtcykTwj3vtctWzqN1Fs0'))
            .pipe($.gulp.dest('build/img/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}