import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

interface favouritePokemons {
  favourites: { [key: string]: SimplePokemon }
}

const initialState: favouritePokemons = {
  favourites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavouritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favourites = action.payload;
    },

    toggleFavourite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload
      const {id} = pokemon;
      if(state.favourites[id]) {
        delete state.favourites[id];
        return
      }
      else {
        state.favourites[id] = pokemon
      }

      localStorage.setItem('favourite-pokemons', JSON.stringify( state.favourites ) )
    }
  },
  })

export const { toggleFavourite, setFavouritePokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer