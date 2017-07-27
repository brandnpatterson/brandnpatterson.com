import gulp       from 'gulp';
import del        from 'del';
import eslint     from 'gulp-eslint';
import nodemon    from 'gulp-nodemon';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';
import webpack    from 'webpack-stream';

var reload = sync.reload;

gulp.task('build', ['scripts', 'styles']);

gulp.task('clean', del.bind(null, ['public/css', 'public/js'], {read: false}));

gulp.task('default', ['server', 'watch']);

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/*', '!public/includes/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nodemon', (cb) => {
	var started = false;
	return nodemon({
		script: 'app.js',
	}).on('start', () => {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('scripts', () => {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js'));
});

gulp.task('server', ['nodemon'], () => {
  sync.init(null, {
    proxy: 'http://localhost:8887',
    notify: false,
    files: 'public/**/*.*',
    port: 8888,
    ext: '.pug'
  });
});

gulp.task('styles', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/js/**/*', ['scripts', reload])
  gulp.watch('src/sass/**/*', ['styles', reload]);
  gulp.watch('views/*.pug', reload);
  gulp.watch('views/components/*.pug', reload);
});
