import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
const Products = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state) => state.product);
    const [clickedButtons, setClickedButtons] = useState({});

    useEffect(() => {
      dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://dummyjson.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data.products);
        // }
        // fetchProducts();
    }, []);
    
    const handleAdd = (product) => {
      dispatch(add(product));
      setClickedButtons(prevState => ({
        ...prevState,
        [product.id]: true
    }));
    setTimeout(() => {
      setClickedButtons(prevState => ({
          ...prevState,
          [product.id]: false
      }));
  }, 1200);
    }

    if (status === STATUSES.LOADING) {
      return <p>Loading...</p>;
    }

    if (status === STATUSES.ERROR || !products) {
        return <p>Error loading products</p>;
    }


  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
            <div className='card' key={product.id}>
                <img src={product.images[0]} alt="" style={{height: '11rem'}} />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button 
                className={`btn ${clickedButtons[product.id] ? 'clicked' : ''}`}
                onClick={() => handleAdd(product)}
                >
                   {clickedButtons[product.id] ? 'ADDED' : 'Add to cart'}
                </button>
            </div>
        ))
      }
    </div>
  )
}

export default Products
