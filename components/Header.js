import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";


const Header = () => {
  return (
    <Menu style={{ marginTop: "10px"}}>
      <Link route="/">
        <a className="item">EtherFund</a>
      </Link>
      <Menu.Menu position="right" style={{backgroundColor: "teal"}}>
        <Link route="/campaigns/new">
          <a className="item" style={{color: "white"}}><b>Create Campaign</b></a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item" style={{color: "white"}}><b>+</b></a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
