import React from "react";

import "../assets/styles.css";
import { IoTrendingUpOutline } from "react-icons/io5";
import NewTransactionModal from "./NewTransactionModal";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <h1>
            {" "}
            <IoTrendingUpOutline /> MyFinances
          </h1>
          <NewTransactionModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
