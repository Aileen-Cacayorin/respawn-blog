import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        category: this.get('category'),
        image: this.get('image'),
        title: this.get('title')
      };
      this.sendAction('save', params);
    }
  }
});
