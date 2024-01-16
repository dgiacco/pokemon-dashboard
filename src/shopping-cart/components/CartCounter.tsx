'use client'

import { useAppSelector, useAppDispatch } from '../../store/index';
import { increaseCount, decreaseCount, setCount } from '../../store/counter/counterSlice'
import { useEffect } from 'react';


export interface CounterResponse {
  count: number;
}


const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(response => response.json());

  return data
}

export const CartCounter = () => {

  const count = useAppSelector( state => state.counter.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then( ({ count }) => dispatch( setCount(count)))
  }, [dispatch])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span className="text-9xl">{ count }</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(increaseCount())}
          >+1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(decreaseCount())}
          >-1
        </button>
      </div>
    </div>
  )
}

