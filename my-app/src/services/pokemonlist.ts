const pokemonList = [
  {
    name: 'arcanine',
    img: 'Arcanine.png',
    element: 'fire',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'beedrill',
    img: 'Beedrill.png',
    element: 'bug',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'blastoise',
    img: 'Blastoise.png',
    element: 'water',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'bulbasaur',
    img: 'Bulbasaur.png',
    element: 'grass',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'butterfree',
    img: 'Butterfree.png',
    element: 'bug',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'caterpie',
    img: 'Caterpie.png',
    element: 'bug',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'charizard',
    img: 'Charizard.png',
    element: 'fire',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'charmander',
    img: 'Charmander.png',
    element: 'fire',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'charmeleon',
    img: 'Charmeleon.png',
    element: 'fire',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'clefable',
    img: 'Clefable.png',
    element: 'fairy',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'dewgong',
    img: 'Dewgong.png',
    element: 'water',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'farfetchd',
    img: 'Farfetchd.png',
    element: 'wind',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'golbat',
    img: 'Golbat.png',
    element: 'poison',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'ivysaur',
    img: 'Ivysaur.png',
    element: 'grass',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'kadabra',
    img: 'Kadabra.png',
    element: 'psychic',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'kakuna',
    img: 'Kakuna.png',
    element: 'bug',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'metapod',
    img: 'Metapod.png',
    element: 'grass',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'pidgeot',
    img: 'Pidgeot.png',
    element: 'wind',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'pidgeotto',
    img: 'Pidgeotto.png',
    element: 'wind',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'pidgey',
    img: 'Pidgey.png',
    element: 'wind',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'pikachu',
    img: 'Pikachu.png',
    element: 'electric',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'ponyta',
    img: 'Ponyta.png',
    element: 'fire',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'raichu',
    img: 'Raichu.png',
    element: 'electric',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'raticate',
    img: 'Raticate.png',
    element: 'normal',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'rattata',
    img: 'Rattata.png',
    element: 'normal',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'squirtle',
    img: 'Squirtle.png',
    element: 'water',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'venusaur',
    img: 'Venusaur.png',
    element: 'grass',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'vulpix',
    img: 'Vulpix.png',
    element: 'wind',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'wartortle',
    img: 'Wartortle.png',
    element: 'water',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'weedle',
    img: 'Weedle.png',
    element: 'bug',
    weigth: '2kg',
    size: '60cm',
  },
  {
    name: 'arbok',
    img: 'arbok.png',
    element: 'poison',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'cubone',
    img: 'cubone.png',
    element: 'ground',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'dugtrio',
    img: 'dugtrio.png',
    element: 'ground',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'electabuzz',
    img: 'electabuzz.png',
    element: 'electric',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'exeggcute',
    img: 'exeggcute.png',
    element: 'grass',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'gengar',
    img: 'gengar.png',
    element: 'poison',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'graveler',
    img: 'graveler.png',
    element: 'fire',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'gyarados',
    img: 'gyarados.png',
    element: 'water',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'jigglypuff',
    img: 'jigglypuff.png',
    element: 'fairy',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'koffing',
    img: 'koffing.png',
    element: 'poison',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'magnemite',
    img: 'magnemite.png',
    element: 'electric',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'onix',
    img: 'onix.png',
    element: 'rock',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'psyduck',
    img: 'psyduck.png',
    element: 'water',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'snorlax',
    img: 'snorlax.png',
    element: 'fire',
    weigth: '20kg',
    size: '1,7m'
  },
  {
    name: 'voltorb',
    img: 'voltorb.png',
    element: 'electric',
    weigth: '20kg',
    size: '1,7m'
  },
]

export default pokemonList