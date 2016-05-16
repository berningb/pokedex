var orm = require("orm");
orm.connect("mysql://ayylmao:berningman123@mysql.hlaingfahim.com/w3pokedex", function (err, db) {
    if (err) throw err;

    var monster = db.define("monster", {
        name: String,
        type1: String,
        type2: String,
        baseHp: Number,
        baseAtk: Number,
        baseDef: Number,
        baseSpAtk: Number,
        baseSpDef: Number,
        baseSpeed: Number,
        description: String

    });





    monster.sync(function (err) {
        if (err) throw err;

        monster.create({
            name: "Charmander",
            type1: "Fire",
            type2: "None",
            baseHp: 39,
            baseAtk: 52,
            baseDef: 43,
            baseSpAtk: 60,
            baseSpDef: 50,
            baseSpeed: 65,
            description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
        }, function (err) {
            if (err) throw err;
        })
    });
});