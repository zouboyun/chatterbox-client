var Messages = {
  render: function(messageObjArr) {
    for (var i = 0; i < 10; i++) {
      var username = messageObjArr[i].username;
      var text = messageObjArr[i].text;
      var roomname = messageObjArr[i].roomname;
      if (username !== undefined && text !== undefined && roomname !== undefined) {
        if (text.length > 100) {
          text = text.substring(0, 100);
        }
        if (roomname.length > 100) {
          roomname = roomname.substring(0, 100);
        }
        var msg = {
          username: username,
          text: text,
          roomname: roomname
        };
      }
      if (roomname === $('#rooms select :selected').text()) {
        MessagesView.renderMessage(msg);
      }
    }
  },

  create: function(username, text, roomname) {
    return {
      username: username,
      text: text,
      roomname: roomname
    };
  },

  beautify: function(messageObj) {
    if (messageObj.roomname.length === 0) {
      messageObj.roomname = 'empty room';
    }
    if (messageObj.text.length > 100) {
      messageObj.text = messageObj.text.substring(0, 100);
    }
    if (messageObj.roomname.length > 100) {
      messageObj.roomname = messageObj.roomname.substring(0, 100);
    }
  }
};