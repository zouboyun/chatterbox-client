var App = {

  $spinner: $('.spinner img'),

  username: 'pokemon',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      console.log(App.username);
      Rooms.set(data.results);
      Rooms.render();
      Messages.set(data.results);
      Messages.render();
      callback();
    });
  },

  send: function(newMessage) {
    Parse.create(newMessage, (data) => {
      console.log(data, ' data sent successfully!');
    }, (error) => {
      console.log('oops something went wrong ', error);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
