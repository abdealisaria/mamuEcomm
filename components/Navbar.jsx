import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><div>
          <strong className='red'>[SMBS] </strong>Royal Deals
          </div></Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <h6>Cart <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
        </h6>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar