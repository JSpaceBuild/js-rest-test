require("js-rest");
var translateUtil = require("../../js-rest/system/stack/persistence/jmp-translateutil");
var User = require("./../mo/mo-user");
var assert = require("assert");

describe('dynamicsql', function(){
   it('should return default sql for mo', function(){
	var dynamicSql = {
			mo: User,
			sql: function() {
				SELECT_MO()
			}
	};

	translateUtil.translate(dynamicSql, null, function(err, sql){
		assert.equal(sql, "select * from ");
		callback();
	});
  });
});
