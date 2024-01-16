import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.value++
    },

    decreaseCount: (state) => {
      // counter never goes negative
      if(state.value === 0) return

      state.value--
    },

    setCount: (state, action: PayloadAction<number>) => {
      if(action.payload < 0) action.payload = 0

      state.value = action.payload
    },
  }
})

export const { increaseCount, decreaseCount, setCount } = counterSlice.actions
export default counterSlice.reducer