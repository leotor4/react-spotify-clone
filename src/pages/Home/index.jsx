import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"

import capaFoto from "../../assets/albumCovers/templatealbum.jpg"
import capaFoto1 from "../../assets/albumCovers/templatealbum1.jpg";
import capaFoto2 from "../../assets/albumCovers/templatealbum2.jpg";
import capaFoto3 from "../../assets/albumCovers/templatealbum3.jpg";
import capaFoto4 from "../../assets/albumCovers/templatealbum4.jpg";
import capaFoto5 from "../../assets/albumCovers/templatealbum5.jpg";
import capaFoto6 from "../../assets/albumCovers/templatealbum6.jpg";
import capaFoto7 from "../../assets/albumCovers/templatealbum7.jpg";
import {MainButton} from '../../components/MainButton'
import { SecondaryButton } from '../../components/SecondaryButton/index';
import { UserComponent } from '../../service/users';

export function Home(props) {
  const nickname = localStorage.getItem('@db/nickname')
  
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Grandes playlists pra melhorar seu dia!</h1>
        <br/>
        <br/>
        <br/>
        <h1>Bem vindo(a) {nickname}!</h1>
     

        
        
      </div>
      <Link to="/WebPlayer/0"><img src={capaFoto}/></Link>
      <Link to="/WebPlayer/1"><img src={capaFoto1}/></Link>
      <Link to="/WebPlayer/2"><img src={capaFoto2}/></Link>
      <Link to="/WebPlayer/3"><img src={capaFoto3}/></Link>
      <Link to="/WebPlayer/4"><img src={capaFoto4}/></Link>
      <Link to="/WebPlayer/5"><img src={capaFoto5}/></Link>
      <Link to="/WebPlayer/6"><img src={capaFoto6}/></Link>
      <Link to="/WebPlayer/7"><img src={capaFoto7}/></Link>
    </div>
  )
}
