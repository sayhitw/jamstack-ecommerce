import React from 'react';
import Link from 'next/link';
import {IconContext} from "react-icons";
import { FaHome, FaPercent, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const tabs = [{
  route: "/home",
  label: "Home"
},{
  route: "/promo",
  label: "Promo"
},{
  route: "/cart",
  label: "Cart"
},{
  route: "/account",
  label: "Account"
}]

const Navigation = (props) => {

  return (
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <ul className="w-100 nav">
        <div className="nav-ul d-flex flex-row justify-content-around w-100">
          <IconContext.Provider value={{size: 28}}>

          {
            tabs.map((tab, index) =>(
              <li key={`tab-${index}`}>
                <Link href={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    {tab.route == '/home' ? <FaHome /> :
                     tab.route == '/promo' ? <FaPercent /> :
                     tab.route == '/cart' ? <FaShoppingCart /> :
                     tab.route == '/account' ? <FaUserCircle /> : ''
                    }
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </Link>
              </li>
            ))
          }
          </IconContext.Provider>
        </div>
      </ul>
    </nav>
  )
};

export default Navigation;
