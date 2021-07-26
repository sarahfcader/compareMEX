var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const startDate = new Date(2021, 5, 1); //start tracking index from June 1
const today = new Date(); //today's date
var dateCursor = startDate;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("compareMEX");

    //get number of days between tracking start (Jun 01 2021) and today
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    for (var i=0; i<diffDays; i++) {
        var query = { date : dateCursor };
        var update = { $setOnInsert: { date : dateCursor,
                                       total_value_sold: {
                                           "AK-47 | Redline (Field-Tested)" : 0,
                                           "Spectrum 2 Case" : 0,
                                           "AWP | Asiimov (Field-Tested)" : 0,
                                           "AWP | Asiimov (Battle-Scarred)" : 0,
                                           "Glock-18 | Water Elemental (Minimal Wear)" : 0,
                                           "Desert Eagle | Blaze (Factory New)" : 0,
                                           "Operation Broken Fang Case" : 0,
                                           "★ StatTrak™ Karambit | Doppler (Factory New)" : 0,
                                           "AWP | Pit Viper (Field-Tested)" : 0,
                                           "Glock-18 | Candy Apple (Minimal Wear)" : 0,
                                           "Five-SeveN | Monkey Business (Field-Tested)" : 0,
                                           "★ M9 Bayonet | Doppler (Factory New)" : 0,
                                           "★ M9 Bayonet" : 0,
                                           "★ M9 Bayonet | Slaughter (Factory New)" : 0,
                                           "Sticker | Fnatic | Katowice 2014" : 0
                                       },
                                       volume_sold: {
                                            "AK-47 | Redline (Field-Tested)" : 0,
                                           "Spectrum 2 Case" : 0,
                                           "AWP | Asiimov (Field-Tested)" : 0,
                                           "AWP | Asiimov (Battle-Scarred)" : 0,
                                           "Glock-18 | Water Elemental (Minimal Wear)" : 0,
                                           "Desert Eagle | Blaze (Factory New)" : 0,
                                           "Operation Broken Fang Case" : 0,
                                           "★ StatTrak™ Karambit | Doppler (Factory New)" : 0,
                                           "AWP | Pit Viper (Field-Tested)" : 0,
                                           "Glock-18 | Candy Apple (Minimal Wear)" : 0,
                                           "Five-SeveN | Monkey Business (Field-Tested)" : 0,
                                           "★ M9 Bayonet | Doppler (Factory New)" : 0,
                                           "★ M9 Bayonet" : 0,
                                           "★ M9 Bayonet | Slaughter (Factory New)" : 0,
                                           "Sticker | Fnatic | Katowice 2014" : 0
                                       }
                                    } 
                    }//add in new date entries for graph
        const options = { upsert: true };

        dbo.collection("index").updateOne(query, update, options);
        dateCursor.setDate(dateCursor.getDate() + 1);
    }

    db.close();
});



