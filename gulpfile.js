const {
        src,
        dest,
        parallel,
        series,
        watch
    } = require('gulp'),
    browsersync = require('browser-sync').create(),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    sass = require('gulp-sass')(require('sass')),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify-es').default,
    ttf2woff2 = require('gulp-ttftowoff2'),
    twig = require('gulp-twig'),
    path = {
        build: {
            html: "./build/",
            css: "./build/css/",
            js: "./build/js/",
            img: "./build/img/",
            fonts: "./build/fonts/",
        },
        src: {
            html: ["./src/layout/*.twig", "!src/layout/**/_*.twig"],
            css: "./src/scss/*.{css,scss}",
            js: "./src/js/**/*.js",
            img: "./src/img/**/*",
            fonts: "./src/fonts/**/*",
        },
        watch: {
            html: "./src/layout/**/*.twig",
            css: "./src/scss/**/*.{scss,css}",
            js: "./src/js/**/*.js",
            img: "./src/img/**/*"
        },
        clean: "./" + "build/",
    };
const npmPath ='./node_modules';
function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./build/"
        },
        port: 3000,
        notify: false
    })
}
function html() {
    return src(path.src.html)
        .pipe(twig())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function style() {
    return src([
        npmPath + '/@fancyapps/fancybox/dist/jquery.fancybox.css',
        npmPath + '/swiper/swiper-bundle.min.css',
        path.src.css

    ])
        .pipe(eval(sass)({
            silenceDeprecations: ['legacy-js-api'],
        }))
        .pipe(concat('app.min.css'))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 10 versions"],
                cascade: true
            })
        )
        .pipe(cleancss({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img, { encoding: false })
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function scripts() {
    return src([
        npmPath + '/bootstrap/dist/js/bootstrap.bundle.js',
        npmPath + '/swiper/swiper.js',
        npmPath + '/jquery/dist/jquery.min.js',
        npmPath + '/imask/dist/imask.js',
        npmPath + '/@fancyapps/fancybox/dist/jquery.fancybox.js',
        npmPath + '/select2/dist/js/select2.full.js',
        npmPath + '/nouislider/dist/nouislider.js',
        npmPath + '/swiper/swiper-bundle.min.js',

        path.src.js
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('./build/js/'))
}

function watchStart() {
    watch([path.watch.html], html);
    watch([path.watch.css], series(style));
    watch([path.watch.js], scripts);
    watch([path.watch.img], images);
}

function cleandist() {
    return src('./build', {
        allowEmpty: true
    }).pipe(clean())
}

exports.default = parallel(html, style, scripts, fonts, images, browserSync, watchStart);
exports.build = parallel(cleandist, html, style, scripts, fonts, images);
