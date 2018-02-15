

var pizza = {
    a1: ["Comet Ping Pong", "http://www.google.com/"],
    b2: ["Ghibellina", "http://www.google.com/"],
    c3: ["2Amys", "http://www.google.com/" ],
    d4: ["Breakfast", "http://www.google.com/" ],
    e5: ["Blue Frog Bagels", "http://www.google.com/"],
    f6: ["matchbox", "http://www.google.com/"]
};
var pizzaArray = [pizza.a1, pizza.b2, pizza.c3, pizza.d4, pizza.e5, pizza.f6];

var subs = {
    a1: ["Bub and Pops", ],
    b2: ["Taylor Gourmet", ],
    c3: ["Brown Bag", ],
    d4: ["The Best Sandwich Place", ], 
    e5: ["Wicked Waffle", ]
};
var subsArray = [subs.a1, subs.b2, subs.c3, subs.d4, subs.e5];

var variety = {
    a1: ["Chopt Creative Salad Co", ],
    b2: ["Roti Mediterranean Grill", ],
    c3: ["Protein Bar", "Zaytihya", ],
    d4: ["Café Mozart", ],
    e5: ["Brasserre Beck", ],
    f6: ["Finn & Porter Restaurant", ],
    g7: ["Maddy’s Taproom", ],
    h8: ["Nerd’s & Nibblers", ]
};
var varietyArray = [variety.a1, variety.b2, variety.c3, variety.d4, variety.e5, variety.f6, variety.g7, variety.h8];

var italian = {
    a1: ["Sfoglina", ],
    b2: ["RPM Italian", ],
    c3: ["Filomena Ristorante", ],
    d4: ["Catch 15 Italian Kitchen + Oyster Bar", ]
};
var italianArray = [italian.a1, italian.b2, italian.c3, italian.d4];

var mexican = {
    a1: ["Taco Bamba", ],
    b2: ["District Taco", ],
    c3: ["El Centro DF", ],
    d4: ["Taberna del Alabardero DC", ],
    e5: ["Fogo Chao", ],
    f6: ["Del Campo", ]
};
var mexicanArray = [mexican.a1, mexican.b2, mexican.c3, mexican.d4, mexican.e5, mexican.f6];

var american = {
    a1: ["Chicken + Whiskey", ],
    b2: ["Astro Donuts", ],
    c3: ["Mason Dixie Biscuit Co", ],
    d4: ["Shake Shack", "Bolt Burgers", ],
    e5: ["PJ Clarke’s DC", ],
    f6: ["Mastro’s Steakhouse", ],
    g7: ["Ruth’s Chris Steak House", ],
    h8: ["Claudia’s", ],
    i9: ["Morton’s the Steakhouse", ]
};
var americanArray = [american.a1, american.b2, american.c3, american.d4, american.e5, american.f6, american.g7, american.h8, american.i9];

var coffee = {
    a1: ["Tryst", ],
    b2: ["Juan Valdez Cafe", ],
    c3: ["WeWork", ],
    d4: ["Point Chuad Café & Crepes", ]
};
var coffeeArray = [coffee.a1, coffee.b2, coffee.c3, coffee.d4];

var dessert = {
    a1: ["Dolcezza Gelato and Coffee", ],
    b2: ["Jeni’s Splendid Ice Creams", ],
    c3: ["IcyCode Ice Cream Rolls", ],
    d4: ["Rita’s", ],
    e5: ["Georgetown Cupcakes", ],
    f6: ["Baked and Wired", ]
};
var dessertArray = [dessert.a1, dessert.b2, dessert.c3, dessert.d4, dessert.e5, dessert.f6];

var vegan = {
    a1: ["Nu Vegan Cafe", ],
    b2: ["Shouk", "Fare Well", ],
    c3: ["Soupergirl", ],
    d4: ["Woodlins Vegan Bistro", ],
    e5: ["Elizabeth’s gone raw", ],
    f6: ["shouk", ]
};
var veganArray = [vegan.a1, vegan.b2, vegan.c3, vegan.d4, vegan.e5, vegan.f6];

var asain = {
    a1: ["sushi taro", ],
    b2: ["chiko", ],
    c3: ["korean signature bibimbap", ],
    d4: ["Chiko", ],
    e5: ["Tiger Fork", ],
    f6: ["Doi Moi", ],
    g7: ["Daikaya Izakaya", ],
    h8: ["Oki Bowl", ],
    i9: ["Toki Underground", ],
    j10: ["Vietnamese", ],
    k11: ["Maketto", ],
    l12: ["Pho Viet Resturaunt", ],
    m13: ["Merzi", ],
    n14: ["Rasoi Indian Kitchen", ],
    o15: ["Rasike West End"]
};
var asainArray = [asain.a1, asain.b2, asain.c3, asain.d4, asain.e5, asain.f6, asain.g7, asain.h8, asain.i9, asain.j10, asain.k11, asain.l12, asain.m13, asain.n14, asain.o15];

var seafood = {
    a1: ["Siren by RW", ],
    b2: ["The Salt Line", ],
    c3: ["Poke Papa", ],
    d4: ["Ocean Prime", ],
    e5: ["Joe’s Seafood, Prime Steak, & Stone Crab", ],
    f6: ["McCormick & Schmick’s seafood & steaks", ]
};
var seafoodArray = [seafood.a1, seafood.b2, seafood.c3, seafood.d4, seafood.e5, seafood.f6];

var vegitarian = {
    a1: ["fruitive", ],
    b2: ["Beefsteak", ],
    c3: ["Equinox Restuarant", ],
    d4: ["sweetgreen", ]
};
var vegitarianArray = [vegitarian.a1, vegitarian.b2, vegitarian.c3, vegitarian.d4];

var random = {
    a1: ["Fare Well", ],
    b2: ["Soupergirl", ],
    c3: ["District Taco", ],
    d4: ["El Centro DF", ],
    e5: ["Tiger Fork", ],
    f6: ["Oki Bowl", ],
    g7: ["PJ Clarke’s DC", ],
    h8: ["Mastro’s Steakhouse", ],
    i9: ["Jeni’s Splendid Ice Creams", ],
    j10: ["IcyCode Ice Cream Rolls", ],
    k11: ["Astro Donuts", ],
    l12: ["Tryst", ],
    m13: ["Juan Valdez Cafe", ],
    n14: ["RPM Italian", ],
    o15: ["Roti Mediterranean Grill", ],
    p16: ["Zaytihya", ],
    q17: ["Café Mozart", ],
    r18: ["Nerd’s & Nibblers", ],
    s19: ["Taylor Gourmet", ],
    t20: ["Wicked Waffle", ],
    u21: ["Ocean Prime", ],
    v22: ["McCormick & Schmick’s seafood & steaks", ],
    w23: ["Comet Ping Pong", ],
    x24: ["Ghibellina", ],
    y25: ["Blue Frog Bagels", ],
    z26: ["Equinox Restuarant", ]
};
var randomArray = [random.a1, random.b2, random.c3, random.d4, random.e5, random.f6, random.g7, random.h8, random.i9, random.j10, random.k11, random.l12, random.m13, random.n14, random.o15, random.p16, random.q17, random.r18, random.s19, random.t20, random.u21, random.v22, random.w23, random.x24, random.y25, random.z26];

var genNum;
var genSelected;


$("#pizzaBtn").on("click", function(){
    genNum = Math.floor(Math.random() * pizzaArray.length);
    genSelected = pizzaArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#dessertBtn").on("click", function(){
    genNum = Math.floor(Math.random() * dessertArray.length);
    genSelected = dessertArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#varietyBtn").on("click", function(){
    genNum = Math.floor(Math.random() * varietyArray.length);
    genSelected = varietyArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#subsBtn").on("click", function(){
    genNum = Math.floor(Math.random() * subsArray.length);
    genSelected = subsArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#italianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * italianArray.length);
    genSelected = italianArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#mexicanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * mexicanArray.length);
    genSelected = mexicanArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#americanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * americanArray.length);
    genSelected = americanArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#coffeeBtn").on("click", function(){
    genNum = Math.floor(Math.random() * coffeeArray.length);
    genSelected = coffeeArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#veganBtn").on("click", function(){
    genNum = Math.floor(Math.random() * veganArray.length);
    genSelected = veganArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#asainBtn").on("click", function(){
    genNum = Math.floor(Math.random() * asainArray.length);
    genSelected = asainArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#seafoodBtn").on("click", function(){
    genNum = Math.floor(Math.random() * seafoodArray.length);
    genSelected = seafoodArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#vegitarianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * vegitarianArray.length);
    genSelected = vegitarianArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});

$("#randomBtn").on("click", function(){
    genNum = Math.floor(Math.random() * randomArray.length);
    genSelected = randomArray[genNum];
    $("#printDiv").html('<a href="' + genSelected[1] + '">' + genSelected[0] + '</a>');
});
