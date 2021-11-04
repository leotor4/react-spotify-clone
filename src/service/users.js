const axios = require('axios');

const getUserPlaylistsById = async (userId) => {
    try{
        const playlists = await axios.get(`http://localhost:4000/users/${userId}?_embed=plays`)
        return playlists.data[0].plays
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

const getUserPlaylistsByNickname = async (nickname) => {
    try{
        const playlists = await axios.get(`http://localhost:4000/users?nickname=${nickname}&_embed=plays`)
        return playlists.data[0].plays
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

const findUserIdByNickname = async (nickname) => {
    try{
        const users = await axios.get(`http://localhost:4000/users?nickname=${nickname}`)
        return users.data[0].id
    }catch(error){
        console.error("Erro ao requirir os usuários")
    }
}


export { getUserPlaylistsById, getUserPlaylistsByNickname, findUserIdByNickname }