function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})



function display(mob){
    var deck=document.querySelector(".card-deck")
    console.log(deck)

    for(var i in mob){
        console.log(mb[i].name)
        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cardimg=document.createElement("img")
        cardimg.src=mob[i].img
        console.log(cadimg)
        caddiv.appendChild(cadimg)
        deck.appendChild(caddiv)

        
    }
}