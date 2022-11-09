import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import Product from "./Product/Product";

const Main = (props) => (
  <div className="Main">
    {props.data.map((item) => {
      return (
        <Product product={item} cartManagement={props.cartManagement} key={item.id}/>
      );
    })}
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
