import React from 'react'
import styles from "./styles.module.scss"
import logoImg from "../../assets/spotify-logo.png"

export function Footer() {
  return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
        {/* LOGO */}
        <section className="logo">
          <img src="" alt="" />
          <p></p>
        </section>

        {/* SESSÕES E LINKS */}
        <section>

        </section>

        {/* REDES SOCIAIS */}
        <section>

        </section>
        </div>
        <small>© 2021 Spotify Clone</small>
      </div>
  )
}
