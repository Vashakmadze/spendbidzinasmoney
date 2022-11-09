import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

function Product(props) {

  const [quantity, setQuantity] = useState(0);

  function decrease() {
    if(quantity > 1) {
      setQuantity(quantity - 1);
      let updatedCart = props.cartManagement.cart.map(item => {
        if (item.id === props.product.id){
          return {...item, quantity: quantity - 1}; //gets everything that was already in item, and updates "done"
        }
        return item; // else return unmodified item 
        });
        props.cartManagement.setCart(updatedCart); // set state to new object with updated list
        props.cartManagement.setNetWorth(props.cartManagement.netWorth + props.product.price);
    } else if(quantity == 1){
      setQuantity(0);
      var array = props.cartManagement.cart; // make a separate copy of the array
      var index = array.findIndex(object => {
        return object.id == props.product.id;
      })
      if (index !== -1) {
        array.splice(index, 1);
        props.cartManagement.setCart(array);
        props.cartManagement.setCartLength(props.cartManagement.cartLength - 1);
      }
      props.cartManagement.setNetWorth(props.cartManagement.netWorth + props.product.price);
    }
  }

  function increase() {
    
    function productExists() {
      return props.cartManagement.cart.some(function(el) {
        return el.id === props.product.id;
      }); 
    }

    if(props.product.id === 41) {
      alert("სახელმწიფოს ვერ იყიდი!");
    } else {
      setQuantity(quantity + 1);
      if(productExists()) {
        let updatedCart = props.cartManagement.cart.map(item => {
          if (item.id === props.product.id){
            return {...item, quantity: quantity + 1}; //gets everything that was already in item, and updates "done"
          }
          return item; 
        });
        props.cartManagement.setCart(updatedCart); // set state to new object with updated list
        props.cartManagement.setNetWorth(props.cartManagement.netWorth - props.product.price);
      } else {
        const product = {title: props.product.title, id: props.product.id, image: props.product.image, price: props.product.price, quantity: 1}
        props.cartManagement.setCart(prevState => ([...prevState, product]))
        props.cartManagement.setCartLength(props.cartManagement.cartLength + 1);
        props.cartManagement.setNetWorth(props.cartManagement.netWorth - props.product.price);
      }
    }
  }

  return (
    <div className="Product">
      <div className='img-div'>
        <img src={props.product.image} alt={props.product.title + "Media"}/>
      </div>
      <div className='info-div'>
        <h2 className='name-product'>
          {props.product.title}
        </h2>
        <h2 className='price-product'>
          ${props.product.price.toLocaleString()}
        </h2>
      </div>
      <div className='buttons-div'>
        <div className={quantity > 0 ? 'sell-button-red' : "sell-button"} onClick={() => decrease()}>გაყიდე</div>
        <div className='amount-div'>{quantity}</div>
        <div className='buy-button' onClick={() => increase()}>იყიდე</div>
      </div>
  </div>
  )

};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
