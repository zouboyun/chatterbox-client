var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var room = $('#rooms select :selected').text();
    var text = $('#message').val();
    $('#message').val('');
    var message = Messages.create(App.username, text, room);
    Parse.create(message, null, null);
    console.log('click!', message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};