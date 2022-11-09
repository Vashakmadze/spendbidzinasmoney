import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { useSpring, animated } from "react-spring"; 
import bidzo from "../../assets/ბიძო.jpg";

function Number({ n }) {
  const { number } = useSpring({
    from: { number : 0 },
    number: n,
    delay: 0.1,
    config: { mass: 1, tension: 200, friction: 100},
  });
  return (
    <>
      <animated.div>{number.to((n) => "$" + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ','))}</animated.div>
    </>
  );
}

const Header = (props) => (
  <>
  <div className="Header">
    <h1 className='title'>დახარჯე ბიძოს ფული</h1>
    <div className='img-wrapper'>
      <img src={bidzo} />
    </div>
  </div>
  <div className='net-worth-div'>
    <h1 className='net-worth'><Number n={props.netWorth}/></h1>
  </div>

  </>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
