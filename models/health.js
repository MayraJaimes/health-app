var orm = require("../config/orm.js");

var health = {
  all: function(cb) {
    orm.all("entries", function(res) {
      cb(res);
    });
  },

  selectOne: function(condition, cb) {
    orm.selectOne("entries", condition, function(res){
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("entries", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("entries", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("entries", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = health;
