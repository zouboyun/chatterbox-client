var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(messageObj) {
    var message = $('<p></p>').text(messageObj.text);
    MessagesView.$chats.append(message);
  }

};