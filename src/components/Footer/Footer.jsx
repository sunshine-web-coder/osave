import React from "react";
import FooterCss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.inFooter}>Copyright 2020</div>
    </div>
  );
};

export default Footer;
