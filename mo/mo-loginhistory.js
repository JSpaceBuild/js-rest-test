var User = require("./mo-user");
var schema = [
    {id:"id", field: "id", type: "string", primaryKey: true},
    {id:"ldate", field: "date", type: "date", nullable:false},
    {id:"user", field: "userid", type: "ref", namespace: "net.juniper.mo.test.loginhistory"},
    {id:"online", field: "online", type: "boolean"}
];

var options = {
    schema: schema,
    namespace: "net.juniper.mo.test.user",
    table: "test_history"
};

var History = Jx.ModelUtil.createModel(options);
module.exports = {};