 const API = 'https://pokeapi.co/api/v2'
 
 const httpService = {
  getPokemonList: () => {
    return `${API}/pokemon`
  },
  getPokemon: (pokemonId: string) => {
    return `${API}/pokemon/${pokemonId}`
  }  
 }

 export default httpService