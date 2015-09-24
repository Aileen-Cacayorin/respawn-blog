import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    showUpdateForm() {
      this.set('showUpdateForm', true);
    },

    updatePost(model){

      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        category: this.get('category'),
        image: this.get('image'),
        date: new Date(this.get('date'))
      };
      this.sendAction('updatePost', model, params);
      this.set('showUpdateForm', false);
    }
  }
});
