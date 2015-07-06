Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li></li>");
  $li.attr("data-id", pokemon.id)
  var name = pokemon.get("name")
  var poke = pokemon.get("poke_type")
  $li.html("name: " + name + " poke_type: " + poke);

  $li.addClass("poke-list-item");
  this.$pokeList.append($li);

};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    success: function(){
      this.pokes.forEach( function (pmon) {
        Pokedex.rootView.addPokemonToList(pmon);
      })
    }.bind(this)
  })
}
