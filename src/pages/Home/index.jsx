import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "./styles.module.scss"
import axios from 'axios';
import { getUserPlaylistsByNickname } from "../../service/users";

export function Home(props) {
   //Mudei para json parse 
   const history = useHistory()
  const [totalAlbums, setTotalAlbums] = useState([]);
  const [user, setUser] = useState("")

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('@db/nickname'))
    if(user == null){
      history.push('/')
      return
      
    }else{
      setUser(user)
    }
    setTotalAlbums(await getUserPlaylistsByNickname(user.nickname))
  },[] )

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
        <h1>Bem vindo(a) {user.nickname}!</h1>
 

      {/*lista de playlists*/} 
      </div>
      {res}
      <div>
      <Link  to = { `/user-playlists/${user.nickname}` } > 
        <img src= 'adiciona_playlist.png' />
      </Link>
      </div>
    </div>
  )
}
