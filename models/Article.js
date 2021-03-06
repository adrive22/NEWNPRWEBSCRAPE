var mongoose = require("mongoose");

//saving reference to the schema constructor
var Schema = mongoose.Schema;

//using the schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({
    // `title` is required and of type String
    title: {
      type: String,
      required: true
    },
    // `link` is required and of type String
    date: {
      type: Date,
      required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    link: {
      type: String,
      ref: true
    }
  });
  
  // This creates our model from the above schema, using mongoose's model method
  var Article = mongoose.model("Article", ArticleSchema);
  
  // Export the Article model
  module.exports = Article;