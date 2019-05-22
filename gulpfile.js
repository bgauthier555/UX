var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function buildJS(cb) {

    var jsFiles = 'src/**/*.js',
        jsDest = 'dist';

    // place code for your default task here
    return gulp.src(jsFiles)
        .pipe(concat('ux.js'))
        .pipe(gulp.dest(jsDest));
}

exports.default = buildJS