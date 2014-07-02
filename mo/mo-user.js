var schema = [
    {id:"uid", field: "id", type: "string", primaryKey: true},
    {id:"uname", field: "name", type: "string", nullable:false},
    {id:"sex", field: "sex", type: "int"},
    {id:"online", field: "online", type: "boolean"},
    {id:"loginhistoty", type: "list", namespace: "net.juniper.mo.test.loginhistory"},
    {id:"userdetail", type:"ref", namespace: "net.juniper.mo.test.userdetail"}
];

var options = {
    namespace: "net.juniper.mo.test.user",
    schema: schema,
    table: "test_user"
};
var User = Jx.ModelUtil.createModel(options);
module.exports = User;