import React from 'react'
import { Link } from 'react-router-dom'
import errorPage from "../../assets/404page.png"
import NotFoundCSS from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={NotFoundCSS.NotFound}>
        <div className={NotFoundCSS.inNotFound}>
          <h4>PAGE NOT FOUND</h4>
          <img src={errorPage} alt={errorPage} />
          <p>Oops, This page does not exist... Check again</p>
          <Link to="/">Go back</Link>
        </div>
    </div>
  )
}

export default NotFound