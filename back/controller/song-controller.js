const dbFile = require('../db')

const getSongs = (req, res, next) =>{
    if(req.query.name){
       songsByName = dbFile.songs.filter((song) => {
           console.log(song.nome)
           if(song.nome.toLowerCase().includes(req.query.name.toLowerCase())){
               return song
           }
       })
       res.send(songsByName)
    }else{
        res.send(dbFile.songs)
    }
}

module.exports = {getSongs}