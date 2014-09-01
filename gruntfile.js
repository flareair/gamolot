module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      dist: {
        src: [
          'js/*.js'
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
          'styles/css/production.css': 'styles/less/style.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['styles/less/*.less'],
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
  grunt.registerTask('dev', ['watch']);

};