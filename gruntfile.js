module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      dist: {
        src: [
          'js/jquery-2.1.1.js',
          'js/bootstrap.js',
          'js/bxslider/jquery.bxslider.js',
          'js/script.js'
        ],
        dest: 'js/production.js'
      }
    },

    uglify: {
      build: {
        src: 'js/production.js',
        dest: 'js/production.js'
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          optimization: 2
        },
        files: {
          'production.css': 'less/style.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat','uglify','less']);
  grunt.registerTask('dev', ['concat','less']);
};