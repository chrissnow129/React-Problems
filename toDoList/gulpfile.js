const gulp = require('gulp');

const sass = require('gulp-sass');

const nodemon = require('gulp-nodemon');

// Explanation for Students ---- This is for those pesky experimental features of css that are not available in all browsers without prefixes like webkit and moz
const autoprefixer = require('gulp-autoprefixer');

// Explanation for Students ---- This is the mastermind that will open up our code in a browser window
const browserSync = require('browser-sync').create();

// Explanation for Students ---- This is a browserSync method that reloads the page we wangt whenever we make a change to have the page reload
const reload = browserSync.reload;

// Explanation for Students ---- This is a NODEJS standard method that lets us call scripts in our package.json or node_modules from our code
var exec = require('child_process').exec;


// Explanation for Students ---- This is the brain child for our self made development server

gulp.task('default', (cb) => {
	// Compile Styles
	exec('npm run styles', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// Compile REACT
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// SERVE BACKEND
	nodemon({
	 script: 'server.js',
	 env: { 'NODE_ENV': 'development'}
 });
 // SERVE  FRONT END WITH PROXY TO BACKEND
	browserSync.init({
	 proxy: {
		 target: 'http://localhost:8000',
		 ws: true
	 },
	 serveStatic: ['./public']
	});
	// SET UP WATCJERS TO LISTEN TO CHANGES IN FILES
 	gulp.watch('./src/css/**/*',  gulp.task('styles'));
	gulp.watch('./src/components/**/*', gulp.task('webpack'));
	gulp.watch('./src/*', gulp.task('webpack'))
	// LISTEN FOR WHEN TO RELOAD PAGES
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'./public/js/**/.#*js',
			'./public/css/**/.#*css',
			'./src/**/*'
		])
		.on('change', reload);
		cb()
});

// Explanation for Students ---- This is compiles our styles
gulp.task('styles', (cb) => {
	gulp
		.src('src/css/**/*.css')
		// .pipe(
		// 	sass({
		// 		outputStyle: 'compressed'
		// 	}).on('error', sass.logError)
		// )
		.pipe(
			autoprefixer({
				cascade: false
			})
		)
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
		cb()
});


// Explanation for Students ---- This is for the development build
gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// Explanation for Students ---- This is for the production build
gulp.task('build', cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
