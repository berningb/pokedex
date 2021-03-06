var express = require('express');
var orm = require("orm");
var app = express();
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/pages", express.static(__dirname + '/pages'));
app.use("/images", express.static(__dirname + '/images'));


app.use(orm.express("mysql://ayylmao:berningman123@mysql.hlaingfahim.com/w3pokedex", {

    define: function (db, models, next) {
        models.monster = db.define("monster", {
            name: String,
            number: String,
            type1: String,
            type2: String,
            baseHp: Number,
            baseAtk: Number,
            baseDef: Number,
            baseSpAtk: Number,
            baseSpDef: Number,
            baseSpeed: Number,
            totalStats: Number,
            description: String

        });

        models.weakness = db.define("weakness", {
            name: String
        });

        models.ability = db.define("ability", {
            name: String,
            description: String
        });

        models.monster.hasMany('weakness', models.weakness, {}, {
            autoFetch: false
        });
        models.monster.hasMany('ability', models.ability, {}, {
            autoFetch: false
        });


        next();
    }
}));


app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    req.models.monster.all(function (err, results) {
        res.render('home', {
            monArr: results
        });
    });
});


app.get('/monster/:id', function (req, res) {
    req.models.monster.get(req.params.id, function (err, results) {
        results.getWeakness(function (err, weaknesses) {
            results.weakness = weaknesses;
            results.getAbility(function (err, abilities) {
                results.ability = abilities;
                res.render('singleMon', {
                    monArr: results
                });
            });
        });



    });
});

app.listen(3000);