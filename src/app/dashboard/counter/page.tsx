import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: 'Shopping cart',
  description: 'Just a counter'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart products</span>
      <CartCounter />
    </div>
  )
}

