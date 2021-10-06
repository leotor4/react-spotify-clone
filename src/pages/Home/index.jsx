import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

import capaFoto from "../../assets/albumCovers/templatealbum.jpg"
import capaFoto2 from "../../assets/albumCovers/templatealbum2.jpg";
// import Imgp2 from "../../assets/p2.jpg"
// import Imgp3 from "../../assets/p3.jpg"
// import Imgp4 from "../../assets/p4.jpg"
// import Imgp5 from "../../assets/p5.jpg"
// import Imgp6 from "../../assets/p6.jpg"
// import Imgp7 from "../../assets/p7.jpg"
// import Imgp8 from "../../assets/p8.jpg"
import {MainButton} from '../../components/MainButton'
import { SecondaryButton } from '../../components/SecondaryButton/index';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Grandes playlists pra melhorar seu dia!</h1>

        
        
      </div>
      <Link to="/WebPlayer/0"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto2}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto}/></Link>
    </div>
  )
}
