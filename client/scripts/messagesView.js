var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(messageObj) {
    var message = $('<div></div>');
    var username = $('<a class="username"></a>').text(`${messageObj.username} says: `);
    var text = $('<p></p>').text(messageObj.text);
    var room = $('<p></p>').text(messageObj.roomname);
    message.append(username, text, room);
    MessagesView.$chats.append(message);
    username.on('click', function() {
      Friends.toggleStatus();
    });
  }

};