import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";
import {useCart} from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  useTitle("Cart")
  const {cartList} = useCart();
  return (
    <main> 
      {cartList.length === 0 ? <CartEmpty /> : <CartList />}        
    </main>
  )
}
