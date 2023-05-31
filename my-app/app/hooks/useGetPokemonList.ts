import httpService from "../services/httpService"
import axios from "axios"
import pokemonList from "../services/pokemonlist";

const useGetPokemonList = async () => {
  // try {
  //   const { data } = await axios.get(
  //     httpService.getPokemonList(),
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     },
  //   );

  //   return data
  // } catch(e) {
  //   if (axios.isAxiosError(e)) {
  //     console.log('error message: ', e.message);
  //     return e.message;
  //   } else {
  //     console.log('unexpected error: ', e);
  //     return 'An unexpected error occurred';
  //   }
  // }

  return pokemonList
}

export default useGetPokemonList