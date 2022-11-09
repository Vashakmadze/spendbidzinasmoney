import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import ReceiptProductc from './ReceiptProductc/ReceiptProductc';
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";


function calculateTotal(props) {
  let total = 0;
  props.cartManagement.cart.map((item) => {
    const localTotal = item.price * item.quantity;
    total = total + localTotal;
  })
  return total;
}

function Footer(props) {

  if(props.cartManagement.cartLength > 0) return (
    <><div className={"Footer"}>
      <h1 className='receipt-title'>ქვითარი</h1>
      {props.cartManagement.cart.map((item) => {
        return (
          <ReceiptProductc product={item} key={item.id + "cart"} />
        );
      })}
      <div className='total-div'>
        <h1 className='total-title'>ჯამი</h1>
        <h1 className='total-numbers'>${calculateTotal(props).toLocaleString()}</h1>
      </div>
    </div><div className='socials-div'>
        <p className='love'>Made with &#128151; by Luka Vashakmadze</p>
        <div className='icons'>
          <IconContext.Provider value={{ className: "icons", size: '2rem' }}>
            <a href='https://www.facebook.com/luka.vashakmadze.1' target="blank">
              <FaFacebookSquare className='icon' />
            </a>
            <a href='https://github.com/Vashakmadze' target="blank">
              <FaGithubSquare className='icon' />
            </a>
            <a href='https://www.instagram.com/lukavasha/' target="blank">
              <FaInstagram className='icon' />
            </a>
          </IconContext.Provider>
        </div>
      </div></>
  ) 

  return (
    <div className='socials-div'>
      <p className='love'>Made with &#128151; by Luka Vashakmadze</p>
      <div className='icons'> 
        <IconContext.Provider value={{className: "icons", size: '2rem'}}>
          <a href='https://www.facebook.com/luka.vashakmadze.1' target="blank">
            <FaFacebookSquare className='icon'/>
          </a>
          <a href='https://github.com/Vashakmadze' target="blank">
            <FaGithubSquare className='icon'/>
          </a>
          <a href='https://www.instagram.com/lukavasha/' target="blank">
            <FaInstagram className='icon'/>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  
  ) 

};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
