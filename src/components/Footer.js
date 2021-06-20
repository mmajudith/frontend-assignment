import React from 'react'
import { ImHome } from "react-icons/im";
import { FaFileAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      
        <div className="footer-wrapper">
            <div className="home">
                <ImHome className="img"/>
                <p>Home</p>
            </div>

            <div className="invoice">
                <FaFileAlt className="img"/>
                <p>Invoice</p>
            </div>

            <div className="exp">
                <FaListAlt className="img"/>
                <p>Expenses</p>
            </div>

            <div className="customer">
                <FaUserFriends  className="img"/>
                <p>Customers</p>
            </div>

            <div className="more">
                <FaEllipsisH  className="img"/>
                <p>More</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
