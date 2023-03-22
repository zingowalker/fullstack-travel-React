import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className={`left ${showMenu ? "active" : ""}`}>
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item usd">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>

                    <div className="item">
                        <Link className="link" to="/tours/1">
                            Packages
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/tour/2">
                            Trekking
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/tours/3">
                            Adventure
                        </Link>
                    </div>
                </div>
                <div className="center logo">
                    <Link className="link" to="/">
                        EpicTravels
                    </Link>
                </div>
                <div className={`right ${showMenu ? "active" : ""}`}>
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
                </div>

                <div className="icons">
                    <SearchIcon />
                    <PersonOutlinedIcon />
                    <FavoriteOutlinedIcon />
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon />
                        <span className="cartInd">0</span>
                    </div>
                    <button className="toggleButton" onClick={handleToggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
