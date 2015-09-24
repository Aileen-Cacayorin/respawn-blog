import Ember from 'ember';

export default Ember.Route.extend({
  showUpdateForm: false,

  model(params) {

    var currentPost = this.store.findRecord('post', params_id);
    var comments = post.get('commments')

    return data {
      post: currentPost,
      comments: comments
    };
  },
  actions: {
    deletePost(model) {
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

    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('index')
    }

  }
});
