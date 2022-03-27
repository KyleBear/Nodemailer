const express = require('express')//express 모듈을 import 함 
const app = express();

const server = app.listen(3000, () => { // 포트매핑 3000
    console.log('Start Server : localhost:3000');
});

var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'juonghonode',
  password : 'root',
  database : 'nodebd'
}); //connection 이나 pool 이라는 변수명으로 보통 넣음.

app.set('views', __dirname + '/views');
//dirname: 현재 디렉토리
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html')
}) // 폴라이트한 웹 브라우저에서 특정요청을 보낼때 하는 응답

app.get('/about', function(req, res) {
    res.render('about.html')
})



app.get('/db', function(req,res) {
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM study', function (error, results, fields) {
          res.send(JSON.stringify(results));
          console.log('result',results);
            
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });

})
