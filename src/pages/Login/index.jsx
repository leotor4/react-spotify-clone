import React, {useState} from 'react';

import styles from './styles.module.scss';
import api from "../../services/api";
import { getAllSongs } from '../../service/song';
import { createPlaylist, updateSongs } from '../../service/playlist'

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const auth = await api.post('/auth-user', {email: email, password:password});

            localStorage.setItem('@spotify', auth.data);
        } catch (e) {
            alert("Erro na autenticação do usuário");
        }
    }

    // função de logout para implementar
    async function logout() {
        localStorage.removeItem('@spotify');
    }

    async function getSongs(){
        console.log(await getAllSongs())
    }

    async function newPlaylist(){
        console.log(await createPlaylist("Playlist numero 3",
        1,
        [{
            id: 1,
            name: "tarara"
        }]   
        ))
    }

    const putMusic = async () => {
        const songs = [
            {
                id: 1,
                nome: "SICKO MODE",
                autor: "XANAX",
                arquivo: "../../assets/music/p1_m1.mp3"
            }
        ]
        const response = await updateSongs(4, songs)
    }

    return (
        <div className={styles.container} >
            <form className={styles.formContainer} >

                <section>
                    <label>escreva seu e-mail: </label>
                    <input
                        type="email"
                        onChange={(value) => setEmail(value.target.value)}
                    />
                </section>

                <section>
                    <label>escreva sua senha: </label>
                    <input
                        type="password"
                        onChange={(value) => setPassword(value.target.value)}
                    />
                </section>
            </form>

            <button onClick={putMusic} >Fazer login</button>
        </div>
    );
}