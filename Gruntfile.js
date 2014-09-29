module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        myBanner: '/*********************************************************** \x0D' +
                '   Project: <%= pkg.description %> \x0D' +
                '   Version: <%= pkg.version %> \x0D' +
                '   Created by: <%= pkg.author.name %> <%= pkg.author.email %> \x0D' +
                '   Generated on: <%= grunt.template.today() %>\x0D' +
                '/***********************************************************/\x0D',
        

        // ***************************************************
        //  TASK "TEST"
        // ***************************************************
        // ***************************************************
        jshint: {
            
            files: ['dev/js/*.js'],

            options: {
                reporter: require('jshint-stylish'),
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                lastsemic: true,
                asi: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            },
        },
        // <<<<<<<<<<<<<<<<<<<<< TASK "TEST" END




        // ***************************************************
        //  TASK "BUILD"
        // ***************************************************
        // ***************************************************

        // Javascript Minified
        uglify: {
           
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.js': ['dev/js/*.js']
                },
                options: {
                    banner: '<%= myBanner %>',
                    sourceMap: true,
                    sourceMapName: 'dist/js/<%= pkg.name %>.sourcemap.map',
                    compress: {
                        drop_console: true,
                    }
                }
                
            }
        },

        // LESS to CSS
        less: {
            dev: {
                options: {
                    banner:'<%= myBanner %>'
                },
                files: {
                    "dist/css/<%= pkg.name %>.css": "dev/less/main.less"
                }
            }
        },

        // Images Minification
        imagemin : {
            dynamic: {                         
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'dev/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
        // <<<<<<<<<<<<<<<<<<<<< TASK "BUILD" END




        // ***************************************************
        //  TASK "REPORT"
        // ***************************************************
        // ***************************************************
        plato: {
            my_task: {
                options: {
                    // Task-specific options go here.
                    exclude: /\.min\.js$/
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'reports/': ['dev/**/*.js']
                }
            }
        },
        // <<<<<<<<<<<<<<<<<<<<< TASK "REPORT" END


        
        watch: {
            scripts: {
                files: 'dev/js/*.js',
                tasks: ['jshint','uglify'],
            },
            styles: {
                files: 'dev/less/*.less',
                tasks: ['less'],
            }
        }

    });


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-plato');

//When you type "grunt" this task(s) will run as default:
grunt.registerTask('default', ['watch']);

//Build, Test, Report
grunt.registerTask('build', ['uglify','imagemin','less']);
grunt.registerTask('test', ['jshint']);
grunt.registerTask('report', ['plato']);
grunt.registerTask('dev', ['watch']);

};