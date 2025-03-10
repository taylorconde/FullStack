"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
alert("Today is ".concat(today));
var promise = Promise.resolve();
