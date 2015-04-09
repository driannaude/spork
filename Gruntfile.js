module.exports = function(grunt) {

    var ena = {
        index_src: 'index.html',
        root_dir: '',
        build_dir: 'out/',
        root_external: 'lib/',
        build_js_dir: 'js/',
        build_css_dir: 'css/',
        //External libraries
        js_external_src: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',
            'angular-animate/angular-animate.js',
            'angular-scroll/angular-scroll.js',
            'jquery/dist/jquery.min.js',
            'bootstrap/dist/js/bootstrap.min.js',
            
        ],
        css_external_src: [
            'bootstrap/dist/css/bootstrap.css',
            'components-font-awesome/css/font-awesome.css',
            'animate-css/animate.css',
            'flexboxgrid/dist/flexboxgrid.css',
            
        ],
        //User defined Source
        js_src: ['js/**/*.js'],
        css_src: [
            'css/bootstrap.css',
            'css/animate.css',
            'css/flexboxgrid.css',
            'css/font-awesome.css',
            'css/custom.css',
        ]
    };

    function getTemplateData() {
        function generateScriptInclude(release) {
            /*
             Eventually we may use the [release] arg to 
             specify a development/release build.
            */
            grunt.log.subhead('Building JS script tags for:');
            var script = '';

            //loop through the list of js files
            var options = {
                cwd: ena.root_external
            };
            var external = grunt.file.expand(options, ena.js_external_src).map(function(value) {
                value = value.split('/').pop();
                grunt.log.ok(value + '\n');
                return '<script src="' + ena.build_js_dir + value + '"></script>';
            });

            //loop through the list of js files
            var options = {
                cwd: ena.root_dir
            };
            var internal = grunt.file.expand(options, ena.js_src).map(function(value) {
                value = value.split('/').pop();
                grunt.log.ok(value + '\n');
                return '<script src="' + ena.build_js_dir + value + '"></script>';
            });

            script = external.join('\n') + '\n' + internal.join('\n') + '\n';

            return script;

        }

        function generateCSSInclude(release) {

            var script = '';
            grunt.log.subhead('Building CSS tags for:');

            /* var options = {
                 cwd: ena.root_external
             };
             var external = grunt.file.expand(options, ena.css_external_src).map(function(value) {
                 value = value.split('/').pop();
                 grunt.log.ok(value + '\n');
                 return '<link href="' + ena.build_css_dir + value + '" rel="stylesheet" />';
             });*/

            var options = {
                cwd: ena.build_dir
            };
            var internal = grunt.file.expand(options, ena.css_src).map(function(value) {
                value = value.split('/').pop();
                grunt.log.ok(value + '\n');
                return '<link href="' + ena.build_css_dir + value + '" rel="stylesheet" />';
            });

            script = internal.join('\n') + '\n';

            return script;
        }


        return {
            'js_scripts': generateScriptInclude(false),
            'css_includes': generateCSSInclude(false)
        };
    }


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                beautify: true
            },
            build: {
                files: {
                    'out/js/all.min.js': [
                        'js/*.js'
                    ]
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ["less/**"]
                },
                files: {
                    "out/css/custom.css": ["less/*.less"]
                }
            }
        },

        // Surprisingly, livereload complains when you try to use grunt-contrib-watch instead of grunt-regarde 
        watch: {
            all: {
                // This'll just watch the index.html file, you could add **/*.js or **/*.css
                // to watch Javascript and CSS files too.
                files: ['Gruntfile.js', 'templates/*', '*.html', 'js/*.js', 'less/*.less', 'css/*.css', 'lib/**/*.js'],
                // This configures the task that will run when the file change
                tasks: ['clean:build', 'less', 'copy:main', 'template', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    bases: ['out/'],
                    livereload: true
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },
        template: {
            'process-html-template': {
                options: {
                    data: function() {
                        return getTemplateData();
                    }
                },
                expand: true,
                cwd: ena.root_dir,
                src: ena.index_src,
                dest: ena.build_dir
            }
        },
        copy: {
            main: {
                files: [{
                    //Copy fonts to build dir
                    expand: true,
                    flatten: true,
                    src: [
                        'lib/bootstrap/dist/fonts/*',
                        'lib/components-font-awesome/fonts/*',

                    ],
                    dest: 'out/fonts/',
                    filter: 'isFile'
                }, {
                    //copy html template files
                    expand: true,
                    flatten: true,
                    src: [
                        'templates/*',
                    ],
                    dest: 'out/templates/',
                    filter: 'isFile'
                }, {
                    //copy index file after template compilation
                    expand: true,
                    flatten: true,
                    src: [
                        'index.html',
                    ],
                    dest: 'out/',
                    filter: 'isFile'

                }, {
                    // Copy required external JS files to build/js/
                    expand: true,
                    flatten: true,
                    cwd: ena.root_external,
                    src: ena.js_external_src,
                    dest: ena.build_dir + ena.build_js_dir,
                    filter: 'isFile'

                }, {
                    // Copy required external CSS files to build/css/
                    expand: true,
                    flatten: true,
                    cwd: ena.root_external,
                    src: ena.css_external_src,
                    dest: ena.build_dir + ena.build_css_dir,
                    filter: 'isFile'
                }, {
                    // Copy required JS files to build/js/
                    expand: true,
                    flatten: true,
                    cwd: ena.root_dir,
                    src: ['js/**/*.js'],
                    dest: ena.build_dir + ena.build_js_dir,
                    filter: 'isFile'
                }, {
                    // Copy required img files to build/img/
                    expand: true,
                    flatten: true,
                    cwd: ena.root_dir,
                    src: ['img/**/*'],
                    dest: ena.build_dir + 'img/',
                    filter: 'isFile'
                }],
            },
        },
        clean: {
            build: ["intermediate/", "out/*"]
        },

    });

    //========================
    // Grunt Task Management
    //========================

    // Load the plugin tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-livereload');
    // grunt.loadNpmTasks('grunt-contrib-connect');

    // grunt.loadNpmTasks('grunt-template');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('clean-build', ['clean:build']);

    // Create the `serve` task to serve livereloaded site.
    grunt.registerTask('serve', [
        // 'livereload-start', //fire up livereload
        'clean:build', //clean the build directory
        'express',
        'open',
        'less:development', // compile the less to css
        'copy:main', // copy over css and js files
        'uglify', //compile js to a single file
        'template',
        'watch' // watch root directory for changes.
    ]);

};