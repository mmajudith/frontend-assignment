import React from 'react';
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

function Header() {
  return (
    <header>
      
        <div className="app-ear-speak">
            <div className="ear-speak"></div>
            <div className="camera"></div>
        </div>

        <div className="networks-bar">
            <p>3:00</p>
            <div className="networks">
                <FaSignal className="marginLeft"/>
                <FaWifi className="marginLeft"/>
                <FaBatteryFull className="marginLeft" id="marRight"/>
            </div>
        </div>

        <div className="heading">
            <h1>Invoice</h1>
        </div>

    </header>
  )
}

export default Header
