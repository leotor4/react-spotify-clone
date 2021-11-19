const axios = require('axios');

const getAllSongs = async () => {
    try{
        const allSongs = await axios.get('http://localhost:4000/songs')
        return allSongs.data
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}


const getSongsByName = async (songName) => {
    try{
        const allSongs = await axios.get(`http://localhost:4000/songs?nome_like=${songName}`)
        return allSongs.data
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

const getAllAlbums = async () => {
    try{
        const allAlbums = await axios.get('http://localhost:4000/albums')
        return allAlbums.data
    }catch(error){
        console.error("Erro ao requirir todos os álbuns.")
    }
}



export { getAllSongs, getAllAlbums, getSongsByName }