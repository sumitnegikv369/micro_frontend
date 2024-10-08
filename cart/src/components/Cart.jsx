import { useEffect, useState } from "react";
import { currency } from "container/products";
import { clearCart, getCart } from "../api";
import 'tailwindcss/tailwind.css';
import { ProductService } from "../ProductService";

const Cart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const productService = new ProductService(getCart);
    productService.fetchProducts().then(data => setItems(data));
  }, [items]);
  return (
    <div className="">
      <div
        onClick={() => setShowCart(!showCart)}
        className="m-4 bg-red-600 text-sm text-white w-fit p-4 rounded-md font-bold cursor-pointer"
      >
        Show Cart
      </div>
      {showCart && (
        <>
          <div className="flex-col fixed right-10 top-32 z-20 bg-white border-2 rounded-md border-green-600">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 justify-between items-start px-4 py-4 bg-gray-600/10 m-4 rounded-md"
              >
                <div className="flex gap-4 text-white text-[20px]">
                  <p className="bg-red-400 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                    {item.quantity}
                  </p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[100px] aspect-square"
                  />
                </div>
                <div className="flex flex-col justify-end items-end">
                  <div className="text-sm">{item.name}</div>
                  <div className="text-green-800 font-mono">
                    {item.currency && item.currency === 'INR' ? `Rs ${item.quantity * item.price}` : currency.format(item.quantity * item.price)}
                  </div>
                </div>
              </div>
            ))}
            <div className="m-4">
              <button onClick={()=>{
                clearCart();
                setShowCart(!showCart);
              }} className="bg-white border-2 border-green-800 rounded-md p-4 text-sm font-bold cursor-pointer text-green-800">Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
