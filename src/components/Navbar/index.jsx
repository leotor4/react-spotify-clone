import React from 'react'
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
        <p>Premium</p>
        <p>Faq</p>
      </div>
    </div>
  )
}