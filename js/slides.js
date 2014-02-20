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
      _.bindAll(this, 'before', 'after', 'slide2')
      this.options = _.defaults(this.options, {beforeMove: this.before, afterMove: this.after } )
      this.$el.onepage_scroll( this.options )
    },

    before : function( index ) {
      var section = this.$('section').eq(index-1).find('.inner')
      section.css({marginTop: -section.height()/4})
//      this.$('section').eq(index-1).find('img').transit({ marginTop : 0 }, 1300 )
    },

    after : function( index ) {
    },

    slidebefore2 : function() {
    },

    slide2 : function() {
      var stop = this.$('section.two div.wrapper')
    },
  
    slide3 : function() {
    
    }
  })

  var slide = new Slides;

});
