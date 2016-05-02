/**
 * Created by liang on 2016/4/7.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'blog',
    port: 3306
});
conn.connect();

// 查询
conn.query('SELECT * from user ', function(err, result) {
    if (err) throw err;
    console.log(result);
})

//新增
// conn.query('insert into user (username,password) values("huxiaona","123456")', function(err, result) {
//     if (err) throw err;
//     console.log(result);
// })

//删除
// conn.query('delete from user where username="wupeigui"', function(err, result) {
//     if (err) throw err;
//     console.log(result);
// })

// conn.query('update user set id="1" where username="huxiaona"',function(err,result){
//     if (err) {throw err};
//     console.log("修改数据成功");
// })

conn.end();