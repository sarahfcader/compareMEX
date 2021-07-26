var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const fetch = require("node-fetch");

const REDLINE = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=AK-47%20|%20Redline%20(Field-Tested)&full=true'];
const SPECTRUM = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Spectrum%202%20Case&full=true'];
const ASIIMOVFT = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=AWP%20%7C%20Asiimov%20(Field-Tested)&full=true'];
const ASIIMOVBS = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=AWP%20|%20Asiimov%20(Battle-Scarred)&full=true']
const WATERELEM = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Glock-18%20%7C%20Water%20Elemental%20(Minimal%20Wear)&full=true'];
const DEAGLE = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Desert%20Eagle%20%7C%20Blaze%20(Factory%20New)&full=true'];
const BROKENFANG = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Operation%20Broken%20Fang%20Case&full=true'];
const KARAMBIT = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=%E2%98%85%20StatTrak%E2%84%A2%20Karambit%20%7C%20Doppler%20%28Factory%20New%29&full=true'];
const PITVIPER = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=AWP%20%7C%20Pit%20Viper%20(Field-Tested)&full=true'];
const CANDYAPPLE = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Glock-18%20%7C%20Candy%20Apple%20(Minimal%20Wear)&full=true'];
const MONKEYBUSINESS = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Five-SeveN%20%7C%20Monkey%20Business%20(Field-Tested)&full=true'];
const BAYONETDOPPLER = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=%E2%98%85%20M9%20Bayonet%20%7C%20Doppler%20%28Factory%20New%29&full=true'];
const BAYONET = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=%E2%98%85%20M9%20Bayonet&full=true'];
const BAYONETSLAUGHTER = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=%E2%98%85%20M9%20Bayonet%20%7C%20Slaughter%20%28Factory%20New%29&full=true'];
const FNATIC = ['http://csgobackpack.net/api/GetItemPrice/?currency=CAD&id=Sticker%20%7C%20Fnatic%20%7C%20Katowice%202014&full=true'];

const INDEXN = 1; //number of csgo items used to calculate this index - weight is (1/INDEXN)

var REDLINEJSON, SPECTRUMJSON, ASIIMOVFTJSON, ASIIMOVBSJSON, WATERELEMJSON, DEAGLEJSON, BROKENFANGJSON, KARAMBITJSON, PITVIPERJSON, CANDYAPPLEJSON, MONKEYBUSINESSJSON;
var BAYONETDOPPLERJSON,  BAYONETJSON, BAYONETSLAUGHTERJSON, FNATICJSON;

REDLINE.map(async url => {try{
    const response = await fetch(url);
    REDLINEJSON = await response.json();
    console.log("red");

    SPECTRUM.map(async url => {try{
        const response = await fetch(url);
        SPECTRUMJSON = await response.json();
        console.log("spec");

        ASIIMOVFT.map(async url => {try{
            const response = await fetch(url);
            ASIIMOVFTJSON = await response.json();
            console.log("asmift");

            ASIIMOVBS.map(async url => {try{
                const response = await fetch(url);
                ASIIMOVBSJSON = await response.json();
                console.log("asbt");

                WATERELEM.map(async url => {try{
                    const response = await fetch(url);
                    WATERELEMJSON = await response.json();
                    console.log("water");

                    DEAGLE.map(async url => {try{
                        const response = await fetch(url);
                        DEAGLEJSON = await response.json();
                        console.log("deagle");

                        BROKENFANG.map(async url => {try{
                            const response = await fetch(url);
                            BROKENFANGJSON = await response.json();
                            console.log("broken");

                            KARAMBIT.map(async url => {try{
                                const response = await fetch(url);
                                KARAMBITJSON = await response.json();
                                console.log("karam");

                                PITVIPER.map(async url => {try{
                                    const response = await fetch(url);
                                    PITVIPERJSON = await response.json();
                                    console.log("pit");

                                    CANDYAPPLE.map(async url => {try{
                                        const response = await fetch(url);
                                        CANDYAPPLEJSON = await response.json();
                                        console.log("candy");

                                        MONKEYBUSINESS.map(async url => {try{
                                            const response = await fetch(url);
                                            MONKEYBUSINESSJSON = await response.json();
                                            console.log("monkey");

                                            BAYONETDOPPLER.map(async url => {try{
                                                const response = await fetch(url);
                                                BAYONETDOPPLERJSON = await response.json();
                                                console.log("bayodopp");

                                                BAYONET.map(async url => {try{
                                                    const response = await fetch(url);
                                                    BAYONETJSON = await response.json();
                                                    console.log("bayo");

                                                    BAYONETSLAUGHTER.map(async url => {try{
                                                        const response = await fetch(url);
                                                        BAYONETDOPPLERJSON = await response.json();
                                                        console.log("bayoslau");

                                                        FNATIC.map(async url => {try{
                                                            const response = await fetch(url);
                                                            FNATICJSON = await response.json();
                                                            console.log("fnatic");
                                                            updatePrices();
                                                        }   catch (error) {
                                                             console.log(error);
                                                        }})
                                                    }   catch (error) {
                                                         console.log(error);
                                                    }})
                                                }   catch (error) {
                                                     console.log(error);
                                                }})
                                            }   catch (error) {
                                                 console.log(error);
                                            }})
                                        }   catch (error) {
                                             console.log(error);
                                        }})
                                    }   catch (error) {
                                         console.log(error);
                                    }})
                                }   catch (error) {
                                     console.log(error);
                                }})
                            }   catch (error) {
                                 console.log(error);
                            }})
                        }   catch (error) {
                             console.log(error);
                        }})
                    }   catch (error) {
                         console.log(error);
                    }})
                }   catch (error) {
                     console.log(error);
                }})
            }   catch (error) {
                 console.log(error);
            }})
        }   catch (error) {
             console.log(error);
        }})
    }   catch (error) {
         console.log(error);
    }})
}   catch (error) {
     console.log(error);
}})


function updatePrices() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("compareMEX");

        
        for (var key in REDLINEJSON) { 
            var doc = REDLINEJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date: dateQuery };
            var update = { $inc : { "total_value_sold.AK-47 | Redline (Field-Tested)" : price*quantity,
                                    "volume_sold.AK-47 | Redline (Field-Tested)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in SPECTRUMJSON) { 
            var doc = SPECTRUMJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Spectrum 2 Case" : price*quantity,
                                    "volume_sold.Spectrum 2 Case" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }
        
        for (var key in ASIIMOVFTJSON) { 
            var doc = ASIIMOVFTJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.AWP | Asiimov (Field-Tested)" : price*quantity,
                                    "volume_sold.AWP | Asiimov (Field-Tested)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in ASIIMOVBSJSON) { 
            var doc = ASIIMOVBSJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.AWP | Asiimov (Battle-Scarred)" : price*quantity,
                                    "volume_sold.AWP | Asiimov (Battle-Scarred)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in WATERELEMJSON) { 
            var doc = WATERELEMJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Glock-18 | Water Elemental (Minimal Wear)" : price*quantity,
                                    "volume_sold.Glock-18 | Water Elemental (Minimal Wear)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in DEAGLEJSON) { 
            var doc = DEAGLEJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Desert Eagle | Blaze (Factory New)" : price*quantity,
                                    "volume_sold.Desert Eagle | Blaze (Factory New)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in BROKENFANGJSON) { 
            var doc = BROKENFANGJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Operation Broken Fang Case" : price*quantity,
                                    "volume_sold.Operation Broken Fang Case" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in KARAMBITJSON) { 
            var doc = KARAMBITJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.★ StatTrak™ Karambit | Doppler (Factory New)" : price*quantity,
                                    "volume_sold.★ StatTrak™ Karambit | Doppler (Factory New)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }
        
        for (var key in PITVIPERJSON) { 
            var doc = PITVIPERJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.AWP | Pit Viper (Field-Tested)" : price*quantity,
                                    "volume_sold.AWP | Pit Viper (Field-Tested)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in CANDYAPPLEJSON) { 
            var doc = CANDYAPPLEJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Glock-18 | Candy Apple (Minimal Wear)" : price*quantity,
                                    "volume_sold.Glock-18 | Candy Apple (Minimal Wear)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in MONKEYBUSINESSJSON) { 
            var doc = MONKEYBUSINESSJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Five-SeveN | Monkey Business (Field-Tested)" : price*quantity,
                                    "volume_sold.Five-SeveN | Monkey Business (Field-Tested)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in BAYONETDOPPLERJSON) { 
            var doc = BAYONETDOPPLERJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.★ M9 Bayonet | Doppler (Factory New)" : price*quantity,
                                    "volume_sold.★ M9 Bayonet | Doppler (Factory New)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in BAYONETJSON) { 
            var doc = BAYONETJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.★ M9 Bayonet" : price*quantity,
                                    "volume_sold.★ M9 Bayonet" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in BAYONETSLAUGHTERJSON) { 
            var doc = BAYONETSLAUGHTERJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.★ M9 Bayonet | Slaughter (Factory New)" : price*quantity,
                                    "volume_sold.★ M9 Bayonet | Slaughter (Factory New)" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }

        for (var key in FNATICJSON) { 
            var doc = FNATICJSON[key];
            var saleDate = new Date(doc[0]);
            var price = doc[1];
            var quantity = parseInt(doc[2]);
            
            var dateQuery = new Date(saleDate.getFullYear(), saleDate.getMonth(), saleDate.getDate());

            var query = { date : dateQuery };
            var update = { $inc : { "total_value_sold.Sticker | Fnatic | Katowice 2014" : price*quantity,
                                    "volume_sold.Sticker | Fnatic | Katowice 2014" : quantity,
                                    }} 
            
            dbo.collection("index").updateOne(query, update);
        }
    
        db.close();
    });
}