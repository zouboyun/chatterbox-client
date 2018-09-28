var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    var message = $('<p></p>').text(message.text);
    MessagesView.$chats.append(message);
  }

};