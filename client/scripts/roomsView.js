var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    var newroom = $('<div></div>').text(roomName);
    RoomsView.$select.append(newroom);
  }

};
