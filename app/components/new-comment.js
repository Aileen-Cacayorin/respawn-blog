import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        // debugger;
        author: this.get('author'),
        post: this.get('model'),
        date: this.get('date'),
        body: this.get('body')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
