var Rooms = {

  roomsStorage: new Set(), // store all the rooms in local storage

  add: function() {
    var newroom = prompt('please input your new room name', 'default');
    Rooms.roomsStorage.add(newroom);
    Messages.messagesStorage[newroom] = Messages.messagesStorage[newroom] || [];
    RoomsView.renderRoom();
    RoomsView.$select.val(newroom);
    // console.log(Rooms.roomsStorage);
  },

  set: function(serverData) {
    // push to roomsStorage
    serverData.forEach(messageObj => {
      var roomname = messageObj.roomname;
      if (roomname !== undefined) {
        if (roomname.length > 0) {
          Rooms.roomsStorage.add(roomname);
        }
      }
    });
    // console.log(Rooms.roomsStorage);
  },

  render: function() {
    RoomsView.renderRoom();
  }
};