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
            }
        }
    );

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};