import styles from "./styles.module.scss";
import Song from "../../components/Song/index";

import { getPlaylistById } from '../../service/playlist';
import { getAllAlbums } from "../../service/song";
import { getThemeProps } from '@mui/system';
import { useParams } from 'react-router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export function WebPlayer() {
  
  const { id } = useParams()
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [capa, setCapa] = useState([]);
 
  let music = []
  

  useEffect(async () => {
    getPlaylistById(id).then(resp => {
      setSongs(resp.songs)
      music = resp.songs
      console.log(music)
    })
  }, [] )




 const res1 = music.map((song) =>{
   console.log("DSDS")
  return(
    <li> <Song key={id} nome={song.nome} autor={song.autor} arquivo={song.arquivo}/> </li>
  )
})


  return (
    <div className={styles.container}>     
    <container>      
        <table className ={styles.table}>
        <tr>
           
            <td>
            <ul>
            <li> {JSON.stringify(music)} </li>
            </ul>
            </td>  
        </tr>

        </table>
        </container> 
    </div>
  )
}
