var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      Rooms.add();
    });
  },

  render: _.template(`
    <option><%-roomname%></option>
  `),

  renderRoom: function(roomname) {
    RoomsView.$select.append(RoomsView.render({roomname: roomname}));
  }

};
