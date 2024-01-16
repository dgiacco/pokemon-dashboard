'use client'

import { store } from '../store'
import { Provider } from 'react-redux'
import { useEffect } from "react";
import { setFavouritePokemons } from './pokemons/pokemons'

interface Props {
  children: React.ReactNode
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    const favourites = JSON.parse( localStorage.getItem('favourite-pokemons') ?? '{}'  );
    store.dispatch( setFavouritePokemons(favourites) );
    
  }, [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

