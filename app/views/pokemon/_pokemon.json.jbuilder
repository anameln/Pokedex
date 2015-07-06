
json.extract! pokemon, :id, :attack, :defense, :image_url, :moves, :name, :poke_type

if display_toys
  json.toys pokemon.toys do |toy|
    json.partial! 'toys/toy', toy: toy
  end
end



  #
  # pokemon.toys.each do |toy|
  #   json.partial! 'views/toys', toy: toy
  # end
