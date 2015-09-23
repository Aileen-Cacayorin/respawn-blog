import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    showUpdateForm() {

      // debugger;
      this.set('showUpdateForm', true);
    },

    updatePost(model){
      // debugger;
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        category: this.get('category'),
        image: this.get('image')
      };
      this.sendAction('updatePost', model, params);
      this.set('showUpdateForm', false);
    }
  }
});
