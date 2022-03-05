global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),

    path: {
        serveDir: './app/build',
        tasks: require('./gulp/config'),

        src: {
            html: './app/src/*.html',
            style: './app/src/style/*.*',
            js: './app/src/js/*.*',
            img: './app/src/images/*.{jpg,png,svg,jpeg,jfif,gif,webp}',
            fonts:'./app/src/**/*.*'
        },
        build: {
            html: './app/build',
            style: './app/build/style',
            js: './app/build/js',
            img: './app/build/images',
            fonts:'./app/build/fonts'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: ['./app/src/style/*.*', './app/src/**/*.*'],
            js: './app/src/js/*.*',
            img: './app/src/images/*.{jpg,png,svg,jpeg,jfif,gif,webp}',
            fonts:'./app/src/**/*.*'
        }

    },
    tasks: {
        default: ['html', 'style', 'js', 'img','fonts', 'serve', 'watch'],
        build: ['html', 'style', 'js', 'img','fonts']
    }

}

$.path.tasks.forEach(tasksPath => require(tasksPath)());

for (const key in $.tasks) {
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}