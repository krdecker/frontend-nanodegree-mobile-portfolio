// Gruntfile.js

module.exports = function(grunt) { // Project configuration.
    // krd comment - feed a configuration json into the initConfig method of grunt function

    grunt.initConfig(
        { //this is the config object between these curly braces
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'js/perfmatters.js',
                    dest: 'js/perfmatters.min.js'
                }
            },
            imagemin: {
                dynamic: {                         // Another target
                    files: [{
                        expand: true,                  // Enable dynamic expansion
                        cwd: 'img/',                   // Src matches are relative to this path
                        src: ['*.{png,jpg,gif}'],   // Actual patterns to match
                        dest: 'img/comp/'                  // Destination path prefix
                    }]
                }
            },
            cssmin: {
                toplevel: {
                    files: [{
                        expand: true,
                        cwd: 'css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'css/',
                        ext: '.min.css'
                    }]
                }
            }
        }
    );

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Define alias tasks.
    grunt.registerTask('jsmin', ['uglify:build']);


};