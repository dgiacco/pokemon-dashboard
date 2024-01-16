import { SimplePokemon } from '../../../pokemons/interfaces/simple-pokemon';
import { PokemonsResponse } from '../../../pokemons/interfaces/pokemons-response';
import { PokemonGrid } from '@/pokemons';

export const metadata = {
  title: 'Pokemons',
  description: 'The original 151 Pokemon'
}

const getPokemons = async( limit = 151, offset = 0):Promise<SimplePokemon[]> => {
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(response => response.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return pokemons
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons()

  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Pokemon list <small>(static)</small></span>

      <PokemonGrid pokemons={pokemons}/>
      
    </div>
  )
}
