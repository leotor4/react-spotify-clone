import styles from "./styles.module.scss";
import Song from "../../components/Song/index";

import getPlaylist from '../../service/playlist';
import { getThemeProps } from '@mui/system';
import { useParams } from 'react-router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export function WebPlayer() {
  const { id } = useParams()
  const currentPlaylist = getPlaylist(id-1)

  const [playlist, setPlaylist] = useState([]);
  const [capa, setCapa] = useState();
 
  useEffect(async() => {
    async function getData() {
      const result = await axios.get(`http://localhost:4000/playlists/${id}`);
      const { capa, musicas } = result.data;
      console.log(result)
      // console.log(capa)
      setCapa(capa);
      setPlaylist(musicas);
    }

    await getData();
  },   [] )



  const res1 = playlist.map( (song, index) =>{
    return(
      <li> <Song key={index} nome={song.nome} autor={song.autor} arquivo={song.arquivo}/> </li>
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
