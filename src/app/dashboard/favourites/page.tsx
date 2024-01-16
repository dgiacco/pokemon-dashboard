import { PokemonGrid } from '@/pokemons';
import { FavouritePokemons } from '../../../pokemons/components/FavouritePokemons';

export const metadata = {
  title: 'Favourite Pokemons',
  description: 'my favourite Pokemons'
}

export default async function PokemonsPage() {

  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Favourite Pokemons <small>(Global state)</small></span>

      <FavouritePokemons />
      
    </div>
  )
}