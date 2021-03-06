module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            files: {
                src : [
                    '*.html',
                    'css/style.css',
                    'css/bootstrap.css',
                    'css/jquery.mmenu.all.css'
                ],
            },
            options: {
              server: {
                baseDir: "./"
            }
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['browser_sync']);

};