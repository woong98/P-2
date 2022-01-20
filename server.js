const http = require("http");
const url = require("url");
const fs = require("fs");
const { dir } = require("console");
let mysql = require('mysql2');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let con = mysql.createConnection(
    {
      host:"localhost",
      user:"nodejs",
      password: '545493',
      port : "3306",
      database : "ajou"
    }
  ); //데이터베이스 관련 connection 

let app = express();

app.use(express.static(__dirname)); //경로 지정 방식을 변경 
app.use(bodyParser.json()); //post방식에서 req.body에 접근하기 위해서 사용 
app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, '/mong.html')); //기본적으로는 html파일을 페이지 최초접속시 전송함.
});

con.connect(function(err) //연결. 안의 function은 콜백함수 
    {
      if (err) throw err; //에러처리 
    }
);

app.get('/main', function(req, res) //free형태의 url을 전달받은 경우에
{ 
    con.query("SELECT * FROM contents", function(err, result, fields)
    { //query문에서의 function에대한 정보를 찾아봐야 할 듯 
        if (err) throw err;
        res.send(result);
    });
     //서버에서 table에 접근해서 정보를 불러올 수 있음 
});


app.post('/write', function(req, res) //free형태의 url을 전달받은 경우에
{ 
  const keyNames = Object.keys(req.body);
  const values = req.body;

  con.query(`INSERT INTO ${values.table}(${keyNames[1]}, ${keyNames[2]}, ${keyNames[3]}, ${keyNames[4]}) VALUE('${values.writer}', '${values.date}', '${values.title}', '${values.content}')`, function(err, result, fields)
  { //query문에서의 function에대한 정보를 찾아봐야 할 듯 
     if (err) throw err;
  })
});


app.listen(3000, function()
{
    console.log('example app listening');
});
