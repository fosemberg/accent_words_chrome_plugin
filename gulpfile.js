const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require("gulp-rename");

src = 'sourceDict.txt';

gulp.task('default', function () {
  return gulp.src([src])
    .pipe(replace(/%.*/g, ''))
    .pipe(replace('`а', 'а́'))
    .pipe(replace('`е', 'е́'))
    .pipe(replace('`и', 'и́'))
    .pipe(replace('`о', 'о́'))
    .pipe(replace('`у', 'у́'))
    .pipe(replace('`ы', 'ы́'))
    .pipe(replace('`э', 'э́'))
    .pipe(replace('`ю', 'ю́'))
    .pipe(replace('`я', 'я́'))
    .pipe(replace(/["]/g, "'"))
    .pipe(replace('#', '": "'))
    .pipe(replace(/\n^/gm, '"'))
    .pipe(replace(/$/gm, '",'))
    .pipe(replace(/^/, '{\n"'))
    .pipe(replace(/^/, "module.exports = "))
    .pipe(replace(/,$/, "\n}"))
    .pipe(rename(path => {path.extname = '.js'}))
    .pipe(gulp.dest('build/'));
});