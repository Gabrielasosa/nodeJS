var express = require('express');
var router = express.Router();

/* GET userlist. */
router.get('/userlist', function(req, res) {
    var db=req.db;
    var collection = db.get("usuarios");
    collection.find({},{}, function(err,doc){
        res.json(doc);


    })
});

/* GET userlist. */
router.get('/:name', function(req, res) {
    var db=req.db;
    var collection = db.get("usuarios");
    var userNameToSearch=req.params.name;
    collection.find({"username":userNameToSearch},{}, function(err,doc){
        res.json(doc);


    })
});

/* POST to adduser. */
router.post('/adduser', function(req, res) {
    var db=req.db;
    var collection = db.get("usuarios");
    collection.insert(req.body,function(err,result){
        res.send((err === null)?{msg:""}:{msg:'error:'+err});
    })


})
/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', function(req, res) {
    var db=req.db;
    var collection = db.get("usuarios");
    var userIdToDelete=req.params.id;
    collection.remove({"_id":userIdToDelete},{}, function(err){
            res.send((err === null)?{msg:""}:{msg:'error:'+err});

            // if(err===null){
            //     res.send({msg:""})
            // }else{
            //     res.send({msg:'error:'+err })
            // }

    })
});

module.exports = router;
