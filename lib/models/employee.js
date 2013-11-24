'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');

// Schema
var EmployeeSchema = new Schema({
  name: String,
  // superiorEmployee: String,
  birthDate: Date,
  githubUsername: String,
  knownTechnologies: { type: [String], index: true },
  // contactInfos: []
});

EmployeeSchema.statics.findByKnownTech = function (tag, callback) {
  return this.model('Employee').find(
      { "knownTechnologies" : new RegExp(tag, "i") },
      'knownTechnologies',
      function (err, result) {
        if (!err) {
          var tags = mergeKnownTechResult(result);
          tags = filterByKnownTech(tags, tag);
          callback(err, tags);
        } else {
          throw err;
        }
    }).limit(20);
};

/*  TODO: Try to move this process into the search query
 *================================*/
var mergeKnownTechResult = function(result){
  // get arrays knownTechnologies
  var listKnownTech = _.map(result, function(item) { return item.knownTechnologies });
  // join arrays
  listKnownTech = _.flatten(listKnownTech);
  // remove duplicated values
  listKnownTech = _.uniq(listKnownTech);
  return listKnownTech;
};

var filterByKnownTech = function(tags, tag){
  if (!tag) { return tags };
  // applies filter by tag
  return _.filter(tags, function(item){
    return new RegExp(tag, "i").test(item);
  });
};

mongoose.model('Employee', EmployeeSchema);
