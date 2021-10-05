import React from 'react';
import styles from "./styles.module.scss";
import templateAlbumCover from "../../assets/albumCovers/templatealbum.jpg";
import Song from "../../components/Song/index";
import playlists from '../../dados';
import { getThemeProps } from '@mui/system';

export function WebPlayer() {
    const listSongs = playlists[0].musicas.map( (song) => {
        return <li><Song nome = {song.nome} autor = {song.autor} arquivo = {song.arquivo}/></li>
    })


  return (
    <div className={styles.container}>     
    <container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className = {styles.topImage} /> 
      
        <table className ={styles.table}>
        <tr>
            <td><img src={templateAlbumCover} alt="" className = {styles.albumCover}/></td>
            <td>
            <ul>
                {listSongs}
            </ul>

            </td>

            
        </tr>

        </table>
        </container> 
    </div>
  )
}
