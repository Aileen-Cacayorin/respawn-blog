import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  post: DS.belongsTo('post', {async: true}),
  body: DS.attr(),
  date: DS.attr()
});
