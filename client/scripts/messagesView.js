var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(messageObj) {
    var message = $('<div></div>');
    var username = $('<p></p>').text(messageObj.username);
    var text = $('<p></p>').text(messageObj.text);
    var room = $('<p></p>').text(messageObj.room);
    message.append(username, text, room);
    MessagesView.$chats.append(message);
  }

};