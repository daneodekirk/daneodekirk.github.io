jQuery(function($) {

  var SplashModel = Backbone.Model.extend({})

  var SplashCollection = Backbone.Collection.extend({
  
    model: SplashModel,

    url: 'site.json',

   initialize: function( options ) {
      this.fetch();
    }

  })

  var Splash = Backbone.View.extend({

    DURATION: 700,

    template: _.template( $('#info-template').html() ),

    events: {
      'click a span' : 'info',
      'click span.close' : 'close',
      'click a.tools' : 'showtools',
      'mouseover a.project' : 'changeColor'        
    },

    initialize: function() {
      this.$bg    = $('.background')
      this.$info  = $('#info')
      this.$tools = $('#tools')
    },

    info: function (){
      this.$bg.fadeOut( _.bind( this.render, this ))
      return false;
    },

    render: function(){
      var info = _.pluck( this.collection.toJSON(), this.$target.data().site )
      this.hideTools();
      this.$info.html( this.template( _.first( info ) ) ).fadeIn()
    },

    changeColor: function( e ) {
      this.$target = $(e.target)
      this.setTextColor()
      this.$bg.transit({ backgroundColor: this.color(), duration: this.DURATION, queue:false } )
    },

    setTextColor: function() {
      this.$target.siblings().css({ color: 'inherit' } )        
      this.$target.css({color: this.color() })
    },

    color: function() {
      return this.$target.data().color;
    },

    close: function() {
      this.$info.fadeOut( _.bind( this.showSplash, this ) ) 
    },

    showSplash: function() {
      this.$bg.fadeIn() 
    },

    showtools: function() {
      this.$tools.toggle() 
    },

    hideTools: function() {
      this.$tools.hide()            
    }
  
  })

  $(document).ready(function() {
    var splashcollection = new SplashCollection()
      , splash =  new Splash({ el: $('.container'), collection : splashcollection });
  })

});
