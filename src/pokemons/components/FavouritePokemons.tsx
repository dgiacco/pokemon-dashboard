'use client'

import { PokemonGrid } from "./PokemonGrid"
import { useAppSelector } from '../../store/index';


export const FavouritePokemons = () => {

  const favouritePokemons = useAppSelector(state => Object.values(state.pokemons.favourites))

  return (
    <>
      {
        favouritePokemons.length ?
        <PokemonGrid pokemons={favouritePokemons}/> :
        <NoFavouritePokemons />
      }
    </>
  )
}

export const NoFavouritePokemons = () => {

  return (
    <div className="flex justify-center items-center">There are no favourite pokemons yet</div>
  )
}