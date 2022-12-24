import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoutImg from "../../assets/sidebar/list/logout.png"
import { sideBarMenu } from "./sideMenuData";
import * as Unicons from "@iconscout/react-unicons";
import Popup from 'reactjs-popup';
import SidebarCSS from "./Sidebar.module.scss";

const Sidebar = ({ openMenu, setOpenMenu, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/")
  }

  return (
    <>
    <div className={`${openMenu ? SidebarCSS.sidebarToggle : SidebarCSS.sidebar}`}>
      <div className={SidebarCSS.inSidebar}>
        <ul>
          {sideBarMenu.map((sideMenuList) => (
            <li>
              <NavLink onClick={() => setOpenMenu(false)} className={({isActive}) => isActive ? SidebarCSS.active : ''} to={sideMenuList.slug}><img src={sideMenuList.img} alt="sidebarImg" /> {sideMenuList.label}</NavLink>
            </li>
          ))}
          <li onClick={() => setOpen(true)} className={SidebarCSS.logoutSideBar}><img src={logoutImg} alt="logoutImg" /> Logout</li>
          <Popup open={open} closeOnDocumentClick onClose={closeModal} className={SidebarCSS.modal}>
            <div className={SidebarCSS.inModal}>
              <button className="close" onClick={closeModal}>
                <Unicons.UilTimes className="icon" />
              </button>
              <div className={SidebarCSS.logoutModal}>
                <p>Are you sure you want to logout?</p>
                <div className={SidebarCSS.true_false_btn}>
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={logout}>Yes</button>
                </div>
              </div>
            </div>
          </Popup>
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default Sidebar;
