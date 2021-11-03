import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"
import axios from 'axios';

export function Home(props) {
  const nickname = localStorage.getItem('@db/nickname')

  const [totalPlaylists, setTotalPlaylists] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:4000/playlists')
     .then( (res) => setTotalPlaylists(res.data) );
  },   [] )

  const res = totalPlaylists.map( (totalPlaylist) =>{
    return(
      <Link  to = { `/WebPlayer/${totalPlaylist.id}` } > 
      <img src= {totalPlaylist.capa}     /> </Link>
    )
  }  )


  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>Grandes playlists pra melhorar seu dia!!</h1>
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
