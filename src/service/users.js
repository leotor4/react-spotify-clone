const axios = require('axios');

const getUserPlaylists = async (userId) => {
    try{
        const playlists = await axios.get(`http://localhost:4000/users/${userId}?_embed=plays`)
        return playlists
    }catch(error){
        console.error("Erro ao requirir todas as músicas.")
    }
}

export { getUserPlaylists }