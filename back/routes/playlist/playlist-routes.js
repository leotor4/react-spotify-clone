let express = require('express');
let router = express.Router();
let playlistController = require('../../controller/playlist-controller')

//Retorna todos os playlists cadastrados.
router.get("/", playlistController.getAllPlaylists)

//Retorna um playlist cadastrado por ID.
router.get("/:id", playlistController.getPlaylistById)

//Cadastra uma novo playlist
router.post("/", playlistController.newPlaylist)

//Atualiza um playlist cadastrador por ID
router.put("/:id", playlistController.updatePlyalistById)

//Deleta um playlist existente por ID
router.delete("/:id", playlistController.deletePlaylistById)

module.exports = router

