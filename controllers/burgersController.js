
var db = require("../models");

const Op = Sequelize.Op;


module.exports= function(app){

app.get("/", function(req, res){
    
    db.Burger.findAll({}).then(function(burger){
        res.render("index", burger)
       
    });
});

// app.post("/burgers", function(req, res){
    
//     db.Burger.create( [req.body.Burger], function(result){
//         res.send({ id: result.insertId})
//     });

// });

// app.put("/burgers/:id", function(req, res){
//     var id = req.params.id;
//     Burger.upDate(id, function(result){
//         if(result.changedRows ===0 ){
//             return res.status(404).end();
//         }
//         res.status(200).end()

//     });
// });
}
