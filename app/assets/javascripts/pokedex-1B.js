Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  // debugger
  var $div = $("<div>");
  $div.addClass("detail");
  var $ul = $("<ul>");
  var $image = $("<img>");
  $image.attr("src", pokemon.get("image_url"));
  $div.append($image);
    pokemon.pairs().forEach( function(pair){
      // debugger
      if(pair[0] !== "image_url" && pair[0] !== "pokemon"){
        var $li = $("<li>");
        $li.text(pair[0] +": " + pair[1])
        $ul.append($li)
      }
    })
    $div.append($ul);
  this.$pokeDetail.html($div);
};



Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var $li = $(event.currentTarget)
  var id = $li.attr("data-id")
  var poke = this.pokes.get(id)
  this.renderPokemonDetail(poke)
};




// for (var attrKey in pokemon.attributes) {
//
// }
