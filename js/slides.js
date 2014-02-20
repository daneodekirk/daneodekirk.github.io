jQuery(function() {

  var Slides = Backbone.View.extend({

    el : $('.main'),

    options : {
      sectionContainer: "section",     
      easing: "ease",                  
      animationTime: 1000,             
      pagination: true,                
      updateURL: false,                
      loop: false,                     
      keyboard: true,                  
      responsiveFallback: false
    },
  
    initialize : function( options ) {
      _.bindAll(this, 'before' )
      this.options = _.defaults(this.options, { beforeMove: this.before } )
      this.$el.onepage_scroll( this.options )
    },

    before : function( index ) {
      var section = this.$('section').eq(index-1).find('.inner')
      section.css({marginTop: -section.height()/4})
    }

  })

  var slide = new Slides;

});
