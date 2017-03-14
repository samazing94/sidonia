var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  forum: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Topic = mongoose.model('Topic', TopicSchema, 'topics');
module.exports = Topic;