import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      var params = {
        author: this.get('author'),
        date: new Date(),
        body: this.get('body'),
        category: this.get('category'),
        image: this.get('image'),
        title: this.get('title')
      };
      debugger;
      this.sendAction('save', params);
    }
  }
});
