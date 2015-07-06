Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li></li>");
  var name = pokemon.get("name")
  var poke = pokemon.get("poke_type")
  $li.html("name: " + name + " poke_type: " + poke);

  $li.addClass("poke-list-item");
  this.$pokeList.append($li);

};
//
// Pokedex.RootView.prototype.refreshPokemon = function () {
//   debugger
//   this.pokes.fetch({
//     success: function({
//       this.pokes.forEach(function (pmon) {
//         console.log("hi");
//         Pokedex.RootView.addPokemonToList(pmon);
//       });
//     });
//   });
//
// };



Pokedex.RootView.prototype.refreshPokemon = function () {
  // debugger
  this.pokes.fetch({
    success: function(){
      this.pokes.forEach( function (pmon) {
        Pokedex.rootView.addPokemonToList(pmon);
      })
    }.bind(this)
  })

}
