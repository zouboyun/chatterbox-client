var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // event handlers
    $('.username').on('click', function() {
      Friends.toggleStatus();
    });
  },

  render: function() {
    // render a single message
  },

  renderMessage: function() {
    MessagesView.$chats.empty();
    var roomSelected = $('#rooms select :selected').text();
    // console.log(Messages.messagesStorage[roomSelected])
    Messages.messagesStorage[roomSelected].forEach(usernameAndText => {
      var messageNode = MessageView.render({
        username: usernameAndText[0],
        text: usernameAndText[1]
      });
      MessagesView.$chats.prepend(messageNode);
      MessagesView.addEventHandler(usernameAndText[0]);
    });
  },

  addEventHandler: function(username) {
    $(`.${username}`).on('click', function() {
      $(`.${username}`).parent().toggleClass('friend');
    });
  }

};