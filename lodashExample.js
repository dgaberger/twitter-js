const _ = require('lodash');

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = _.clone(objects);

console.log(deep);