$(document).ready(function(){
        for(var i = 1; i <=151; i++){
            var pokeImg = "<img src='https://pokeapi.co/media/img/" + i + ".png' data-pokenum=" + i + ">";
             $('#container').append(pokeImg);
    }

    function htmlBuilder(data){
        var htmlStr = "<h1>" + data["name"] + "</h1>";
        htmlStr += "<img src='https://pokeapi.co/media/img/" + data["id"] + ".png'>";

        htmlStr += "<h2>Types</h2>";
        for(var i = 0; i <data.types.length; i++){
        htmlStr += "<li>" + data.types[i].type.name + "</li>";
        }
        htmlStr += "<h2>Height</h2>";
        htmlStr += "<li>" +data["height"] + ' ft' + "</li>";

        htmlStr += "<h2>Weight</h2>";
        htmlStr += "<li>" +data["weight"] + ' lb' + "</li>";

        $('#pokeDex').html(htmlStr);
    }

    $('img').click(function(){
     var pokeNum = $(this).data("pokenum");

     var url = "https://pokeapi.co/api/v2/pokemon/" + pokeNum + "/";
     $.get(url, function(res){
       console.log(res);
        htmlBuilder(res);
     },"json");
    })



})
