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
          "index.html": ["templates/index.jade"]
          //"portfolio/index.html": ["templates/portfolio.jade"]
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
          'js/jquery.easing.1.3.js',
          'js/underscore.js',
          'js/backbone.js',
          'js/jquery.transit.js',
          'js/jquery.onepage-scroll.js',
          'js/jgravity.js',
        ],
        custom: [
          'js/slides.js'
        ],
        src: [ '<%= concat.dist.libraries %>', '<%= concat.dist.custom %>' ],
        dest: 'site.dev.js'
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
      js: {
        files: ['<%= concat.dist.src %>'],
        tasks: ['js']
      },
      css: {
        files: ['less/*.less','less/*/*.less'],
        tasks: ['less']
      },
      jade: {
        files: ['templates/*.jade' ],
        tasks: ['jadetask']
      }
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
  

  grunt.registerTask( 'default', ['jade', 'concat', 'less', 'uglify', 'notify']);
  grunt.registerTask( 'css', ['less', 'notify']);
  grunt.registerTask( 'js', [ 'concat', 'uglify', 'notify']);
  grunt.registerTask( 'jadetask', [ 'jade', 'notify']);

};
