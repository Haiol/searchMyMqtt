var express = require('express');
var router = express.Router();
var util = require('../public/js/node/util.js');

router.get('/:clientCode',(req,res)=>{
    var conn = util.getMySQLConnetion();
    console.log(req.params.clientCode); 
    var query = 'select * from tbl_messages where clientID = ? order by time desc'
    var params = [req.params.clientCode]
    conn.query(query, params, (err, rows, fields)=>{
        if(err)throw err;
        else{
             console.log(rows[0]);
            
            res.send(JSON.stringify(rows));
        }
    })
});

router.get('/:clientCode/limit/:limit',(req,res)=>{
    var conn = util.getMySQLConnetion();
    console.log(req.params.clientCode); 
    var query = 'select * from tbl_messages where clientID = ? order by time desc LIMIT ?'
    var params = [req.params.clientCode,parseInt(req.params.limit)]
    conn.query(query, params, (err, rows, fields)=>{
        if(err)throw err;
        else{
             console.log(rows[0]);
            
            res.send(JSON.stringify(rows));
        }
    })
});

router.get('/:clientCode/topic/:topic',(req,res)=>{
    var conn = util.getMySQLConnetion();
    console.log(req.params.clientCode); 
    var query = 'select * from tbl_messages where clientID = ? And topic = ? order by time desc'
    var params = [req.params.clientCode,req.params.topic+'%']
    conn.query(query, params, (err, rows, fields)=>{
        if(err)throw err;
        else{
             console.log(rows[0]);
            
            res.send(JSON.stringify(rows));
        }
    })
});


module.exports = router;