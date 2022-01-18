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
      database : "mongsite"
    }
  ); //데이터베이스 관련 connection 

let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, '/mong.html'));
});

app.get('/free', function(req, res) //free형태의 url을 전달받은 경우에
{ 
    con.connect(function(err) //연결. 안의 function은 콜백함수 
    {
      if (err) throw err; //에러처리 
     //유효한 경우 
     con.query("SELECT * FROM free", function(err, result, fields)
     { //query문에서의 function에대한 정보를 찾아봐야 할 듯 
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
     //서버에서 table에 접근해서 정보를 불러올 수 있음 
   })
});



app.post('/write', function(req, res) //free형태의 url을 전달받은 경우에
{ 
    con.connect(function(err) //연결. 안의 function은 콜백함수 
    {
      if (err) throw err; //에러처리 
      //req.body를 이용해서 키와 그 value를 분기시켜야한다.
      const keyNames = Object.keys(req.body);
      const values = req.body;

      con.query(`INSERT INTO ${values.table}(${keyNames[1]}, ${keyNames[2]}, ${keyNames[3]}, ${keyNames[4]}) VALUE('${values.writer}', '${values.date}', '${values.title}', '${values.content}')`, function(err, result, fields)
      { //query문에서의 function에대한 정보를 찾아봐야 할 듯 
        if (err) throw err;
   })
})});


app.listen(3000, function()
{
    console.log('example app listening');
});
