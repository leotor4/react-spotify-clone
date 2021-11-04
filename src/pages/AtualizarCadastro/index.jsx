import React, { useState } from 'react';

import styles from './styles.module.scss';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

export function AtualizarCadastro() {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erros, setErros] = useState({ dadosInvalidos: '' });
    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const newUser = {
            nickname: nickname,
            email: email,
            password: password

        }

        await axios.put(`http://localhost:4000/users/${id}`, newUser)
            .then((res) => {
                localStorage.clear()
                history.push('/')
            })
    }

    const user = JSON.parse(localStorage.getItem('@db/nickname'))

    useEffect(() => {
        setNickname(user.nickname)
        setEmail(user.email)
        setPassword(user.password)
        setId(user.id)
    }, [])

    return (
        <div className={styles.container} >
            <form className={styles.formContainer} >

                <section>
                    <input
                        type="text"
                        required
                        placeholder="escreva seu nickname:"
                        onChange={(v) => setNickname(v.target.value)}
                        value={nickname}
                    />
                </section>

                <section>
                    <input
                        type="email"
                        required
                        placeholder="escreva seu e-mail:"
                        onChange={(v) => setEmail(v.target.value)}
                        value={email}
                    />
                </section>

                <section>
                    <input
                        type="password"
                        required
                        placeholder="escreva sua senha:"
                        onChange={(v) => setPassword(v.target.value)}
                        value={password}
                    />
                </section>
            </form>

            <button onClick={handleCadastro} >Cadastrar</button>
        </div>
    );
}