import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {


    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>

                    <div className="item">
                        <Link className="link" to="/tours/1">
                            Packages
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/tours/2">
                            Trekking
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/tour/1">
                            Adventure
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        EpicTravels
                    </Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">
                            Store
                        </Link>
                    </div>


                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlinedIcon />
                        <FavoriteOutlinedIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
