import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "../routes";
import classes from '../pages/index.module.css';

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <div className={classes.NavLogo}>
          {/* <Image size="mini" src="https://i.ibb.co/jrhXwxw/Ether-Fund.jpg"></Image> */}
          <a className="item" style={{ disply: "block", color: "white", fontWeight: "bolder" }}>EtherFund</a>
        </div>
      </Link>
      <Menu.Menu position="right" style={{ backgroundColor: "teal" }}>
        <Link route="/campaigns/new">
          <a className="item" style={{ color: "white" }}><b>Create Campaign</b></a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item" style={{ color: "white" }}><b>+</b></a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
