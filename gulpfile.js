const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const del = require('del');
const mocha = require('gulp-mocha');

gulp.task('clean', done => {
    del('dist');
    done();
})

gulp.task('test', done => {
    gulp.src('test/test.js', { read: false })
        .pipe(mocha({ reporter: 'nyan' }));
    done();
});

gulp.task('build:es5:min', done => {
    gulp.src('src/range.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename(path =>
            path.extname = '.es5.min.js'
        ))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('build:es5', done => {
    gulp.src('src/range.js')
        .pipe(rename(path =>
            path.extname = '.es5.js'
        ))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
    done();
});

/* Minification of es6 version isn't supported due 3rd party reasons
gulp.task('build:es6:min', () => {
    return gulp.src('src/range.js')
        .pipe(minifier({ mangling: false }, uglifyHarmony))
        .pipe(rename(path =>
            path.extname = '.es6.min.js'
        ))
        .pipe(gulp.dest('dist'));
});
*/
gulp.task('build:es6', done => {
    gulp.src('src/range.js')
        .pipe(rename(path =>
            path.extname = '.es6.js'
        ))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('build:all', gulp.series('test', 'build:es5', 'build:es5:min', 'build:es6'));