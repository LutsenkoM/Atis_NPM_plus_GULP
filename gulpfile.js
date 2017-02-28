var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');

var config = {
        'src': './src',
        'dest': './dist',
        'html': {
            'src': './src/*.html',
            'dest': './dist/'
        },
        'sass': {
            'dest': './dist/css',
            'src': './src/style/sass/main.scss'
        },
        'js': {
            'src': [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/tether/dist/js/tether.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './node_modules/slick-carousel/slick/slick.min.js',
                './node_modules/masonry-layout/dist/masonry.pkgd.min.js',
                './src/js/*.js'
            ],
            'dest': './dist/js'
        },
        'img': {
            'dest': './dist/images/',
            'src': './src/images/*'
        }
    };

