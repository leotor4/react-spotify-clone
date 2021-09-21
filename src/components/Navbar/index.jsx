import React from 'react'
import { Link } from 'react-router-dom'
import logoSpotify from "../../assets/spotify-logo.png"
import styles from "./styles.module.scss"

export function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoSpotify} alt="" />
        <p className={styles.title}>Spotify</p>
      </div>

      <div className={styles.links}>
        <Link to="/"><p className={styles.pages}>Home</p></Link>
        <Link to="/faq"><p className={styles.pages}>Faq</p></Link>
      </div>
    </div>
  )
}