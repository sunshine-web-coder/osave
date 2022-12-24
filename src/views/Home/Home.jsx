import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/home.png";
import DocsType from "./DocsType";
import HomeCss from "./Home.module.scss";

const Home = ({ isLoggedIn }) => {
  return (
    <div className={HomeCss.home}>
      <div className={HomeCss.inHome}>
        <div className={HomeCss.left}>
          <div className={HomeCss.title}>
            <h1>OsaVe</h1>
          </div>
          <div className={HomeCss.subtitle}>
            <h3>Online Secure Document Safe</h3>
          </div>
          <div className={HomeCss.desc}>
            <p>
              This is an online uninterrupted secure documents safe which can be
              assess from anywhere all over the world at any point in need.
            </p>
          </div>
          <div className={HomeCss.button}>
            {isLoggedIn ? (
              <Link to="/dashboard/files">Upload Files</Link>
            ) : (
              <Link to="/login">Get Started</Link>
            )}
          </div>
        </div>
        <div className={HomeCss.right}>
          <img src={homeImg} alt="homeImg" />
        </div>
      </div>
      <DocsType />
    </div>
  );
};

export default Home;
