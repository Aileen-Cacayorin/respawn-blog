import Ember from 'ember';

export default Ember.Route.extend({
  showUpdateForm: false,

  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    deletePost(model) {
      model.get('comments').forEach(function(comment){
        comment.destroyRecord();
      });
      model.destroyRecord();
      this.transitionTo('index')
    },

    updatePost(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key,params[key]);
        }
      });
      model.save();
      this.transitionTo('show-post', model.id);
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();

      params.post.save();
      this.transitionTo('show-post');

    }
  }
});
