import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { useProduct } from "../../../context/ProductContext";

const Header = () => {
  const { user, logOut, signInWithGoogle } = useAuth();
  const { searchBooks, showLikes, basket } = useProduct();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(() => {
    return JSON.parse(localStorage.getItem("toggle")) || false;
  });

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
    document.body.style.background = toggle ? "black" : "#fffaf4";
    document.body.style.color = toggle ? "white" : "black";
  }, [toggle]);

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div>
            <h2>
              Ми<span className={scss.bes}>∞</span>
            </h2>
          </div>

          <nav>
            <Link to="/" className={scss.link}>
              Главная
            </Link>
            <Link to="/books" className={scss.link}>
              Книги
            </Link>
            <Link to="/aboutUs" className={scss.link}>
              О нас
            </Link>
            {user ? (
              user.email === "talgattulobaev519@gmail.com" ||
              "batirovanurrahat3@gmail.com" ? (
                <Link to="/admin" className={scss.link}>
                  Админ
                </Link>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </nav>

          <div className={scss.icons}>
            <div className={scss.container}>
              <input className={scss.checkbox} type="checkbox" />
              <div className={scss.mainbox}>
                <div className={scss.iconContainer}>
                  <svg
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className={scss.search_icon}
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => searchBooks(e.target.value)}
                  className={scss.search_input}
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>

            <Tooltip onClick={() => navigate("/like")} title="Избранный">
              <FavoriteIcon className={scss.icon} />
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                {showLikes.length}
              </span>
            </Tooltip>

            <Tooltip onClick={() => navigate("/basket")} title="Корзина">
              <LocalMallIcon className={scss.icon} />
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                {basket.length}
              </span>
            </Tooltip>
            {user ? (
              <Tooltip title={user.displayName}>
                <IconButton onClick={handleProfileMenuOpen}>
                  <Avatar
                    alt={user.displayName}
                    src={user.photoURL}
                    sx={{ width: "30px", height: "30px" }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <PersonIcon
                className={scss.icon}
                onClick={handleProfileMenuOpen}
                aria-controls={isMenuOpen ? "profile-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? "true" : undefined}
              />
            )}

            <label className={scss.switch_container}>
              <input
                onClick={() => setToggle(!toggle)}
                type="checkbox"
                checked={toggle}
                readOnly
              />
              <span className={scss.slider}></span>
            </label>
          </div>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        id="profile-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {user ? (
          <>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                logOut();
              }}
            >
              Log Out
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                signInWithGoogle();
              }}
            >
              Change account
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose}>
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign In
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                to="/signUp"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign Up
              </Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Header;
