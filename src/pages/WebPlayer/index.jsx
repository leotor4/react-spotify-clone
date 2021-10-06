import React from 'react';
import styles from "./styles.module.scss";
import templateAlbumCover from "../../assets/albumCovers/templatealbum.jpg";
import Song from "../../components/Song/index";
import playlists from '../../dados';
import getPlaylist from '../../service/playlist';
import { getThemeProps } from '@mui/system';
import { useParams } from 'react-router';

export function WebPlayer() {
  const { id } = useParams()
  const currentPlaylist = getPlaylist(id)


  return (
    <div className={styles.container}>     
    <container>      
        <table className ={styles.table}>
        <tr>
            <td><img src={currentPlaylist.capa} alt="" className = {styles.albumCover}/></td>
            <td>
            <ul>
                {currentPlaylist.musicas.map((m) => {
                  return(
                    <li><Song nome = {m.nome} autor = {m.autor} arquivo = {m.arquivo}/></li>
                  )
                })}
            </ul>

            </td>

            
        </tr>

        </table>
        </container> 
    </div>
  )
}
