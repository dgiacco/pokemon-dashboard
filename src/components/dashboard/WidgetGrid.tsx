'use client'

import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '../../store/index';
import { SimpleWidget } from './SimpleWidget';


export const WidgetGrid = () => {

  const cartCount = useAppSelector( state => state.counter.value)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        cartCount={cartCount}
        counterURL='/dashboard/counter'
        subTitle='Products added to cart'
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  )
}
