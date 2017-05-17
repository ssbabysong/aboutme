//含sass版
module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      output : {
        options: {
          style: sassStyle
        },
        // files: {
        //   './style.css': './sass/style.scss'
        // }
        files: [{
        expand: true,
        cwd: 'sass',
        src: ['*.scss'],
        dest: 'stylesheet',
        ext: '.css'
        }]
      }
    },
    watch: {
      style: {
        files: ['./sass/*.scss'],
        tasks: ['sass']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['sass','watch']);

};

