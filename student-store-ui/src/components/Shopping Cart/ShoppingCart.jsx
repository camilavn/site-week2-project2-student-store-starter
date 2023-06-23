import Home from "../Home/Home";
import "./ShoppingCart.css";




export default function ShoppingCart({ shoppingList }) {

  const subTotal = shoppingList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = .08;
  const taxOfProd = subTotal * taxRate;
  const finalTotal = subTotal + taxOfProd;
  console.log(shoppingList);
  return (
    <div className="shoppingCart">
      {shoppingList?.length === 0 ? (
        <p>Nothing in the cart</p>
      ) : (
        shoppingList?.map((item) => {
          return (
            <span className="shoppingCartItem" key={item.id}>
              <p>Item name: {item.name}</p>
              <p>Item quantity: {item.quantity}</p>
              <p>Item price: {item.price.toFixed(2)}</p>
              <p>Item total: {(item.price * item.quantity).toFixed(2)}</p>
            </span>
          );
        })
      )}
      <section classname="shoppingCartTotal">
        <p>Total: {finalTotal.toFixed(2)}</p>
      </section>
    </div>
  );
}

