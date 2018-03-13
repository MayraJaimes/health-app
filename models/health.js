var orm = require("../config/orm.js");

var health = {
  all: function(cb) {
    orm.all("health_info", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("health_info", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("health_info", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("health_info", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = health;
