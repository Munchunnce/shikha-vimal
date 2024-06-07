import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';



const Cart = () => {
  const products = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map(product => (
            <div className='cartCard' key={product.id}>
              <img src={product.images[0]} alt="" style={{height: '6rem'}}/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn1' onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
