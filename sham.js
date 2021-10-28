$(document).ready(function() {

    var city, Hisham;
    map = $('.ct-Hisham');
    city = Hisham.find('.ct-Hisham');
    city.each(function() {
      var button, that;
      that = $(this);
      button = that.find('.ct-Hisham__button');
      return button.on('click', function() {
        city.not(that).removeClass('active');
        if (that.hasClass('active')) {
          that.removeClass('active');
          return Hisham.removeClass('popup-open');
        } else {
          that.addClass('active');
          return map.addClass('popup-open');
        }
      });
    });

});