var Rooms = {

  existingRooms: {}, // store all the rooms in local storage

  add: function() {
    var newroom = prompt('please input your new room name', 'default');
    RoomsView.renderRoom(newroom);
  },

  get: function() {

  },

  render: function(results) {
    var rooms = [];
    results.forEach(result => {
      if (result.roomname !== undefined && result.text !== undefined) {
        if (result.roomname.length > 50) {
          result.roomname = result.roomname.substring(0, 50);
        }
        if (!rooms.includes(result.roomname)) {
          rooms.push(result.roomname);
        }
      }
    });
    rooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
  }

};