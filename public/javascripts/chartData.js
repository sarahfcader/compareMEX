var chartData;
var SPYData;
var SPYGraphPoints = [];

const sampleInvestmentAmount = 1000; //$1000 CAD

var labels = [];
var IndexPrice = [];

const n = 13; //number of used items for index 
const ITEMS = ["AK-47 | Redline (Field-Tested)", "Spectrum 2 Case", "AWP | Asiimov (Field-Tested)", "AWP | Asiimov (Battle-Scarred)",
                "Glock-18 | Water Elemental (Minimal Wear)",  "Desert Eagle | Blaze (Factory New)", "Operation Broken Fang Case",
                "★ StatTrak™ Karambit | Doppler (Factory New)", "AWP | Pit Viper (Field-Tested)", "Glock-18 | Candy Apple (Minimal Wear)",
                "Five-SeveN | Monkey Business (Field-Tested)", "★ M9 Bayonet | Doppler (Factory New)", "★ M9 Bayonet"];

// DOM Ready =============================================================
// Occurs after all HTML recieved, but before the page has been fully rendered
$(function() {

    // Populate the item list on initial page load
    getSPYData();
    populateChart();

});

// Functions =============================================================

function getSPYData() {

    // S&P
    $.getJSON( '/SPY', function( json2 ) { 
        SPYData = [...json2]

        SPYData.forEach(function(doc) {
            SPYGraphPoints.push(sampleInvestmentAmount/doc.ticker);
        });
    });
};

// Fill table with data
function populateChart() {

    $.getJSON( '/data', function( json ) {
        chartData = [...json];

       chartData.forEach(function(doc) {
            var readableDate = new Date(doc.date);
            labels.push(readableDate.toLocaleDateString());
       });

       chartData.forEach(function(doc) {
           var priceArray = doc.total_value_sold;
           var volumeArray = doc.volume_sold;

           var indexDayPrice = 0;
            for (var i=0; i<n; i++) {
                if (volumeArray[ITEMS[i]] != 0) {
                    indexDayPrice += (priceArray[ITEMS[i]] / volumeArray[ITEMS[i]])*(1/n);
                } else {
                    indexDayPrice += 0;
                }
            }   
            IndexPrice.push(indexDayPrice);
        });

        //convert to 1000 CAD investment score
        for (var i=0; i<IndexPrice.length; i++) {
            IndexPrice[i] = sampleInvestmentAmount/IndexPrice[i];
        }

       const data = {
            labels: labels,
            datasets: [{
            label: '$1000 CAD in steamMEX',
            backgroundColor: '#182238',
            borderColor: '#4f5f82',
            data: IndexPrice,
            }, {
            label: '$1000 CAD in SPY',
            backgroundColor: '#45221c',
            borderColor: '#b84430',
            data: SPYGraphPoints,
            }]
        };
    
        const config = {
            type: 'line',
            data,
            options: {
                layout: {
                    padding: 50
                }
            }
        };
    
        var myChart = new Chart(
        document.getElementById('steamMEX'),
        config
        );
    });



};