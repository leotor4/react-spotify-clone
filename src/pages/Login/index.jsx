import React, {useState} from 'react';

import styles from './styles.module.scss';
import api from "../../services/api";

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

            <button onClick={handleLogin} >Fazer login</button>
        </div>
    );
}