var chinese = ["Chiko", "Tiger Fork", "Doi Moi"];
var burgers = ["Shake Shack", "Bolt Burgers", "PJ Clarke’s DC"];
var steak = ["Fogo Chao", "Del Campo", "Mastro’s Steakhouse", "Ruth’s Chris Steak House", "Claudia’s", "Morton’s the Steakhouse"];
var mexican = ["Taco Bamba", "District Taco", "El Centro DF", "Taberna del Alabardero DC"];
var italian = ["Sfoglina", "RPM Italian", "Filomena Ristorante", "Catch 15 Italian Kitchen + Oyster Bar"];
var coffee = ["Tryst", "Juan Valdez Cafe", "Starbucks"];
var dessert = ["Dolcezza Gelato and Coffee", "Jeni’s Splendid Ice Creams", "IcyCode Ice Cream Rolls", "Rita’s"];
var indian = ["Merzi", "Rasoi Indian Kitchen", "Rasike West End"];
var pasteries = ["Georgetown Cupcakes", "Baked and Wired", "Point Chuad Café & Crepes"];
var vegan = ["Nu Vegan Cafe", "Shouk", "Fare Well", "Soupergirl", "Woodlins Vegan Bistro", "Elizabeth’s gone raw"];
var healthy = ["Chopt Creative Salad Co", "Roti Mediterranean Grill", "Protein Bar"];
var seafood = ["Siren by RW", "The Salt Line", "Poke Papa", "Ocean Prime", "Joe’s Seafood, Prime Steak, & Stone Crab", "McCormick & Schmick’s seafood & steaks"];
var subs = ["Bub and Pops", "Taylor Gourmet", "Brown Bag", "The Best Sandwich Place", "Wicked Waffle"];
var chicken = ["Chicken + Whiskey", "Astro Donuts", "Mason Dixie Biscuit Co"];
var ramen = ["Daikaya Izakaya", "Oki Bowl", "Toki Underground", "Vietnamese", "Maketto", "Pho Viet Resturaunt"];
var pizza = ["Comet Ping Pong", "Ghibellina", "2Amys", "Breakfast", "Blue Frog Bagels", "matchbox"];
var variety = ["Zaytihya", "Café Mozart", "Brasserre Beck", "Finn & Porter Restaurant", "Maddy’s Taproom", "Nerd’s & Nibblers"];
var vegitarian = ["fruitive"];
var korean = ["chiko", "korean signature bibimbap"];
var japanese = ["sushi taro"];


var genNum;
var genSelected;

// function generate(resArray) {
//     genNum = Math.floor(Math.random() * resArray.length);
//     genSelected = resArray[genNum];
//     $("#printDiv").html("Why not try out" + genSelected);
// }

// $("#dessertBtn").click(generate(iceCream));


$("#dessertBtn").on("click", function(){
    genNum = Math.floor(Math.random() * iceCream.length);
    genSelected = iceCream[genNum];
    $("#printDiv").html("Why not try out " + genSelected);
});
