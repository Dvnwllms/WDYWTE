var iceCream = ["Chiko", "Tiger Fork", "Doi Moi"];
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
