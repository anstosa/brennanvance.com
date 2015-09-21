'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [
                'Gruntfile.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: [
            'favicon.ico',
            'index.html',
            'dist'
        ],
        copy: {
            favicon: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/favicon.ico',
                    dest: '.'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/img/*',
                    dest: 'dist/img/'
                }]
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            css:    { src: 'dist/css/*' }
        },
        jade: {
            index: {
                files: {
                    'index.html': 'src/index.jade'
                },
            },
            partials: {
                files: {
                    'dist/partials/home.html': 'src/partials/home.jade',
                    'dist/partials/contact.html': 'src/partials/contact.jade'
                },
            },
            options: {
                pretty: true
            }
        },
        sass: {
            compile: {
                options: {
                    style: 'expanded'
                },
                src: 'src/css/BrennanVance.scss',
                dest: 'dist/css/BrennanVance.css'
            }
        },
        usemin: {
            html: ['index.html']
        },
        useminPrepare: {
            options: {
                dest: '.'
            },
            src: ['index.html']
        },
        watch: {
            files: [
                'Gruntfile.js',
                'src/**/*'
            ],
            tasks: ['default'],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'jade',
        'sass'
    ]);

    grunt.registerTask('release', [
        'clean',
        'default',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);

};
