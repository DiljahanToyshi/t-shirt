import React from 'react';

const Cart = ({ cart, removeAddFromCart }) => {
 let  message = <p>Please add some products</p>;
 if(cart.length!== 0){
    message =
    (
      <div>
        <h2>yoo bro</h2>
        <small>thanks for wasting your money</small>
      </div>
    );
 }
    
  return (
    <div>
      <h2>Order Summary:{cart.length}</h2>
      {cart.length > 2 ? <span> Aro kino</span> : <span>fokira</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => removeAddFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!!</p>}
    </div>
  );
};

export default Cart;