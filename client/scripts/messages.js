var Messages = {

  messagesStorage: {}, // store messages in local storage, obj key is roomname, value is an array of messages in that room

  create: function(username, text, roomname) {
    return {
      username: username,
      text: text,
      roomname: roomname
    };
  },

  set: function(serverData) {
    // push to messagesStorage based on their roomname
    Rooms.roomsStorage.forEach(roomname => {
      Messages.messagesStorage[roomname] = [];
    });
    serverData.forEach(messageObj => {
      if (Messages.messagesStorage[messageObj.roomname] !== undefined) {
        Messages.messagesStorage[messageObj.roomname].push([messageObj.username, messageObj.text]);
      }
    });
  },

  render: function() {
    MessagesView.renderMessage();
  }
};