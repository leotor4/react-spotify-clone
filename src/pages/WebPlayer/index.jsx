import styles from "./styles.module.scss";
import Song from "../../components/Song/index";

import getPlaylist from '../../service/playlist';
import { getAllAlbums } from "../../service/song";
import { getThemeProps } from '@mui/system';
import { useParams } from 'react-router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export function WebPlayer() {
  const { id } = useParams()
  const currentPlaylist = getAllAlbums(id-1)

  const [album, setAlbum] = useState([]);
  const [capa, setCapa] = useState([]);
 
  useEffect( () => {
    axios.get(`http://localhost:4000/albums/${id}`)
     .then( 
       (res) => setAlbum(res.data.musicas) );
  },   [] )



  const res1 = album.map( (song) =>{
    return(
      <li> <Song key={id} nome={song.nome} autor={song.autor} arquivo={song.arquivo}/> </li>
    )
  }  )


  return (
    <div className={styles.container}>     
    <container>      
        <table className ={styles.table}>
        <tr>
            <td>{(capa) && (<img src={`${capa}`} alt="" className={styles.albumCover}/>)}</td>
            <td>
            <ul>
                {res1}
            </ul>
            </td>  
        </tr>

        </table>
        </container> 
    </div>
  )
}
