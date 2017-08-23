import gulp       from 'gulp';
import del        from 'del';
import nodemon    from 'gulp-nodemon';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';
import webpack    from 'webpack-stream';

var reload = sync.reload;

// default
gulp.task('default', ['serve', 'build', 'watch']);

gulp.task('build', ['scripts', 'styles']);

// clean
gulp.task('clean', del.bind(null, ['public/css/style.css', 'public/js'], {read: false}));

// server
gulp.task('nodemon', (cb) => {
  var called = false;
  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.babel.js',
      'node_modules/'
    ]
  })
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('serve', ['nodemon'], () => {
  sync.init(null, {
    proxy: 'http://localhost:8887',
    notify: false,
    files: 'public/**/*.*',
    port: 8888,
    ext: '.pug'
  });
});

// build
gulp.task('scripts', () => {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js'));
});

gulp.task('styles', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

// watch
gulp.task('watch', () => {
  gulp.watch('src/js/**/*', ['scripts', reload])
  gulp.watch('src/sass/**/*', ['styles', reload]);
  gulp.watch('views/**/*', reload);
  gulp.watch('data/*', reload);
});
