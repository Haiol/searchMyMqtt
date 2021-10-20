var express = require('express');
var router = express.Router();
var util = require('../public/js/node/util.js');
var board = require('../public/js/node/boardApi.js');
var login = require('../public/js/node/loginApi.js');

router.get('/',(req,res)=>{
    res.redirect('/login');
})
router.get('/login',login.getLogin);
router.post('/login',login.postLogin);
router.post('/generate',login.postGen);
router.get('/searchData/:clientID',board.getSearchData);
router.get('/getData/:clientCode/:topic',(req,res)=>{
    var conn = util.getMySQLConnetion();

    var query = 'select * from tbl_messages where clientID = ? AND topic = ? order by time desc'
    var params = [req.params.clientCode,req.params.topic]
    conn.query(query, params, (err, rows, fields)=>{
        if(err)throw err;
        else{
            console.log(rows[0]);
            res.send(JSON.stringify(rows));
        }
    })
});
module.exports = router;
