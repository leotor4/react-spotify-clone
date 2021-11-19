const axios = require('axios');

//playlistName - string
//userId - number
//songs - array of songs
const createPlaylist = async (playlistName, userId, songs) => {
    try{
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/plays`, {
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
        const playlist = await axios.get(`${process.env.REACT_APP_BASE_URL}/plays?id=${playlistId}&b=l`)
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

        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/plays/${playlistId}`,requestBody,{
            headers: {
              'Content-Type': 'application/json'
            }
          } )
        return response
    }catch(err){
        console.error(err)
    }
}

export { createPlaylist, updateSongs, getPlaylistById };
