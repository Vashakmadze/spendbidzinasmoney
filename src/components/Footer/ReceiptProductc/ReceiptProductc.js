import React from 'react';
import PropTypes from 'prop-types';
import './ReceiptProductc.css';

const ReceiptProductc = (props) => (
  <div className="ReceiptProductc">
    <h2 className='cart-title'>{props.product.title}</h2>
    <h2 className='quantity'>x{props.product.quantity}</h2>
    <h2 className='total-price'>${(props.product.price * props.product.quantity).toLocaleString()}</h2>
  </div>
);

ReceiptProductc.propTypes = {};

ReceiptProductc.defaultProps = {};

export default ReceiptProductc;
