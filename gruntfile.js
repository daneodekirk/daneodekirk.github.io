module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "portfolio/index.html": ["templates/*.jade"]
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        libraries: [
          'js/jquery.js',
          'js/underscore.js',
          'js/backbone.js',
          'js/jquery.transit.js'
        ],
        custom: [
          'js/background.js'
        ],
        src: [ '<%= concat.dist.libraries %>', '<%= concat.dist.custom %>' ],
        dest: 'js/site.dev.js'
      }
    },
    less: {
      development: {
        options: {
          cleancss: true,
          paths: ["assets/css"]
        },
        files: {
          "site.css": "less/site.less"
        }
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
      },
      dist: {
        files: {
          'site.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: [ 'Gruntfile.js', '<%= concat.dist.custom %>' ],
      options: {
        asi: true,
        smarttabs: true,
        laxcomma: true,
        lastsemic: true,
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= concat.dist.src %>', 'templates/*.jade', 'less/*.less' ],
      tasks: ['default']
    },
    notify: {
      watch: {
        options: {
          title: 'Task Complete',
          message: 'Done'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  

  grunt.registerTask('default', ['jade', 'concat', 'less', 'uglify', 'notify']);

};
