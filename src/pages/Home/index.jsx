import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"
import axios from 'axios';

export function Home(props) {
  const nickname = localStorage.getItem('@db/nickname')

  const [totalAlbums, setTotalAlbums] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:4000/albums')
     .then( (res) => setTotalAlbums(res.data) );
  },   [] )

  const res = totalAlbums.map( (totalAlbums) =>{
    return(
      <Link  to = { `/WebPlayer/${totalAlbums.id}` } > 
      <img src= {totalAlbums.capa}     /> </Link>
    )
  }  )


  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Grandes músicas pra melhorar seu dia!!</h1>
        <br/>
        <br/>
        <br/>
        <h1>Bem vindo(a) {nickname}!</h1>
 

      {/*lista de playlists*/} 
      </div>
      {res}
    </div>
  )
}
