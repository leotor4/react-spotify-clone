
//Retorna todo os usuários cadastrados
const getAllPlaylists = (req, res, next) => {
    res.json({message: "Todos os usuários"})
}

//Retorna uma playlist cadastrada por ID
const getPlaylistById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Retorna todas as playlists cadastradas de um usuário por ID
const getPlaylistByUserId = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Atualiza uma playlist By Id
const updatePlyalistById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Deleta uma playlist cadastrada por ID
const deletePlaylistById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}


//Cria uma playlist
const newPlaylist = (req, res, next) => {
    res.json({message: "POST new playlist"});
};

module.exports = {newPlaylist, deletePlaylistById, updatePlyalistById, getPlaylistById, 
    getPlaylistByUserId, getAllPlaylists}