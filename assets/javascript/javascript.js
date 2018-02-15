

var pizza = ["Comet Ping Pong", "Ghibellina", "2Amys", "Breakfast", "Blue Frog Bagels", "matchbox"];
var subs = ["Bub and Pops", "Taylor Gourmet", "Brown Bag", "The Best Sandwich Place", "Wicked Waffle"];
var variety = ["Chopt Creative Salad Co", "Roti Mediterranean Grill", "Protein Bar", "Zaytihya", "Café Mozart", "Brasserre Beck", "Finn & Porter Restaurant", "Maddy’s Taproom", "Nerd’s & Nibblers"];
var italian = ["Sfoglina", "RPM Italian", "Filomena Ristorante", "Catch 15 Italian Kitchen + Oyster Bar"];
var mexican = ["Taco Bamba", "District Taco", "El Centro DF", "Taberna del Alabardero DC", "Fogo Chao", "Del Campo"];
var american = ["Chicken + Whiskey", "Astro Donuts", "Mason Dixie Biscuit Co", "Shake Shack", "Bolt Burgers", "PJ Clarke’s DC", "Mastro’s Steakhouse", "Ruth’s Chris Steak House", "Claudia’s", "Morton’s the Steakhouse", ]
var coffee = ["Tryst", "Juan Valdez Cafe", "Starbucks", "Point Chuad Café & Crepes"];
var dessert = ["Dolcezza Gelato and Coffee", "Jeni’s Splendid Ice Creams", "IcyCode Ice Cream Rolls", "Rita’s", "Georgetown Cupcakes", "Baked and Wired"];
var vegan = ["Nu Vegan Cafe", "Shouk", "Fare Well", "Soupergirl", "Woodlins Vegan Bistro", "Elizabeth’s gone raw", "shouk"];
var asain = ["sushi taro", "chiko", "korean signature bibimbap", "Chiko", "Tiger Fork", "Doi Moi", "Daikaya Izakaya", "Oki Bowl", "Toki Underground", "Vietnamese", "Maketto", "Pho Viet Resturaunt", "Merzi", "Rasoi Indian Kitchen", "Rasike West End"];
var seafood = ["Siren by RW", "The Salt Line", "Poke Papa", "Ocean Prime", "Joe’s Seafood, Prime Steak, & Stone Crab", "McCormick & Schmick’s seafood & steaks"];
var vegitarian = ["fruitive", "Beefsteak", "Equinox Restuarant", "sweetgreen"];

var random = ["Sfoglina", "RPM Italian", "Filomena Ristorante", "Catch 15 Italian Kitchen + Oyster Bar", "Chopt Creative Salad Co", "Roti Mediterranean Grill", "Protein Bar", "Zaytihya", "Café Mozart", "Brasserre Beck", "Finn & Porter Restaurant", "Maddy’s Taproom", "Nerd’s & Nibblers", "Bub and Pops", "Taylor Gourmet", "Brown Bag", "The Best Sandwich Place", "Wicked Waffle", "Siren by RW", "The Salt Line", "Poke Papa", "Ocean Prime", "Joe’s Seafood, Prime Steak, & Stone Crab", "McCormick & Schmick’s seafood & steaks", "Comet Ping Pong", "Ghibellina", "2Amys", "Breakfast", "Blue Frog Bagels", "matchbox", "fruitive", "Beefsteak", "Equinox Restuarant", "sweetgreen"];


var genNum;
var genSelected;


$("#dessertBtn").on("click", function(){
    genNum = Math.floor(Math.random() * dessert.length);
    genSelected = dessert[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#pizzaBtn").on("click", function(){
    genNum = Math.floor(Math.random() * pizza.length);
    genSelected = pizza[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#varietyBtn").on("click", function(){
    genNum = Math.floor(Math.random() * variety.length);
    genSelected = variety[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#subsBtn").on("click", function(){
    genNum = Math.floor(Math.random() * subs.length);
    genSelected = subs[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#italianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * italian.length);
    genSelected = italian[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#mexicanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * mexican.length);
    genSelected = mexican[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#americanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * american.length);
    genSelected = american[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#coffeeBtn").on("click", function(){
    genNum = Math.floor(Math.random() * coffee.length);
    genSelected = coffee[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#veganBtn").on("click", function(){
    genNum = Math.floor(Math.random() * vegan.length);
    genSelected = vegan[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#asainBtn").on("click", function(){
    genNum = Math.floor(Math.random() * asain.length);
    genSelected = asain[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#seafoodBtn").on("click", function(){
    genNum = Math.floor(Math.random() * seafood.length);
    genSelected = seafood[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#vegitarianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * vegitarian.length);
    genSelected = vegitarian[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});

$("#randomBtn").on("click", function(){
    genNum = Math.floor(Math.random() * random.length);
    genSelected = random[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});
