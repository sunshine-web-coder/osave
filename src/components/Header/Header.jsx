import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import avatarImg from "../../assets/img_avatar.png"
import { Squash as Hamburger } from 'hamburger-react'
import HeaderCss from "./Header.module.scss";

const Header = ({ isLoggedIn, openMenu, setOpenMenu }) => {

  return (
    <>
      {!isLoggedIn ? (
        <div className={HeaderCss.header}>
          <div className={HeaderCss.inHeader}>
            <Link to="/" className={HeaderCss.logo}>
              <img src={Logo} alt="logo" />
              <h2 className={HeaderCss.logoText}>sAVe</h2>
            </Link>

            <div className={HeaderCss.headerSupportLink}>
              <Link to="">Support</Link>
            </div>
          </div>
        </div>
      ) : null}
      {isLoggedIn ? (
        <div className={`${HeaderCss.header} ${HeaderCss.dashboard}`}>
          <div className={HeaderCss.inHeader}>
            <div className={HeaderCss.logoHamburger}>
              <div className={HeaderCss.hamburger}>
                <Hamburger rounded size={30} toggled={openMenu} toggle={setOpenMenu} />
              </div>
              <Link to="/" className={HeaderCss.logo}>
                <img src={Logo} alt="logo" />
                <h2 className={HeaderCss.logoText}>sAVe</h2>
              </Link>
            </div>

            <div className={HeaderCss.headerRightBox}>
              <div className={HeaderCss.hRBox}>
                <div className={HeaderCss.searchBox}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_257_193)">
                  <circle cx="10.1562" cy="10.1562" r="9.40625" stroke="#4378DB" stroke-width="1.5"/>
                  <path d="M17.1875 17.1875L23.4375 23.4375" stroke="#4378DB" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_257_193">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                </div>
                <Link to="/dashboard/notifications">
                  <div className={HeaderCss.notification}>
                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 25C13.2246 25 14.6236 23.6011 14.6236 21.875H8.3765C8.3765 23.6011 9.77542 25 11.5 25ZM22.0171 17.6899C21.0738 16.6763 19.3086 15.1514 19.3086 10.1562C19.3086 6.3623 16.6485 3.3252 13.0616 2.58008V1.5625C13.0616 0.699707 12.3623 0 11.5 0C10.6377 0 9.93851 0.699707 9.93851 1.5625V2.58008C6.3516 3.3252 3.69144 6.3623 3.69144 10.1562C3.69144 15.1514 1.9263 16.6763 0.982944 17.6899C0.689975 18.0049 0.560092 18.3813 0.562534 18.75C0.567905 19.5508 1.19632 20.3125 2.12992 20.3125H20.8702C21.8037 20.3125 22.4327 19.5508 22.4375 18.75C22.44 18.3813 22.3101 18.0044 22.0171 17.6899Z" fill="#4378DB"/>
                    </svg>
                    <button className={HeaderCss.notify_counter}>99+</button>
                  </div>
                </Link>
              </div>
              <Link to="/dashboard/account-settings">
              <div className={HeaderCss.hLBox}>
                <div className={HeaderCss.name}>
                  Olawalebolaji <br /> Morenikeji
                </div>
                <div className={HeaderCss.avatar}>
                 <img src={avatarImg} alt="avatarImg" />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
