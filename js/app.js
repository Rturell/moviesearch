
$("#search-movie").hide();
$("#error").hide();

$('#input').keyup(function (e) {
    if (e.keyCode == 13) {
        $('#btn-search').click();
    }
});

$("#btn-search").on("click", function () {

    var peliculaBuscada = $("#input").val();

    $.ajax({
        url: "https://private.omdbapi.com/?apikey=bef9c583&t=" + peliculaBuscada,  
        success: function (datosObtenidos) {

            if (datosObtenidos.Response === "False" ) {
                $("#error").show();

            } else { 

                $("#inicial").remove();
                $("#search-movie").show();
                $("#poster").attr("src", datosObtenidos.Poster);
                $("#titulo-pelicula").text(datosObtenidos.Title);
                $("#director").text("Director: " + datosObtenidos.Director);
                $("#plot").text(datosObtenidos.Plot);
                $("#actors").text(datosObtenidos.Actors);
                $("#country").text(datosObtenidos.Country);
                $("#awards").text(datosObtenidos.Awards);
                $("#error").hide();
    
                $("#ratings").html("");
    
                datosObtenidos.Ratings.forEach(function (rating) {
                    var lista = $("<li></li>");
                    lista.text(rating.Source + " - " + rating.Value);
                    $("#ratings").append(lista);
                }); 

            }
        }

    })

    $("#input").val(""); 

});






