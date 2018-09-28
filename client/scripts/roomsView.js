var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      Rooms.add();
    });
  },

  renderRoom: function(roomName) {
    var newroom = $('<div></div>').text(roomName);
    RoomsView.$select.append(newroom);
  }

};
