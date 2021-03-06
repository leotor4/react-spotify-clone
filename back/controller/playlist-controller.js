const dbFile = require('../db')
const dbService = require("../service/db-service")


//Retorna todo os usuários cadastrados
const getAllPlaylists = (req, res, next) => {
    res.status(200).json(dbFile.playlists)
}

//Retorna uma playlist cadastrada por ID
const getPlaylistById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Retorna todas as playlists cadastradas de um usuário por ID
const getPlaylistByUserId = (req, res, next) => {
    if(req.params.id){
        userPlaylists = dbFile.playlists.filter(playlist => {
            if(playlist.userId === parseInt(req.params.id)){
                return playlist
            }
        })

        if(userPlaylists.length === 0){
            res.status(404).send("Nenhuma playlist encontrada para o usuário.")
        }else{
            res.send(userPlaylists)
        }
    }
    res.status(400).json("Informe um id de usuário válido")
}

//Atualiza uma playlist By Id
const updatePlyalistById = (req, res, next) => {
    if(req.params.id){
        for(let playlist of dbFile.playlists){
            if(playlist.id === parseInt(req.params.id)){
                updateIndex = dbFile.playlists.indexOf(playlist)
                dbFile.playlists[updateIndex] = {id: dbFile.playlists[updateIndex].id, ...req.body}
                dbService.updateDbFileArchive(JSON.stringify(dbFile))
                res.status(204).json({message: "Playlist atualizado com sucesso!"})
                break
            }
        }
    }
}

//Deleta uma playlist cadastrada por ID
const deletePlaylistById = (req, res, next) => {
    if(req.params.id){
        for(let playlist of dbFile.playlists){
            if(playlist.id === parseInt(req.params.id)){
                deleteIndex = dbFile.playlists.indexOf(playlist)
                dbFile.playlists.splice((deleteIndex),1)
                dbService.updateDbFileArchive(JSON.stringify(dbFile))
                res.status(204).json({message: "Usuário atualizado com sucesso!"})
                break
            }
        }
    }
}


//Cria uma playlist
const newPlaylist = (req, res, next) => {
    if(_validateNewPlaylistReqBody(req.body)){
        lastPlaylistId = dbFile.playlists.at(-1).id + 1
        dbFile.playlists.push({id: lastPlaylistId, ...req.body})
        dbService.updateDbFileArchive(JSON.stringify(dbFile))
        res.status(201).json({message: "Playlist criada com sucesso!"})
    }else{
        res.status(400).json({message: "Preencha os campos obrigatórios corretamente."});
    }
};


const _validateNewPlaylistReqBody = (reqBody) => {
    if(!reqBody.name || !reqBody.userId || !reqBody.capa || !reqBody.songs){
        return false
    }
    return true
}

module.exports = {newPlaylist, deletePlaylistById, updatePlyalistById, getPlaylistById, 
    getPlaylistByUserId, getAllPlaylists}