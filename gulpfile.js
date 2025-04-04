import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import path, { dirname } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import eslint from 'gulp-eslint';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import purgeCss from 'gulp-purgecss';
import purgeCssConfig from './purgecss.config.js';
import cleanCSS from 'gulp-clean-css';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import yargs from 'yargs';

const sass = gulpSass(dartSass);
const argv = yargs(process.argv.slice(2)).argv;
const isProduction = argv.prod || argv.production;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Error handler function
function errorHandler(err) {
  this.emit('end'); // Continue watching even if there's an error
}

// Lint JavaScript
export function lintJS() {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber({ errorHandler }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpIf(isProduction, eslint.failAfterError())) // Only fail in production
    .pipe(gulpIf(!isProduction, gulp.dest('assets'))); // Only output JS in dev
}

// Compile SCSS
function styles() {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(plumber({ errorHandler }))
    .pipe(gulpIf(!isProduction, sourcemaps.init())) // Initialize sourcemaps in dev
    .pipe(sassGlob())
    .pipe(
      sass({
        loadPaths: ['node_modules'],
        quietDeps: true,
        silenceDeprecations: ['import'],
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(isProduction, purgeCss(purgeCssConfig)))
    .pipe(gulpIf(isProduction, cleanCSS())) // Minify CSS in production
    .pipe(gulpIf(!isProduction, sourcemaps.write('.'))) // Write sourcemaps in dev
    .pipe(gulp.dest('assets')); // Output files with the same name
}

// Bundle and transpile JavaScript
function scripts() {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber({ errorHandler }))
    .pipe(
      webpackStream(
        {
          mode: isProduction ? 'production' : 'development',
          entry: Object.fromEntries(glob.sync('./src/js/*.js').map((file) => [path.basename(file, '.js'), `./${file}`])),
          output: {
            path: `${__dirname}/assets`,
            filename: '[name].js',
          },
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } },
              },
            ],
          },
          resolve: {
            modules: ['node_modules'],
            extensions: ['.js'],
          },
        },
        webpack
      )
    )
    .pipe(gulp.dest('assets'));
}

// Watch files for changes
export function watchFiles() {
  gulp.watch('src/scss/**/*', styles);
  gulp.watch('src/js/**/*', gulp.series(lintJS, scripts)).on('error', errorHandler);
}

// Development and Production tasks
export const dev = gulp.series(lintJS, gulp.parallel(styles, scripts), watchFiles);
export const build = gulp.series(lintJS, gulp.parallel(styles, scripts));

export default isProduction ? build : dev;
