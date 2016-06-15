eslint-config-iwt
==================

[ESLint](http://eslint.org/) configuration file for IWT Health node packages.

## Installation

Include `.eslintrc.json` in your project with the following:

    {
        "extends": "iwt"
    }

## Grunt Usage

Install grunt-eslint:

    npm install --save-dev git+ssh://git@github.com:iwtsolutions/eslint-config-iwt.git
    npm install --save-dev grunt-eslint

Update Gruntfile.js

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            eslint: {
                options: {
                    configFile: '.eslintrc.json'
                },
                target: '.'
            }
        });

        grunt.loadNpmTasks('grunt-eslint');

        grunt.registerTask('default', [ 'eslint' ]);
        grunt.registerTask('lint', 'eslint');
    };

#### Optional usage:

    npm install -g eslint

From command line, run `eslint .` or `eslint filename.js`. See the [command line interface](http://eslint.org/docs/user-guide/command-line-interface) guide for more options.
