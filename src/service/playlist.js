import capaFoto from "../assets/albumCovers/templatealbum0.jpg";
import capaFoto1 from "../assets/albumCovers/templatealbum1.jpg";
import capaFoto2 from "../assets/albumCovers/templatealbum2.jpg";
import capaFoto3 from "../assets/albumCovers/templatealbum3.jpg";
import capaFoto4 from "../assets/albumCovers/templatealbum4.jpg";
import capaFoto5 from "../assets/albumCovers/templatealbum5.jpg";
import capaFoto6 from "../assets/albumCovers/templatealbum6.jpg";
import capaFoto7 from "../assets/albumCovers/templatealbum7.jpg";

import p1_m1 from "../assets/music/p1_m1.mp3";
import p1_m2 from "../assets/music/p1_m2.mp3";
import p1_m3 from "../assets/music/p1_m3.mp3";

import p2_m1 from "../assets/music/p2_m1.mp3";
import p2_m2 from "../assets/music/p2_m2.mp3";
import p2_m3 from "../assets/music/p2_m3.mp3";

import p3_m1 from "../assets/music/p3_m1.mp3";
import p3_m2 from "../assets/music/p3_m2.mp3";
import p3_m3 from "../assets/music/p3_m3.mp3";

import p4_m1 from "../assets/music/p4_m1.mp3";
import p4_m2 from "../assets/music/p4_m2.mp3";
import p4_m3 from "../assets/music/p4_m3.mp3";

import file1 from "../assets/music/fil1.mp3";
import file2 from "../assets/music/fil2.mp3";
import file3 from "../assets/music/fil3.mp3";

const axios = require('axios');

//playlistName - string
//userId - number
//songs - array of songs
const createPlaylist = async (playlistName, userId, songs) => {
    try{
        const response = await axios.post('http://localhost:4000/plays', {
            name: playlistName,
            capa: "albumCovers/templatealbum0.jpg",
            userId: userId,
            songs: songs
        })
        return response
    }catch(err){
        console.error(err)
    }
}

const getPlaylistById = async (playlistId) => {
    try{
        const playlist = await axios.get(`http://localhost:4000/plays?id=${playlistId}&b=l`)
        let jaja =  await playlist.data[0]
        return jaja
    }catch(error){
        console.log("Erro ao buscar playlist por id")
    }
}

//array of songs (songId, songName, author, songPath)
const updateSongs = async (playlistId, songsArray) => {
    try{
        const playlistData = await getPlaylistById(playlistId)

        const requestBody = {
            id: playlistId,
            name: playlistData.name,
            userId: playlistData.userId,
            capa: playlistData.capa,
            songs: songsArray
        }

        const response = await axios.put(`http://localhost:4000/plays/${playlistId}`,requestBody,{
            headers: {
              'Content-Type': 'application/json'
            }
          } )
        return response
    }catch(err){
        console.error(err)
    }
}


const playlists = [
    {
        id: 1,
        nome: "test1",
        capa: capaFoto,
        musicas:    [
            {
                id: 1,
                nome: "SICKO MODE",
                autor: "Travis Scott ft. Drake",
                arquivo: p1_m1
            },
            {
                id: 2,
                nome: "Goosebumps",
                autor: "Travis Scott ft. Kendrick Lamar",
                arquivo: p1_m2
            },
            {
                id: 3,
                nome: "HIGHEST IN THE ROOM",
                autor: "Travis Scott",
                arquivo: p1_m3
            }
        ]
    },{
        id: 2,
        nome: "test2",
        capa: capaFoto1,
        musicas:    [
            {
                id: 1,
                nome: "Riptide",
                autor: "Vance Joy",
                arquivo: p2_m1
            },
            {
                id: 2,
                nome: "Sweater Weather",
                autor: "The Neighbourhood",
                arquivo: p2_m2
            },
            {
                id: 3,
                nome: "Void",
                autor: "The Neighbourhood",
                arquivo: p2_m3
            }
        ]
    },{
        id: 3,
        nome: "test3",
        capa: capaFoto2,
        musicas:    [
            {
                id: 1,
                nome: "Teen Romance",
                autor: "Lil Peep",
                arquivo: p3_m1
            },
            {
                id: 2,
                nome: "Life Goes On",
                autor: "Oliver Tree",
                arquivo: p3_m2
            },
            {
                id: 3,
                nome: "STAY",
                autor: "Kid LAROI, Justin Bieber",
                arquivo: p3_m3
            }
        ]
    },{
        id: 4,
        nome: "test4",
        capa: capaFoto3,
        musicas:    [
            {
                id: 1,
                nome: "Smells Like Teen Spirit",
                autor: "Nirvana",
                arquivo: p4_m1
            },
            {
                id: 2,
                nome: "Californication",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m2
            },
            {
                id: 3,
                nome: "Can't Stop",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m3
            }
        ]
    },{
        id: 5,
        nome: "test5",
        capa: capaFoto4,
        musicas:    [
            {
                id: 1,
                nome: "Smells Like Teen Spirit",
                autor: "Nirvana",
                arquivo: p4_m1
            },
            {
                id: 2,
                nome: "Californication",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m2
            },
            {
                id: 3,
                nome: "Can't Stop",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m3
            }
        ]
    },{
        id: 6,
        nome: "test6",
        capa: capaFoto5,
        musicas:    [
            {
                id: 1,
                nome: "Smells Like Teen Spirit",
                autor: "Nirvana",
                arquivo: p4_m1
            },
            {
                id: 2,
                nome: "Californication",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m2
            },
            {
                id: 3,
                nome: "Can't Stop",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m3
            }
        ]
    },{
        id: 7,
        nome: "test7",
        capa: capaFoto6,
        musicas:    [
            {
                id: 1,
                nome: "Smells Like Teen Spirit",
                autor: "Nirvana",
                arquivo: p4_m1
            },
            {
                id: 2,
                nome: "Californication",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m2
            },
            {
                id: 3,
                nome: "Can't Stop",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m3
            }
        ]
    },{
        id: 8,
        nome: "test8",
        capa: capaFoto7,
        musicas:    [
            {
                id: 1,
                nome: "Smells Like Teen Spirit",
                autor: "Nirvana",
                arquivo: p4_m1
            },
            {
                id: 2,
                nome: "Californication",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m2
            },
            {
                id: 3,
                nome: "Can't Stop",
                autor: "Red Hot Chili Peppers",
                arquivo: p4_m3
            }
        ]
    }
]
const totalPlaylists = playlists.length;

const getPlaylist = (id) => {
    if(id > (playlists.length-1) || id < 0){
        return playlists[0];
    }else{
        return playlists[id];
    }

}


export default getPlaylist;
export { totalPlaylists, createPlaylist, updateSongs, getPlaylistById };