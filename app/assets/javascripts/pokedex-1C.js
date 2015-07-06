Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon(attrs)
  this.pokes.create(pokemon,{
    success:function() {
      callback(pokemon);
    }.bind(this)
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var $form = this.$el.find("form")
  var pokemon = $form.serializeJSON()
  this.createPokemon(pokemon, this.renderPokemonDetail.bind(this))
};





// pokemon.save({}, {
//   success: function () {
//     this.pokes.add(pokemon);
//     callback(pokemon);
//   }.bind(this)
