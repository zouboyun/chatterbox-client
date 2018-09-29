var Messages = {

  messages: {}, // store messages in local storage

  render: function(messageObjArr, selectedroomname) {
    for (var i = 0; i < 10; i++) {
      var username = messageObjArr[i].username;
      var text = messageObjArr[i].text;
      var roomname = messageObjArr[i].roomname;
      var msg = {
        username: username,
        text: text,
        roomname: roomname
      };
      if (roomname === selectedroomname) {
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