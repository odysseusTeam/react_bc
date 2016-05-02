/**
 * Created by liang on 2016/4/7.
 */
var db = openDatabase('spring', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');

})
db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>查询记录条数: " + len + "</p>";
        document.querySelector('#status').innerHTML +=  msg;

        for (i = 0; i < len; i++){
            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
            document.querySelector('#status').innerHTML +=  msg;
        }
    }, null);
});
