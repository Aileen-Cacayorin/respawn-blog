import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body')
      };
      this.sendAction('addComment', params)
    }
  }

});
