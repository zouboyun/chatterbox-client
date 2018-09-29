var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // event handlers
    RoomsView.$button.on('click', function() {
      Rooms.add();
    });
    RoomsView.$select.change(function() {
      MessagesView.renderMessage();
    });
  },

  render: _.template(`
    <option><%-roomname%></option>
  `),

  renderRoom: function() {
    RoomsView.$select.empty();
    Rooms.roomsStorage.forEach(roomname => {
      RoomsView.$select.append(RoomsView.render({roomname: roomname}));
    });
  }

};
