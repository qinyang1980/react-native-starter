const gulp = require('gulp');
const gulp_tslint = require('gulp-tslint');
const del = require('del');
const shell = require('gulp-shell');
const fs = require('fs-extra');
const path = require('path');

////////////////////////////////////////////////////

// 通过NODE_ENV来设置环境变量，如果没有指定则默认为开发环境
const DEV = 'development';
const PRO = 'production';

let env = process.env.NODE_ENV || DEV;
env = env.toLowerCase();

console.log(`The env is (${env})`);

////////////////////////////////////////////////////
gulp.task('start', ['clean', 'tslint'], shell.task(['yarn tsc:watch']));
gulp.task('build', ['clean', 'tslint'], shell.task(['yarn tsc']));
gulp.task('test', ['tslint'], shell.task(['node node_modules/jest/bin/jest.js --watch']));
gulp.task('run-ios', ['build'], shell.task(['node node_modules/react-native/local-cli/cli.js run-ios']));
gulp.task('run-android', ['build'], shell.task(['node node_modules/react-native/local-cli/cli.js run-android']));

gulp.task('tslint', () => {
  return gulp
    .src(['./src/**/*.@(ts|tsx)', '!**/*.d.ts', '!node_modules/**'])
    .pipe(
      gulp_tslint({
        formatter: 'verbose'
      })
    )
    .pipe(
      gulp_tslint.report({
        emitError: true,
        summarizeFailureOutput: true
      })
    );
});

///////////////////////////////////////////////////

gulp.task('clean', () => {
  return del('./build', { force: true });
});
