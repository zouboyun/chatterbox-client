var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(messageObj) {
    MessagesView.$chats.prepend(MessageView.render(messageObj));
    $('.username').on('click', function() {
      Friends.toggleStatus();
    });
  }

};