import capaFoto from "./assets/albumCovers/templatealbum.jpg";
import capaFoto2 from "./assets/albumCovers/templatealbum2.jpg";

import musica1 from "./assets/music/235583.mp3";
import musica2 from "./assets/music/255576.mp3";
import musica3 from "./assets/music/442790.mp3";

const playlists = [
    {
        id: 1,
        nome: "test1",
        capa: capaFoto,
        musicas:    [
            {
                id: 1,
                nome: "synth",
                autor: "techno1",
                arquivo: musica1
            },
            {
                id: 2,
                nome: "chords 2",
                autor: "mim taia",
                arquivo: musica2
            },
            {
                id: 3,
                nome: "epic orchestra 1",
                autor: "bico chuarque",
                arquivo: musica3
            }
        ]
    },
    {
        id: 2,
        nome: "test2",
        capa: capaFoto2,
        musicas:    [
            {
                id: 1,
                nome: "musica 1",
                autor: "vaetano celoso",
                arquivo: musica1
            },
            {
                id: 2,
                nome: "musica 2",
                autor: "gilberto gil",
                arquivo: musica2
            },
            {
                id: 3,
                nome: "musica 3",
                autor: "nilton mascimento",
                arquivo: musica3
            }
        ]
    }
]

export default playlists;