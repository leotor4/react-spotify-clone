const axios = require('axios');

const getUserPlaylistsById = async (userId) => {
    try{
        const playlists = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${userId}?_embed=plays`)
        return playlists.data[0].plays
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

const getUserPlaylistsByNickname = async (nickname) => {
    try{
        const playlists = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?nickname=${nickname}&_embed=plays`)
        return playlists.data[0].plays
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

const findUserIdByNickname = async (nickname) => {
    try{
        const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?nickname=${nickname}`)
        return users.data[0].id
    }catch(error){
        console.error("Erro ao requirir os usuários")
    }
}

const findUserByNickname = async (nickname) => {
    try{
        const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?nickname=${nickname}`)
        return users.data[0]
    }catch(error){
        console.error("Erro ao requirir os usuários")
    }
}


export { getUserPlaylistsById, getUserPlaylistsByNickname, findUserIdByNickname };
